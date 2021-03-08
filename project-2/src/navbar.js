import { NavLink } from 'react-router-dom';
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
				<ul className="nav-links">
					<li className="home">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="ranking">
						<NavLink to="/Ranking">Ranking</NavLink>
					</li>
					<li className="signin">
						<NavLink
							to={props.buttonWord === 'Sign in' ? '/signin' : '/'}
							onClick={props.buttonWord === 'Sign in' ? '' : props.handleSignout}
						>
							{props.buttonWord}
						</NavLink>
					</li>
				</ul>
				<div className="burger">
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</nav>
		</div>
	);
}
