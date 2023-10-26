import React from 'react';
import Landing from './components/layout/Landing';
import LandingProjects from './components/layout/LandingProjects';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../node_modules/animate.css/animate.min.css";


const App = () => {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/projects" element={<LandingProjects />} />
			</Routes>
		</Router>
	)
}

export default App;
