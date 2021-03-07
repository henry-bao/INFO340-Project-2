import {useState} from 'react';
import {Route, Switch, Link, Redirect, NavLink} from 'react-router-dom';
export function CardDeck(props) {
    let cardList = props.data.map((element) => {
        let card = <Card data = {element} key = {element.id}/>
        return card;
    })

    return (
        <div className="card-deck">
            {cardList}
        </div>
    );
}

function Card(props) {
    let database = props.data;
    const [redirectTo, setRedirectTo] = useState();
    const clickAnimation = (event) => {
        event.preventDefault();
        event.target.classList.add('animate__animated', "animate__headShake", "animate__slow");
        setTimeout(function(){ setRedirectTo(database.title) }, 1200);
    }

    let shortDescription = [];
    let descriptionWords = database.description.split(" ");
    shortDescription.push(descriptionWords[0]);
    shortDescription.push(" ");
    shortDescription.push(descriptionWords[1]);

    if (redirectTo !== undefined) {
        let url = "/description/" + redirectTo;
        return (
          <Redirect push to = {url}/>
        )
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

