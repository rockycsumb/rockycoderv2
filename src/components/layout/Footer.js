import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithubAlt, FaEnvelope } from 'react-icons/fa';
import '../../assets/css/Footer.css';

const Footer = () =>{
		
	return(
		<div className="FooterPA">
			<div className="Footer-container">
				<div className="Footer-logo-rockycoder  d-flex align-items-center mt-5">
					<div className="Footer-logo-some" >
						Rocky
					</div>
					<div className="Footer-logo-coder">
						Coder
					</div>
				</div>
			</div>
			
			<div className="Footer-container">
				<div className="Footer-hr" />
			</div>
			
			<div className="Footer-container mb-3">
				<div className="Footer-logo">
					<NavLink
						className="Footer-logo-buttons"
						to={{ pathname: 
							 "https://www.linkedin.com/in/rocky-moreno-23a57a155/" 
						}}  
						target="_blank"
					>
						<FaLinkedin />
					</NavLink>
				</div>
				<div className="Footer-logo">
					<NavLink
						className="Footer-logo-buttons"
						to={{ pathname: 
							 "https://github.com/rockycsumb" 
						}}  
						target="_blank"
					>
						<FaGithubAlt />
					</NavLink>
				</div>
				<div className="Footer-logo">
					<Link
						activeClass="active" 
						className="contact Footer-contact" 
						to="contact" 
						spy={true} 
						smooth={true} 
						duration={1000} 
					>
						<FaEnvelope />
					</Link>
				</div>
			</div>
			
			<div className="Footer-container Footer-signature">
				<p><span>Site by </span> 
					
						<Link 
							className="Footer-name-link"
							activeClass="Footer-name-link"
							to="navbar" 
							spy={true} 
							smooth={true} 
							duration={1000}
						>
							Rocky Moreno
						</Link>
				</p>
			</div>
		</div>
	)
}

export default Footer;