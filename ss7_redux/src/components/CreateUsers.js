import {useNavigate} from "react-router-dom";
import * as userService from "../service/UserService"
import {toast} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {BallTriangle} from "react-loader-spinner";
import React from "react";

export function CreateUser() {
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
                        await userService.create(values)
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
                            <h2>Add a new User</h2>
                            <Form>
                                <label htmlFor="name">Name</label>
                                <Field type='text' className='form-control' id='name' name='name'/>
                                <label htmlFor="email">Email</label>
                                <Field type='text' className='form-control' id='email' name='email'/>
                                <label htmlFor="website">Website</label>
                                <Field type='text' className='form-control' id='website' name='website'/>
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