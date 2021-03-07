import React from 'react';
import { useState } from 'react';
import { CardDeck } from './carddeck';
import {BarSection} from './barsection';
import { DescriptionPage } from './description';
import { Route, Switch, Redirect } from 'react-router-dom';
import { NavBar } from './navbar';

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
			</main>
		</>
	);
}

export default App;
