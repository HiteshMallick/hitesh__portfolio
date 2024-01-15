import React, { useState } from 'react';
import './header.css';
import { Link } from 'react-scroll';

const Header = () => {

    // Change background header

    window.addEventListener('scroll',function(){
        const header = this.document.querySelector('.header');
        
        // when the scroll is higher than 200 viewport height.
        // Add the scroll-header class to (a) tag with the header tag.
        
        if(this.scrollY >= 80){
           header.classList.add('scroll-header') 
        } 
        else{
           header.classList.remove('scroll-header') 
        } 
    })

    // Toggle Menu
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState('#home')


  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className="nav__logo">Hitesh</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">

                    <li className='nav__item'>
                        {/* <a href="#home" className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'} onClick={()=> setActiveNav('#home')}>
                            <i className="uil uil-estate nav__icon"></i> Home
                            
                        </a> */}
                        
                        <Link to= "home" smooth={true} offset={10} duration={500} className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}>
                           <i className="uil uil-estate nav__icon"></i> Home
                        </Link>
                    </li>

                    <li className='nav__item'>
                        {/* <a href="#about" className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'} onClick={()=> setActiveNav('#about')}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a> */}

                        <Link to= "about" smooth={true} offset={20} duration={500} className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}>
                           <i className="uil uil-estate nav__icon"></i> About
                        </Link>
                    </li>

                    <li className='nav__item'>
                        {/* <a href="#skills" className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'} onClick={()=> setActiveNav('#skills')}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a> */}

                        <Link to= "skills" smooth={true} offset={10} duration={500} className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                           <i className="uil uil-estate nav__icon"></i> Skills
                        </Link>
                    </li>

                    <li className='nav__item'>
                        {/* <a href="#services" className={activeNav === '#services' ? 'nav__link active-link' : 'nav__link'} onClick={()=> setActiveNav('#services')}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a> */}

                        <Link to= "services" smooth={true} offset={20} duration={500} className={activeNav === '#services' ? 'nav__link active-link' : 'nav__link'}>
                           <i className="uil uil-estate nav__icon"></i> Services
                        </Link>
                    </li>

                    <li className='nav__item'>
                        {/* <a href="#project" className={activeNav === '#project' ? 'nav__link active-link' : 'nav__link'} onClick={()=> setActiveNav('#project')}>
                            <i className="uil uil-scenery nav__icon"></i> Project
                        </a> */}

                        <Link to= "project" smooth={true} offset={20} duration={500} className={activeNav === '#project' ? 'nav__link active-link' : 'nav__link'}>
                           <i className="uil uil-estate nav__icon"></i> Projects
                        </Link>
                    </li>

                    <li className='nav__item'>
                        {/* <a href="#contact" className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'} onClick={()=> setActiveNav('#contact')}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a> */}

                        <Link to= "contact" smooth={true} offset={20} duration={500} className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                           <i className="uil uil-estate nav__icon"></i> Contact
                        </Link>
                    </li>
                    
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header