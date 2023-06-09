import {useNavigate} from "react-router";
import * as toDoListService from "../service/ToDoListService";
import {toast, ToastContainer} from "react-toastify";
import {Form, Formik} from "formik";
import {BallTriangle} from "react-loader-spinner";
import React from "react";

export function ToDoTask() {
    const navigate = useNavigate();
    return (
        <>
            <Formik
                initialValues={{
                    userId: '',
                    id: '',
                    title: '',
                    completed: ''
                }}
                onSubmit={(values, {setSubmitting}) => {
                    const submit = async () => {
                        await toDoListService.submit(values)
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
                            <h1>To Do List</h1>
                            <input type='text' className='form-control'/>
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