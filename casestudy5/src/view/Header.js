import React from "react";

function Header() {
    return (
        <>
            <div>
                <div className="fixed-top" style={{backgroundColor: '#006633', color: 'white'}}>
                    <nav className="navbar navbar-expand-lg sticky">
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
                                <button className="btn btn-outline-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Header;