import React from "react";

function Footer() {
    return (
        <>
            <div style={{backgroundColor: '#a3d3e8', color: 'black', padding: '1rem'}}>
                <div>
                    <h3>Resort Furama Đà Nẵng</h3>
                    <p>Địa chỉ: 123 Đường ABC, Đà Nẵng, Việt Nam</p>
                    <p>Số điện thoại: 123-456-789</p>
                    <p>Email: info@sesortfurama.com</p>
                </div>
                <div>
                    <h6 style={{textAlign:"center"}}>© 2018 Furama Resort Danang.</h6>
                </div>
                {/*<div>*/}
                {/*    <h4>Liên kết</h4>*/}
                {/*    <ul>*/}
                {/*        <li><a href="/">Trang chủ</a></li>*/}
                {/*        <li><a href="/rooms">Phòng</a></li>*/}
                {/*        <li><a href="/services">Dịch vụ</a></li>*/}
                {/*        <li><a href="/about">Về chúng tôi</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
            </div>
        </>
    );
}

export default Footer;