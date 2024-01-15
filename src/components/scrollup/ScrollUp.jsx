import React from "react";
import "./scrollup.css";
import { Link } from "react-scroll";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");

    // when the scroll is higher than 560 viewport height.
    // Add the show-scroll class to (a) tag with the scroll-top class.

    if (this.scrollY >= 80) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });

  return (
    // <a href="#" className='scrollup'>
    //     <i className='uil uil-arrow-up scrollup__icon'></i>
    // </a>

    <>
      <Link to="home" smooth={true} offset={20} duration={500} className='scrollup'>
      <i className='uil uil-arrow-up scrollup__icon'></i>
      </Link>
    </>
  );
};

export default ScrollUp;
