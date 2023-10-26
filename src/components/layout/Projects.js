import React, {Fragment, useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import '../../assets/css/Projects.css';
import {projectinfo} from '../../assets/projectinfo.js';

const Projects = () =>{
	return(
		<div className="d-flex flex-column">
			<div className="Projects-title">
				<div className="Projects-title-item1">
					Projects
				</div>
				<div className="Projects-title-item2">
					<hr />
				</div>
			</div>
			{/* begin project info */}
			{projectinfo.map((project, index) =>(
				<Fragment>
					<ProjectInfo 
						projectLiveLink={project.projectLiveLink}
						projectTitle={project.projectTitle}
						projectDescription={project.projectDescription}
						thumb1={project.thumb1}
						thumb2={project.thumb2}
						projectBackCardTitle={project.projectBackCardTitle}
						demoUrl1={project.demoUrl1}
						demoUrl2={project.demoUrl2}
						techUsed={project.techUsed}
						apiUsed={project.apiUsed}

					/>
					
					{index !== projectinfo.length - 1 ? (
						<hr className="Projects-divider" />
					): (
					 ""
					)}
	
				</Fragment>
			))}
		</div>
	)
}

export default Projects;