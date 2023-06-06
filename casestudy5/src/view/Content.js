import React from "react";

function Content() {
    return (
        <>
            <div style={{position: 'relative', left: '0px',boxSizing:'border-box', width: '100%', marginLeft: '0px', marginRight: '0px', marginBottom:'20px'}}>
                <img src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433" />
            </div>
            <div className="row ">
                <div className="col-sm-6 col-lg-4 ">
                    <div className="card" style={{width: '23rem'}}>
                        <img width="370" height="239" src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">Diện Tích Phòng: 85.8 m2</p>
                                <a href="#" className="btn btn-primary">Sửa</a>
                                <a href="#" className="btn btn-primary">Xóa</a>
                            </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4  ">
                    <div className="card" style={{width: '23rem'}}>
                        <img width="370" height="239" src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG STUDIO SUITE HƯỚNG BIỂN</h5>
                                <p className="card-text">Diện Tích Phòng: 40.1 m2</p>
                                <a href="#" className="btn btn-primary">Sửa</a>
                                <a href="#" className="btn btn-primary">Xóa</a>
                            </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4  ">
                    <div className="card" style={{width: '23rem'}}>
                        <img width="370" height="239" src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-450x291.jpg" className="card-img-top" alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">PHÒNG DELUXE HƯỚNG BIỂN</h5>
                                <p className="card-text">Diện Tích Phòng: 43.7 m2</p>
                                <a href="#" className="btn btn-primary">Sửa</a>
                                <a href="#" className="btn btn-primary">Xóa</a>
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
        </>
    );
}

export default Content;