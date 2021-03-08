import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useState } from 'react';
import { CardDeck } from './carddeck';
import { BarSection } from './barsection';
import { DescriptionPage } from './description';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavBar } from './navbar';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// firebase sign in ui
const uiConfig = {
	signInOptions: [
		{
			provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
			requiredDisplayName: true,
		},
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	credentialHelper: 'none',
	signInFlow: 'popup',
	callbacks: {
		// Avoid redirects after sign-in.
		signInSuccessWithAuthResult: () => false,
	},
};

function App(props) {
	const [cards, setCards] = useState(props.data);
	const [user, setUser] = useState(undefined);

	// auth state event listener
	useEffect(() => {
		firebase.auth().onAuthStateChanged((firebaseUser) => {

			if (firebaseUser) {

				setUser(firebaseUser)
			} else {
				setUser(null)
			}
		});
	});

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

	return (
		<>
			<NavBar />
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			<main>
				<Switch>
					<Route exact path="/">
						<BarSection
							data={props.data}
							handleFilter={handleFilter}
							handleSearch={handleSearch}
						/>
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
			</main>
		</>
	);
}

export default App;
