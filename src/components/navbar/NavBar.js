import React, {useEffect, useState} from 'react';
import Headroom from 'headroom.js';
import { Link } from 'react-scroll';
import { FaTimes, FaPlus} from 'react-icons/fa'
import '../../assets/css/Navbar.css';


const NavBar = () =>{
	const [toggle, setToggle] = useState(false);
	
	useEffect(()=>{
		let myElement = document.getElementById('navbar-main');
		let headroom = new Headroom(myElement);
		headroom.init();
	})

	const toggler = () =>{
		setToggle(!toggle);
		console.log("popup", toggle)
	}
	
	return (
		<div>
			<div className={toggle ? "Navbar-popup-menu" : "Navbar-popup-menu Navbar-popup-menu-off"} >
				<div className="d-flex justify-content-end mr-3 mt-3">
					<div className={toggle ? "Navbar-close-toggler-spin" : ""} onClick={toggler} >
						<FaTimes />
					</div>
				</div>
				<div className="d-flex justify-content-center Navbar-links-popup-menu">
					<div className="d-flex flex-column align-items-center justify-content-center">
						<Link 
							activeClass="active" 
							className="projects Navbar-menu-links-popup" 
							to="projects" 
							spy={true} 
							smooth={true} 
							duration={1000} 
							onClick={toggler}
						>
							Projects
						</Link>
						<Link 
							activeClass="active" 
							className="resume Navbar-menu-links-popup" 
							to="resume" 
							spy={true} 
							smooth={true} 
							duration={1000} 
							onClick={toggler}
						>
							Resume
						</Link>
						<Link 
							activeClass="active" 
							className="contact Navbar-menu-links-popup" 
							to="contact" 
							spy={true} 
							smooth={true} 
							duration={1000} 
							onClick={toggler}
						>
							Contact
						</Link>
					</div>
				</div>
			</div>	
			<div className="Navbar-bg headroom fixed-top" id="navbar-main">
				<div className="d-flex text-white justify-content-around align-items-center ">
					<div className="Navbar-menu-space">
						{" "}
					</div>
					
					<div className="Navbar-logo  d-flex align-items-center">
						<div className="Navbar-logo-some" >
							Rocky
						</div>
						<div className="Navbar-logo-coder">
							Coder
						</div>
					</div>
					<div className="Navbar-buttons">
						<div className="Navbar-hamburger-toggler" onClick={toggler} >
							<FaPlus />
						</div>
						<div className="Navbar-links">
							<div className="d-flex flex-row justify-content-around">
								<Link 
									activeClass="active" 
									className="projects Navbar-menu-links" 
									to="projects" 
									spy={true} 
									smooth={true} 
									duration={1000} 
								>
									Projects
								</Link>
								<Link 
									activeClass="active" 
									className="resume Navbar-menu-links" 
									to="resume" 
									spy={true} 
									smooth={true} 
									duration={1000} 
								>
									Resume
								</Link>
								<Link 
									activeClass="active" 
									className="contact Navbar-menu-links" 
									to="contact" 
									spy={true} 
									smooth={true} 
									duration={1000} 
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default NavBar;