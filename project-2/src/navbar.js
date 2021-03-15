import { NavLink } from 'react-router-dom';
import firebase from 'firebase';

const handleSignout = (input) => {
	let word = input.target.outerText;
	if (word === 'Sign out') {
		firebase.auth().signOut();
	}
};

export function NavBar(props) {
	return (
		<div>
			<nav>
				<div className="logo">
					<img className="normal" src="./img/logo.png" alt="an husky logo" />
					<NavLink className="logoanchor" href="/">
						<img className="small" src="./img/favicon.png" alt="a smaller logo" />
					</NavLink>
					<h1>Goal Husky!</h1>
				</div>
				{/* < Burger /> */}
			</nav>
		</div>
	);
}


