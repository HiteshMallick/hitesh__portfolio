import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hitesh</h1>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">Copyright &#169; 2024 All Right Reserved, Design|Develop by Hitesh Humar Mallick.</span>
      </div>
    </footer>
  );
};

export default Footer;
