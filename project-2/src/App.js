import React from 'react';
import groupTool from 'lodash';
import { useState } from 'react';
import { CardDeck } from './carddeck';
import { DescriptionPage } from './desciption';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
import { NavBar } from './navbar';

function App(props) {

  const [cards, setCards] = useState(props.data)

	function handleCards(input) {
		let category = input.target.id;
		let cardsCopy = props.data;
		if (category != 'ShowAll') {
			cardsCopy = props.data.filter(
				(card) => card.cate.toLowerCase() === category.toLowerCase()
			);
		}
    setCards(cardsCopy)
	}

	return (
		<div>
			<NavBar data={props.data} handleCards={handleCards} />
			<main className="container">
				<Switch>
					<Route exact path="/">
						<CardDeck data={cards} />
					</Route>
					<Route path="/description/:title">
						<DescriptionPage />
					</Route>
					<Route path="/">
						<Redirect to="/" />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;
