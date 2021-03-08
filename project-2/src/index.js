import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import sample from './cards.json';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCznjpk9rhvA-ImvSlxReyqlBWf_HP8pQM',
	authDomain: 'info340-c1-project2.firebaseapp.com',
	projectId: 'info340-c1-project2',
	storageBucket: 'info340-c1-project2.appspot.com',
	messagingSenderId: '1022667652643',
	appId: '1:1022667652643:web:60c13da8ee87ee2b89fb96',
	measurementId: 'G-SV10TZ5LN4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
	<BrowserRouter>
		<App data={sample} />
	</BrowserRouter>,
	document.getElementById('root')
);
