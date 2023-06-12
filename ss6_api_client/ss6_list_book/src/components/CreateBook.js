import {useNavigate} from "react-router";
import * as bookService from "../service/BookService"
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {BallTriangle} from "react-loader-spinner";
import React from "react";
import {NavLink} from "react-router-dom";

export function CreateBook() {
    const navigate = useNavigate();
    return (
        <>
            <NavLink to="/" className="btn btn-outline-success">
                Home
            </NavLink>
            <Formik
                initialValues={{
                    title: '',
                    quantity: ''
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const submit = async () => {
                        await bookService.create(values)
                        console.log(values)
                        setSubmitting(false)
                        toast(`Thông báo thêm ${values.title} thành công`);
                        navigate('/')
                    }
                    submit();
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className='container'>
                            <h2>Add a new Book</h2>
                            <Form>
                                <label htmlFor="title">Title</label>
                                <Field type='text' className='form-control' id='title' name='title'/>
                                <label htmlFor="quantity">Quantity</label>
                                <Field type='text' className='form-control' id='quantity' name='quantity'/>
                                {
                                    isSubmitting ?
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
                                        :
                                        <button type='submit' className='btn btn-outline-primary'>Submit</button>
                                }
                            </Form>
                        </div>
                    )
                }
            </Formik>
        </>
    )
}