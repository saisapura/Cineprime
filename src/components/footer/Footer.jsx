import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

 import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                <li className="menuItem">Cineprime Premium</li>
                    <li className="menuItem">About Cineprime</li>
                    <li className="menuItem">Explore</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">Help & FAQs</li>
                </ul>
                <div className="infoText">

Unlock a world of premium entertainment. Experience top-tier movies and series with exclusive access. Elevate your viewing with our curated selection of cinematic excellence. Subscribe now for endless hours of captivating content
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;