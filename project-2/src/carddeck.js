import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import { constant } from 'lodash';
import { BarSection } from './barsection';

export function CardDeck(props) {
	const [cards, setCards] = useState([]);
	useEffect(() => {
		const cardsRef = firebase.database().ref('Goals');
		cardsRef.on('value', (snapshot) => {
			const theCardsObj = snapshot.val();
			let objectKeyArray = Object.keys(theCardsObj);
			let cardsArray = objectKeyArray.map((key) => {
				let singleCardObj = theCardsObj[key];
				singleCardObj.key = key;
				return singleCardObj;
			})
			setCards(cardsArray);
		})
	}, [])

    console.log(cards);
    function handleFilter(input) {
        let category = input.target.id;
        let cardsCopy = cards;
        if (category !== 'ShowAll') {
            cardsCopy = cardsCopy.filter(
                (card) => card.cate.toLowerCase() === category.toLowerCase()
            );
        }
        setCards(cardsCopy);
        console.log(cards);
    }

    function handleSearch(input) {
        let searchWord = input.target.value;
        let cardsCopy = cardsCopy.filter((card) =>
            card.title.toLowerCase().includes(searchWord.toLowerCase())
        );
        setCards(cardsCopy);
        console.log(cards);
    }

	//spinner
	if(cards.length == 0) {
		return (
			<div className="text-center">
				<i class="fas fa-fan spinner animate__animated animate__rotateOut animate__slow animate__infinite infinite"></i>
			</div>
		)
	}

	let cardList = cards.map((element) => {
		let card = <Card data={element} key={element.key} />;
		return card;
	});

    return (
        <div>
            <BarSection
            data={cards}
            handleFilter={handleFilter}
            handleSearch={handleSearch}
            />
            <div className="container">
                <div className="card-deck">
                    {cardList}
                </div> 
            </div>
        </div>
    )
}

function Card(props) {
    let database = props.data;
    const [redirectTo, setRedirectTo] = useState();
    const clickAnimation = (event) => {
        event.preventDefault();
        event.target.classList.add('animate__animated', 'animate__headShake', 'animate__slow');
        setTimeout(function () {
            setRedirectTo(database.key);
        }, 1200);
    };

    let shortDescription = [];
    let descriptionWords = database.description.split(' ');
    shortDescription.push(descriptionWords[0]);
    shortDescription.push(' ');
    shortDescription.push(descriptionWords[1]);
	shortDescription.push(' ');
	shortDescription.push(descriptionWords[2]);
	shortDescription.push(" ...");

    if (redirectTo !== undefined) {
        let url = '/description/' + redirectTo;
        return <Redirect push to={url} />;
    }

    return (
        <div className="card mb-4" onClick={clickAnimation}>
            <img className="card-img-top" src={database.img} alt={database.title} />
            <div className="card-body">
                <div className="row">
                    <h2 className="card-title col-8">{database.title}</h2>
                    <h3 className="card-title col-4 btn btn-success">{database.cate}</h3>
                </div>
                <div className="row">
                    <p className="card-text col-8">{shortDescription}</p>
                    <p className="card-text col-4 btn btn-warning">{database.people}</p>
                </div>
            </div>
        </div>
    );
}
