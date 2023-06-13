import {Header} from "../Header";
import {Footer} from "../Footer";
import React from "react";
import {NavLink} from "react-router-dom";

export function Customer() {
    return (
        <>
            <Header/>
            <div className='vc_custom '
                 style={{
                     position: 'relative',
                     left: '0px',
                     boxSizing: 'border-box',
                     paddingLeft: '0px',
                     paddingRight: '0px',
                     marginBottom: '2rem',
                     marginTop:'1rem'
                 }}>
                <div style={{height: '90px'}}></div>
                <h2 style={{
                    marginTop: '9rem',
                    fontSize: '40px',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontStyle: 'normal'
                }}>
                    DANH SÁCH KHÁCH HÀNG</h2>
                <div style={{height: '102px'}}></div>
            </div>
            {/*<button type="button" className="btn btn-success"*/}
            {/*        style={{marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>*/}
            {/*    <NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Chỉnh sửa khách hàng*/}
            {/*    </NavLink>*/}
            {/*</button>*/}
            <table className="table table-striped table-inverse table-responsive" style={{marginLeft: '1rem'}}>
                <thead className="thead-inverse">
                <tr>
                    <th>Stt</th>
                    <th>Tên khách hàng</th>
                    <th>Năm sinh</th>
                    <th>Sđt</th>
                    <th>Địa chỉ</th>
                    <th>E-mail</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td>Nguyễn Văn A</td>
                    <td>20-05-1995</td>
                    <td>0835443443</td>
                    <td>Ngũ Hành Sơn - Đà Nẵng</td>
                    <td>nguyena@gmail.com</td>
                    <td><NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Sửa
                    </NavLink></td>
                    <td>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">2</td>
                    <td>Nguyễn Thị B</td>
                    <td>10-05-1990</td>
                    <td>0929862826</td>
                    <td>Quảng Nam</td>
                    <td>nguyenthib@gmail.com</td>
                    <td><NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Sửa
                    </NavLink></td>
                    <td>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr>
                    <td scope="row">3</td>
                    <td>Nguyễn Khánh Đơn</td>
                    <td>09-07-1992</td>
                    <td>0911500914</td>
                    <td>Hồ Chí Minh</td>
                    <td>nguyendon@gmail.com</td>
                    <td><NavLink to="/update_customer" className="text-decoration-none btn btn-primary">Sửa
                    </NavLink></td>
                    <td>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modelId">
                            Xóa
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <Footer/>
        </>
    )
}