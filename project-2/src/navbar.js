//import { NavLink } from 'react-router-dom';
//import Hamburger from 'hamburger-react';
// import { useState } from 'react';
import { React } from 'react';
import Burger from './hamburger';
// import styled from 'styled-components';

export function NavBar(props) {
	return (
		<div>
			<nav>
				<div className="logo">
					<img className="normal" src="./img/logo.png" alt="an husky logo" />
					<a className="logoanchor" href="/">
						<img className="small" src="./img/favicon.png" alt="a smaller logo" />
					</a>
					<h1>Goal Husky!</h1>
				</div>
				<Burger />
				{/* <ul className="nav-links">
					<li className="home">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="ranking">
						<NavLink to="/Ranking">Ranking</NavLink>
					</li>
					<li className="settings">
							<NavLink to="/Login">Sign in</NavLink>
					</li>
				</ul>
				<div className="burger">  */}
				{/* <div className="burger" onClick> */}
				{/* <Hamburger toggled={isOpen} toggle={setOpen}> */}
					{/* <div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div> */}
				
				 {/* </Hamburger>  */}
				 {/* </div> */}
			</nav>
		</div>
	);
}


