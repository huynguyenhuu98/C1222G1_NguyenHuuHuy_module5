import React from "react";

export function Header() {
    return (
        <>
            <div>
                <div className="fixed-top" style={{backgroundColor: '#006633', color: 'white'}}>
                    <nav className="navbar navbar-expand-lg sticky">
                        <div className="navbar-collapse">
                            <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="logo "
                                 className="img-fluid" width="63" height="100"/>
                                <ul className="navbar-nav mr-auto ">
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>GIỚI THIỆU</a>
                                    </li>
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>LOẠI PHÒNG</a>
                                    </li>
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>ẨM THỰC</a></li>
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>HỘI NGHỊ VÀ SỰ
                                        KIỆN</a></li>
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>SPA</a></li>
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>GIẢI TRÍ</a></li>
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>ĐIỂM ĐẾN</a></li>
                                    <li className="nav-item nav-link"><a href="#" style={{color: 'white'}}>ƯU ĐÃI</a></li>
                                </ul>
                            <form className="d-flex" role="search" style={{marginLeft:'32rem'}}>
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
