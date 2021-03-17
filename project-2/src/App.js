import React, { useEffect } from "react";
import firebase from "firebase";
import { useState } from "react";
import { CardDeck } from "./carddeck";
import { BarSection } from "./barsection";
import { DescriptionPage } from "./description";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./navbar/navbar";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { AddGoalForm } from "./goalform";
import Footer from "./footer";
import { LandingPage } from "./landing";
import { decode, encode } from "base-64";

if (!global.btoa) {
    global.btoa = encode;
}
if (!global.atob) {
    global.atob = decode;
}

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
    signInSuccessUrl: '/',
};

function App(props) {
    const [cards, setCards] = useState(props.data);
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);
    // auth state event listener
    useEffect(() => {
        firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        });
    });

    function handleFilter(input) {
        let category = input.target.id;
        let cardsCopy = props.data;
        if (category !== "ShowAll") {
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

    let loginPage = (
        <StyledFirebaseAuth
            className="loginPage"
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
        />
    );
    let buttonWord;
    if (!user) {
        buttonWord = "Sign in";
    } else {
        buttonWord = "Sign out";
    }
    const urlPath = useLocation();

    return (
        <div>
            {urlPath.pathname !== "/" && <NavBar />}
            <main>
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>

                    <Route path="/main">
                        <BarSection
                            data={props.data}
                            handleFilter={handleFilter}
                            handleSearch={handleSearch}
                        />
                        <div className="container">
                            <CardDeck />
                        </div>
                    </Route>
                    <Route path="/description/:id">
                        <div className="container">
                            <DescriptionPage currentUser={user} />
                        </div>
                    </Route>
                    <Route path="/signin">{loginPage}</Route>
                    <Route path="/">
                        <Redirect to="/main" />
                    </Route>
                </Switch>
                <AddGoalForm />
            </main>
            {urlPath.pathname !== "/" && <Footer />}
        </div>
    );
}

export default App;
