import React from 'react';
import groupTool from 'lodash';
import {useState} from 'react';
import {CardDeck} from './carddeck';
function App(props) {
  return (
    <div>
      <main className="container">
        <h1>HelloWord</h1>
        <CardDeck data={props.data}/>
      </main>
    </div>
  )
}

export default App;
