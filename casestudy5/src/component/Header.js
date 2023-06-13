import React from "react";
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <>
            <div>
                <div className="fixed-top" style={{backgroundColor: '#006633', color: 'white'}}>
                    <nav className="navbar navbar-expand-lg sticky">
                        <div className="navbar-collapse">
                            <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="logo "
                                 className="img-fluid ms-2" width="63" height="100"/>
                                <ul className="navbar-nav mr-auto ">
                                    <li className="nav-item nav-link"><NavLink to='/' className='text-white text-decoration-none'>TRANG CHỦ</NavLink></li>
                                    <li className="nav-item nav-link"><NavLink to='/' className='text-white text-decoration-none'>LOẠI PHÒNG</NavLink></li>
                                    <li className="nav-item nav-link"><NavLink to="/customer" className='text-white text-decoration-none'>KHÁCH HÀNG</NavLink></li>
                                    <li className="nav-item nav-link"><NavLink to="" className='text-white text-decoration-none'>DỊCH VỤ</NavLink></li>
                                    <li className="nav-item nav-link"><NavLink to="" className='text-white text-decoration-none'>ƯU ĐÃI</NavLink></li>
                                </ul>
                            <form className="d-flex" role="search" style={{marginLeft:'48rem'}}>
                                <input className="form-control me-2" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}
