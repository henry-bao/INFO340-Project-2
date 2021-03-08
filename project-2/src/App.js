import React from 'react';
import { useState } from 'react';
import { CardDeck } from './carddeck';
import {BarSection} from './barsection';
import { DescriptionPage } from './description';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavBar } from './navbar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import {AddGoalForm} from './goalform';

// const uiConfig = {
// 	callbacks: {
// 		//Avoid Redirects after sign-in
// 		SignInSuccessWithAuthResult: () => false,
// 	},

// 	//which sign in providers to use
// 	signInOptions: [
// 		{
// 			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
			
// 			//whether to show the "display name on the sign in page" (not username)
// 			requireDisplayName:true
// 		}, //each object is a sign in method
// 		firebase.auth.GoogleAuthProvider.PROVIDER_ID //also log in with Google
// 	],
// 	//page won't show the account chooser
// 	credentialHelper: 'none',
// 	//use popup instead of redirect for external sign-up methods --Goodle
// 	signInFlow: 'popup'
// }

function App(props) {
	const [cards, setCards] = useState(props.data);

	function handleFilter(input) {
		let category = input.target.id;
		let cardsCopy = props.data;
		if (category !== 'ShowAll') {
			cardsCopy = props.data.filter(
				(card) => card.cate.toLowerCase() === category.toLowerCase()
			);
		}
		setCards(cardsCopy);
	}

	function handleSearch(input) {
		let searchWord = input.target.value;
		let cardsCopy = props.data.filter((card) =>
			card.title.toLowerCase().includes(searchWord.toLowerCase())
		);
		setCards(cardsCopy);
	}

	// //auth state event listener
	// useEffect(() => { //run after component loads
	// 	//listen for changes on the auth state (logged in or not)
	// 	firebase.auth().onAuthStateChanged((firebaseUser) => {
	// 		if(firebaseUser) {
	// 			console.log("logged in!"+firebaseUser.displayName);
	// 			console.log(firebaseUser)
	//			setUser(firebaseUser)
	// 		} else { //not defined
	// 			console.log("logged out")
	// 			setUser(null)
	// 		}
			
	// 		//auth state has changed!
	// 		console.log("auth state has changed!")
	// 	})
	// })

	//sign in module code
	// <StyledFirebaseAuth uiConfig={uiConfig} fire .....

	return (
		<>
			<NavBar/>
			<main>
				<Switch>
					<Route exact path="/">
						<BarSection data={props.data} handleFilter={handleFilter} handleSearch={handleSearch} />
						<div className="container">
							<CardDeck data={cards} />
						</div>
					</Route>
					<Route path="/description/:title">
					<div className="container">
						<DescriptionPage />
					</div>
					</Route>
					<Route path="/">
						<Redirect to="/" />
					</Route>
				</Switch>
				<AddGoalForm />
			</main>
		</>
	);
}

export default App;
