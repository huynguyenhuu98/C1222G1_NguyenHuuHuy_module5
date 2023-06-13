import React from "react";
import {NavLink} from "react-router-dom";
import {Header} from "../Header";
import {Footer} from "../Footer";

export function Home() {
    return (
        <>
            <Header/>
            <div className='vc_custom'
                 style={{position: 'relative', left: '0px', boxSizing: 'border-box', paddingLeft: '0px', paddingRight: '0px', marginBottom: '2rem', marginTop:'1rem'}}>
                <div style={{height: '90px'}}></div>
                <h2 style={{marginTop: '9rem',fontSize: '40px',color: '#ffffff',textAlign: 'center',fontWeight:'700',fontStyle:'normal'}}>
                    PHÒNG THUÊ</h2>
                <div style={{height: '102px'}}></div>
            </div>
            <div>
                <button type="button" className="btn btn-success" style={{marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>
                    <NavLink to="/customer" className="text-decoration-none"> Danh sách khách hàng
                    </NavLink>
                </button>
                <button type="button" className="btn btn-success" style={{ marginBottom: "2%", marginLeft: "8%", backgroundColor: "#a5eee6"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" color="black" className="bi bi-cart4" viewBox="0 0 16 16">
                        <path
                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    <NavLink to="/create" className="bi bi-cart4 text-decoration-none"> Thêm phòng mới
                    </NavLink>
                </button>

            </div>
            <div className="row" style={{marginLeft:'8rem'}}>
                <div className="col-sm-6 col-lg-4 ">
                    <div className="card" style={{width: '23rem'}}>
                        <img width="370" height="239" src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">Diện Tích Phòng: 85.8 m2</p>
                                <a href="#" className="btn btn-outline-primary me-2">Sửa</a>
                                <a href="#" className="btn btn-outline-danger">Xóa</a>
                            </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4  ">
                    <div className="card" style={{width: '23rem'}}>
                        <img width="370" height="239" src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG STUDIO SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">Diện Tích Phòng: 40.1 m2</p>
                                <a href="#" className="btn btn-outline-primary me-2">Sửa</a>
                                <a href="#" className="btn btn-outline-danger">Xóa</a>
                            </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4  ">
                    <div className="card" style={{width: '23rem'}}>
                        <img width="370" height="239" src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG DELUXE HƯỚNG BIỂN</h5>
                                <p className="card-text">Diện Tích Phòng: 43.7 m2</p>
                                <a href="#" className="btn btn-outline-primary me-2">Sửa</a>
                                <a href="#" className="btn btn-outline-danger">Xóa</a>
                            </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-end mt-3">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <Footer/>
        </>
    );
}
