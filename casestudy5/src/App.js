import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
    return (
        <div>
            <header>
                <div>
                    <div className="sticky" style={{backgroundColor: '#79b5f2', color: 'white'}}>
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">GIỚI THIỆU</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">LOẠI PHÒNG</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">ẨM THỰC</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">HỘI NGHỊ VÀ SỰ KIỆN</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">SPA</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">GIẢI TRÍ</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">ĐIỂM ĐẾN</a></li>
                                    <li className="nav-item"><a href="#"
                                                                className="nav-link">ƯU ĐÃI</a></li>
                                </ul>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <footer style={{backgroundColor: '#a3d3e8', color: 'white', padding: '1rem'}}>
                <div>
                    <div>
                        <h3>Resort Furama Đà Nẵng</h3>
                        <p>Địa chỉ: 123 Đường ABC, Đà Nẵng, Việt Nam</p>
                        <p>Số điện thoại: 123-456-789</p>
                        <p>Email: info@sesortfurama.com</p>
                    </div>
                    <div>
                        <h4>Liên kết</h4>
                        <ul>
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/rooms">Phòng</a></li>
                            <li><a href="/services">Dịch vụ</a></li>
                            <li><a href="/about">Về chúng tôi</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
