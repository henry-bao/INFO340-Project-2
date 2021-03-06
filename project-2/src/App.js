import React from 'react';
import groupTool from 'lodash';
import {useState} from 'react';
import {CardDeck} from './carddeck';
import {NavBar} from './navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App(props) {
  return (
    <div>
      <main className="container">
        <NavBar />
        <CardDeck data={props.data}/>
      </main>
    </div>
  )
}

export default App;
