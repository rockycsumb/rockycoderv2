import React from 'react';
import { FaReact, FaNode, FaLeaf, FaProjectDiagram } from 'react-icons/fa';
import '../../assets/css/Header.css';


const Header = () =>{
	
	return(
		<div className="Header-main">
			<div className="Header-title">
				<div className="Header-title-names">
					<div className="Header-title-name">
						Rocky
					</div>
					<div className="Header-title-name">
						Coder
					</div>
				</div>
				<div className="Header-title-description">
					FRONTEND ENGINEER
				</div>
			</div>
			<div className="Header-badges">
				<div className="d-flex justify-content-center badge-row">
					<div className="Header-badges-items 
								text-center
								shadow"
					>
						<span className="Header-badge-icon Header-badge-mongo-color">
							<FaLeaf />
						</span>
						<br/>
						MongoDB
					</div>
					<div className="Header-badges-items 
									text-center 
									shadow"
						>
						<span className="Header-badge-icon Header-badge-express-color">
							<FaProjectDiagram />
						</span>
						<br/>
						Express.js
					</div>
				</div>
				
				<div className="d-flex justify-content-center">
					<div className="Header-badges-items 
								text-center
								shadow"
					>
						<span className="Header-badge-icon Header-badge-react-color">
							<FaReact />
						</span>
						<br/>
						React
					</div>
					<div className="Header-badges-items 
									text-center
									shadow"
						>
						<span className="Header-badge-icon Header-badge-node-color">
							<FaNode />
						</span>
						<br/>
						NodeJs
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;