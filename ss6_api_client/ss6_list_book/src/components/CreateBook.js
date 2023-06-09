import {useNavigate} from "react-router";
import * as bookService from "../service/BookService"
import {toast, ToastContainer} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {BallTriangle} from "react-loader-spinner";
import React from "react";
import {create} from "../service/BookService";

export function CreateBook() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    title: '',
                    quantity: ''
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const submit = async () => {
                        await bookService.create(values)
                        setSubmitting(false)
                        toast(`Thông báo hiển thị ${values.title} thành công`);
                        navigate('/')
                    }
                    submit();
                }}
            >
                {
                    ({isSubmitting}) => (
                        <Form>
                            <h2>Add a new Book</h2>
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
                    )
                }
            </Formik>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}