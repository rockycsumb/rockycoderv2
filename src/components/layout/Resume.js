import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import { FaReact, FaNode, FaJs, FaHtml5, FaGitSquare, FaCss3Alt, FaLeaf, FaProjectDiagram } from 'react-icons/fa';
import myResume from '../../assets/files/RockyMoreno_resume.pdf';
import '../../assets/css/Resume.css';

const Resume = () =>{
	return(
		<div className="Resume">
			<div className="Resume-title-header">
				<div className="Resume-title-item">
					Resume
								<Link
									className="btn btn-warning btn-sm ml-2 "
									to={myResume}
									target="_blank"	
									download
								>
									Download
								</Link>
				</div>
				<div>
					<hr className="Resume-title-hr" />
				</div>
			</div>
			<div className="Resume-container">
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-mongo-color">
							<FaLeaf />
						</span>
						<br />
						MongoDB
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-express-color">
							<FaProjectDiagram />
						</span>
						<br/>
						ExpressJS
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-react-color">
							<FaReact />
						</span>
						<br/>
						ReactJS
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FaNode />
						</span>
						<br/>
						NodeJS
					</div>
				</div>
			</div>
			
			<div className="Resume-container">
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FaJs />
						</span>
						<br/>
						JavaScript
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FaHtml5 />
						</span>
						<br/>
						HTML
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FaGitSquare />
						</span>
						<br/>
						Git
					</div>
					<div className="Resume-card text-center shadow-sm">
						<span className="Resume-badge-icon Resume-badge-node-color">
							<FaCss3Alt />
						</span>
						<br/>
						CSS
					</div>
				</div>
			</div>
			
			<div className="Resume-title-header">
				<div className="Resume-title-item">
					Education Experience
				</div>
				<div>
					<hr className="Resume-title-hr" />
				</div>
			</div>
			
			
			<div className="Resume-container">
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						B.S. Computer Science
					</div>
					<div className="Resume-card text-center shadow-sm">
						A.A. Natural Science
					</div>
				</div>
				<div className="d-flex justify-content-center">
					<div className="Resume-card text-center shadow-sm">
						Location: San Jose, California
					</div>
					<div className="Resume-card text-center shadow-sm">
						Resume
						
						<Link
									className="btn btn-warning btn-sm"
									to={myResume}
									target="_blank"	
									download
								>
									Download
								</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume;