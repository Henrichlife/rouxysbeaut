import React from "react";
import "./footer.css";

import { IoMdArrowRoundUp } from "react-icons/io";
import {
    BsTwitter,
    BsFacebook,
    BsTelegram,
    BsInstagram,
} from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="back">
                <a href="#navbar">
                    Back to top
                    <IoMdArrowRoundUp className="top" />
                </a>
            </div>
            <div className="footer-content">
                <div className="logo">
                    <h1>
                        ROUXY<span>BEAUT</span>
                    </h1>
                </div>

                <div className="socials">
                    <a href="http/www.twitter.com">
                        <BsTwitter />
                    </a>
                    <a href="http/www.facebook.com">
                        <BsFacebook />
                    </a>
                    <a href="http/www.instagram.com">
                        <BsInstagram />
                    </a>
                    <a href="http/www.telegram.com">
                        <BsTelegram />
                    </a>
                </div>
                <div className="information">
                    <h2>Why buy from us</h2>
                    <ul>
                        <li>Wholesale</li>
                        <li>Group Sales</li>
                        <li>Secure shopping</li>
                        <li>Shopping and Returns</li>
                    </ul>
                </div>

                <div className="information">
                    <h2>Privacy</h2>
                    <ul>
                        <li>View cart</li>
                        <li>My account</li>
                        <li>My wishlist</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
