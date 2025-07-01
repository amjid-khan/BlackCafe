
import React from "react";
import "./Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2 className="h2">LOGO</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            labore, ullam qui ut expedita non libero in possimus, delectus nihil
            excepturi distinctio ea suscipit facilis fuga mollitia voluptas,
            laudantium voluptatem?
          </p>
          <div className="footer-socail-icon">
            <p>
              <GrFacebookOption />
            </p>
            <p>
              <FaTwitter />
            </p>
            <p>
              <FaLinkedinIn />
            </p>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92 3119091924</li>
            <li>amjidkurrmywal@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copy 20234 Tamato.com - All right reserved
      </p>
    </div>
  );
};

export default Footer;
