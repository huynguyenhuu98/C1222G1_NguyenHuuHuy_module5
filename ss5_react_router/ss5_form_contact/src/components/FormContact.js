import {Field, Formik, ErrorMessage, Form} from "formik";
import * as Yup from 'yup'
import React from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BallTriangle} from 'react-loader-spinner'

export function FormContact() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .required('Required')
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Nhập đúng abc@gmail.com'),
                    phone: Yup.string()
                        .required('Required')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Contract ${values.name} create success !`)
                    })
                }}
            >
                {
                    ({isSubmitting}) => (
                        <div className='container'>
                            <h1><strong>Contact Form</strong></h1>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor="name" className='form-label'>Name</label>
                                    <Field type='text' id='name' className='form-control' name='name'
                                           style={{width: '30%'}}/>
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <Field type='text' id='email' className='form-control' name='email'
                                           style={{width: '30%'}}/>
                                    <ErrorMessage name='email' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="phone" className='form-label'>Phone</label>
                                    <Field type='text' id='phone' className='form-control' name='phone'
                                           style={{width: '30%'}}/>
                                    <ErrorMessage name='phone' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="message" className='form-label'>Message</label>
                                    <Field type='text' id='message' className='form-control' name='message'
                                           component='textarea' rows={4} style={{width: '30%'}}/>
                                </div>
                                {isSubmitting ?
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