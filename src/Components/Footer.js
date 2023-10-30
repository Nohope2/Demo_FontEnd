import React from "react";
import './assets/body.css'
import './assets/footer.css'

function Footer() {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-introduce">
                    <div class="item-container intro-container">
                        <div class="footer-title footer-intro-title">Giới thiệu</div>
                        <div class="footer-intro-content">
                            <p>Quản lí chi tiêu hằng ngày nhanh chóng, hiệu quả</p>
                        </div>
                    </div>
                </div>
                <div class="footer-link">
                    <div class="item-container link-container">
                        <div class="footer-title footer-link-title">Liên kết</div>
                        <div class="footer-link-content">
                            <ul>
                                <li class="item">
                                    <a href="" class="link-search">Tìm kiếm</a>
                                </li>
                                <li class="item">
                                    <a href="" class="link-introduce">Giới thiệu</a>
                                </li>
                                <li class="item">
                                    <a href="" class="link-security">Chính sách bảo mật</a>
                                </li>
                                <li class="item">
                                    <a href="" class="link-rules">Điều khoản dịch vụ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-contact">
                    <div class="item-container contact-container">
                        <div class="footer-title footer-contact-title">Thông tin liên hệ</div>
                        <div class="footer-contact-content">
                            <ul>

                                <li class="item contact-tel">
                                    <i class="ti-headphone-alt"></i>
                                    <span>1900 636 099</span>
                                </li>
                                <li class="item contact-email">
                                    <i class="ti-email"></i>
                                    <span>hi@haravan.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;