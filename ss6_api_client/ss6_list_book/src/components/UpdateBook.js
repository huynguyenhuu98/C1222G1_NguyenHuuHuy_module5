import React, {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import * as BookService from "../service/BookService";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {BallTriangle} from "react-loader-spinner";

export function UpdateBook() {
    const navigate = useNavigate();
    const param = useParams();
    const [title, setTitle] = useState("");
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        const update = async () =>{
            const book = await BookService.getById(param.id);
            setTitle(book.title)
            setQuantity(book.quantity)
        }
        update();
    }, [param.id]);

    return (
        <>
            <Formik
                initialValues={{
                    title: title,
                    quantity: quantity
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const create = async () => {
                        try {
                            await BookService.edit(param.id, values)
                            toast("Cập nhật thành công");
                            navigate("/");
                            console.log(values)
                        } catch (error) {
                            toast("Cập nhật thất bại !");
                        }

                        setSubmitting(false);
                    };
                    create();
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <h1>Update</h1>
                        <Field id="id" type="hidden" name="id"/>
                        <label htmlFor="title">Title</label>
                        <Field type='text' className='form-control' id='title' name='title'/>
                        <label htmlFor="quantity">Quantity</label>
                        <Field type='text' className='form-control' id='quantity' name='quantity'/>
                        {isSubmitting ? (
                            <BallTriangle
                                height={100}
                                width={100}
                                radius={5}
                                color="#4fa94d"
                                ariaLabel="ball-triangle-loading"
                                wrapperClass={{}}
                                wrapperStyle=""
                                visible={true}
                            />
                        ) : (
                            <button type="submit" className="btn btn-success">
                                Update
                            </button>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    );
}