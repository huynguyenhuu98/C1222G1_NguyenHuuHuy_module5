import {Field, Formik, ErrorMessage, Form} from "formik";
import * as Yup from 'yup'
import React from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BallTriangle} from 'react-loader-spinner'

export function HealthDeclaration() {
    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    idCard: '',
                    birthday: '',
                    gender: '0',
                    country: '',
                    job: '',
                    department: '',
                    insurance: '0',
                    province: '',
                    district: '',
                    wards: '',
                    idHome: '',
                    phone: '',
                    email: '',
                    task1: '',
                    task2: ['sot','ho','khotho','viemphoi','dauhong','metmoi'],
                    task3: ['check1','check2','check3']
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Required'),
                    idCard: Yup.string().required('Required'),
                    birthday: Yup.string().required('Required')
                        .matches(/^19[0-9]{2}|20[0-9]{2}$/, 'năm sinh lớn hơn 1900'),
                    province: Yup.string().required('Required'),
                    district: Yup.string().required('Required'),
                    wards: Yup.string().required('Required'),
                    idHome: Yup.string().required('Required'),
                    phone: Yup.string().required('Required'),
                    email: Yup.string().required('Required')
                        .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Nhập đúng abc@gmail.com')
                })}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        setSubmitting(false)
                        toast(`Contract ${values.name} create success !`)
                    },2000)
                }}>
                {
                    ({isSubmitting}) => (
                        <div className='container'>
                            <h2><strong>Tờ khai y tế</strong></h2>
                            <Form>
                                <div className='mb-3'>
                                    <label htmlFor="name" className='form-label'>Họ tên</label>
                                    <Field type='text' id='name' className='form-control' name='name'
                                           style={{width: '30%'}}/>
                                    <ErrorMessage name='name' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="idCard" className='form-label'>Số hộ chiếu /CMND</label>
                                    <Field type='text' id='idCard' className='form-control' name='idCard'
                                           style={{width: '30%'}}/>
                                    <ErrorMessage name='idCard' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="birthday" className='form-label'>Năm sinh</label>
                                    <Field type='text' id='birthday' className='form-control' name='birthday'
                                           style={{width: '30%'}}/>
                                    <ErrorMessage name='birthday' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="birthday" className='form-label'>Giới tính</label>
                                    <div>
                                        <Field type='radio' id='nam' className='form-check-input' name='gender'
                                               value='0'/>
                                        <label htmlFor="nam" className='form-check-label'>Nam</label>
                                    </div>
                                    <div>
                                        <Field type='radio' id='nu' className='form-check-input' name='gender'
                                               value='1'/>
                                        <label htmlFor="nu" className='form-check-label'>Nữ</label>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="country" className='form-label'>Quốc tịch</label>
                                    <Field type='text' id='country' className='form-control' name='country'
                                           style={{width: '50%'}}/>
                                    <ErrorMessage name='country' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="country" className='form-label'>Công ty làm việc</label>
                                    <Field type='text' id='country' className='form-control' name='country'
                                           style={{width: '50%'}}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="country" className='form-label'>Bộ phận làm việc</label>
                                    <Field type='text' id='country' className='form-control' name='country'
                                           style={{width: '50%'}}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="country" className='form-label'>Có thẻ bảo hiểm y tế</label>
                                    <span className='ms-2'>
                                        <Field type='checkbox' id='sot' className='form-check-input' name='task2'
                                               value='sot'/>
                                    </span>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="province" className='form-label'>Tỉnh thành</label>
                                    <Field type='text' id='province' className='form-control' name='province'
                                           style={{width: '50%'}}/>
                                    <ErrorMessage name='province' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="district" className='form-label'>Quận /huyện</label>
                                    <Field type='text' id='district' className='form-control' name='district'
                                           style={{width: '50%'}}/>
                                    <ErrorMessage name='district' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="wards" className='form-label'>Phường /xã</label>
                                    <Field type='text' id='wards' className='form-control' name='wards'
                                           style={{width: '50%'}}/>
                                    <ErrorMessage name='wards' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="idHome" className='form-label'>Số nhà, phố, tổ dân phố /thôn /đội</label>
                                    <Field type='text' id='idHome' className='form-control' name='idHome'
                                           style={{width: '50%'}}/>
                                    <ErrorMessage name='idHome' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="phone" className='form-label'>Điện thoại</label>
                                    <Field type='text' id='phone' className='form-control' name='phone'
                                           style={{width: '50%'}}/>
                                    <ErrorMessage name='phone' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <Field type='text' id='email' className='form-control' name='email'
                                           style={{width: '50%'}}/>
                                    <ErrorMessage name='email' component='span' className='form-err'/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'>Trong vòng 14 ngày qua, Anh/Chị có đến quốc
                                    gia /vùng lãnh thổ nào (Có thể đi qua nhiều quốc gia)</label>
                                    <Field type='text' id='email' className='form-control' name='task1'
                                           style={{width: '50%'}} component='textarea' rows={4}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="" className='form-label'>Trong vòng 14 ngày qua, Anh/Chị có thấy xuất
                                        hiện dấu hiệu nào sau đây không ?</label>
                                    <div>
                                        <Field type='checkbox' id='sot' className='form-check-input' name='task2'
                                               value='sot'/>
                                        <label htmlFor="sot" className='form-check-label'>Sốt</label>
                                    </div>
                                    <div>
                                        <Field type='checkbox' id='ho' className='form-check-input' name='task2'
                                               value='ho'/>
                                        <label htmlFor="ho" className='form-check-label'>Ho</label>
                                    </div>
                                    <div>
                                        <Field type='checkbox' id='khotho' className='form-check-input' name='task2'
                                               value='khotho'/>
                                        <label htmlFor="khotho" className='form-check-label'>Khó thở</label>
                                    </div>
                                    <div>
                                        <Field type='checkbox' id='viemphoi' className='form-check-input' name='task2'
                                               value='viemphoi'/>
                                        <label htmlFor="viemphoi" className='form-check-label'>Viêm phổi</label>
                                    </div>
                                    <div>
                                        <Field type='checkbox' id='dauhong' className='form-check-input' name='task2'
                                               value='dauhong'/>
                                        <label htmlFor="dauhong" className='form-check-label'>Đau họng</label>
                                    </div>
                                    <div>
                                        <Field type='checkbox' id='metmoi' className='form-check-input' name='task2'
                                               value='metmoi'/>
                                        <label htmlFor="metmoi" className='form-check-label'>Mệt mỏi</label>
                                    </div>

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="email" className='form-label'>Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc
                                        với?</label>
                                    <div>
                                        <Field type='checkbox' id='check1' className='form-check-input' name='task3'
                                               value='check1'/>
                                        <label htmlFor="check1" className='form-check-label'>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                                    </div>
                                    <div>
                                        <Field type='checkbox' id='check2' className='form-check-input' name='task3'
                                               value='check2'/>
                                        <label htmlFor="check2" className='form-check-label'>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</label>
                                    </div>
                                    <div>
                                        <Field type='checkbox' id='check3' className='form-check-input' name='task3'
                                               value='check3'/>
                                        <label htmlFor="check3" className='form-check-label'>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</label>
                                    </div>
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