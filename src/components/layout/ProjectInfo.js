import React, {Fragment, useState, useEffect} from 'react';
import {Link, NavLink} from 'react-router-dom';

const ProjectInfo = ({
	projectLiveLink,
	projectTitle,
	projectDescription,
	thumb1,
	thumb2,
	projectBackCardTitle,
	demoUrl1,
	demoUrl2,
	techUsed,
	apiUsed
}) =>{

	return (
		<Fragment>
			<div className="Projects-title-description">
				<div className="Projects-container-item-name">
					<NavLink 
						className="Projects-item-name-link"
						to={{ pathname: `${projectLiveLink}`}} 
						target="_blank"
								>
						{projectTitle}
					</NavLink>
				</div>
				<div className="Projects-container-item-description">
					{projectDescription}
				</div>
			</div>
			
			<div className="Projects-thumbnails">
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require(`../../assets/images/${thumb1}`)} />
			
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>{projectBackCardTitle}</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: `${demoUrl1}` }} 
									role="button" 
									target="_blank"
								>
									Demo
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
								<img className="Projects-image" 
									src={require(`../../assets/images/${thumb2}`)} />
						</div>
						<div className="d-flex flex-column justify-content-center flip-card-back">
							<div>
								<h5>{projectBackCardTitle}</h5>
							</div>
							<div>
								<Link class="btn btn-warning" 
									to={{ pathname: `${demoUrl2}` }}  
									role="button" 
									target="_blank"
								>
									Demo
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div className="Projects-tech">
				<div className="text-left">
					<p className="mb-0">
						<span className="font-weight-bold Projects-tech-title">Technology Used: </span>
						<span className="font-weight-light Projects-tech-info">{techUsed}
						</span>
					</p>
					<p>
						<span className="font-weight-bold Projects-tech-title">API's: </span>
						<span className="font-weight-light Projects-tech-info">{apiUsed}
						</span>
					</p>
				</div>
			</div>
		</Fragment>
	)
}
export default ProjectInfo;