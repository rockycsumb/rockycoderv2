import React, {useEffect} from 'react';
import NavBar from '../navbar/NavBar';
import Header from './Header';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import { Element, Link } from 'react-scroll';
import '../../assets/css/Landing.css';

const LandingProjects = () =>{
    useEffect(()=>{
        // const toTop = document.querySelector("Landing-project-div");
    
        // window.addEventListener("scroll", () => {
        // if (window.pageYOffset > 100) {
        //     toTop.classList.add("active");
        // } else {
        //     toTop.classList.remove("active");
        // }
        // })
    })

    return (
        <div>
            <Element name="navbar" className="element" >
                  <NavBar />
            </Element>
			{/* <div className="Landing-header-div">
                <Element name="header" className="element" >
                    <Header />
                </Element>
            </div> */}
            
            <div className="Landing-project-div landing-projects-spacer">
                <Element name="projects" className="element" >
						<Projects />
                </Element>
            </div>
            <div className="Landing-resume-div">
                <Element name="resume" className="element" >
                    <Resume />
                </Element>
            </div>

            <div className="Landing-contact-div">
                <Element name="contact" className="element" >
                    <Contact />
                </Element>
            </div>
			<div className="Landing-footer-div">
                <Element name="footer" className="element" >
                    <Footer />
                </Element>
            </div>
			{/*
            <Link activeClass="active" className="Navbar-to-top" to="navbar" spy={true} smooth={true} duration={500} >
                <div>
                    <FaArrowUp />
                </div>
                <div className="Navbar-to-top-text">
                    To Top
                </div>
            </Link>
			*/}
        </div>
      );
}

export default LandingProjects;

