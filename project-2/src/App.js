import React from 'react';
import groupTool from 'lodash';
import { useState } from 'react';
import { CardDeck } from './carddeck';
import { DescriptionPage } from './desciption';
import { Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
import { NavBar } from './navbar';

function App(props) {
	return (
		<div>
			<NavBar />
			<main className="container">
				<Switch>
					<Route exact path="/">
						<CardDeck data={props.data} />
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
