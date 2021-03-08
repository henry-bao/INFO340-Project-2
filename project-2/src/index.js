import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';

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

const sample = [
	{
		id: 0,
		title: 'python',
		cate: 'Career',
		description: 'Self-Study Python',
		img: 'img/python.png',
		people: 1,
	},
	{
		id: 1,
		title: 'guitar',
		cate: 'Hobby',
		description: 'Learn Guitar',
		img: 'img/guitar.png',
		people: 3,
	},
	{
		id: 2,
		title: 'smash',
		cate: 'Hobby',
		description: 'Practice Smash Ultimate Movement Fundamentals',
		img: 'img/smash.png',
		people: 16,
	},
	{
		id: 3,
		title: 'smash',
		cate: 'Hobby',
		description: 'Practice Smash Ultimate Movement Fundamentals',
		img: 'img/smash.png',
		people: 16,
	},
	{
		id: 4,
		title: 'smash',
		cate: 'Hobby',
		description: 'Practice Smash Ultimate Movement Fundamentals',
		img: 'img/smash.png',
		people: 16,
	},
	{
		id: 5,
		title: 'smash',
		cate: 'Hobby',
		description: 'Practice Smash Ultimate Movement Fundamentals',
		img: 'img/smash.png',
		people: 16,
	},
	{
		id: 6,
		title: 'smash',
		cate: 'Hobby',
		description: 'Practice Smash Ultimate Movement Fundamentals',
		img: 'img/smash.png',
		people: 16,
	},
	{
		id: 7,
		title: 'smash',
		cate: 'Hobby',
		description: 'Practice Smash Ultimate Movement Fundamentals',
		img: 'img/smash.png',
		people: 16,
	},
	{
		id: 8,
		title: 'smash',
		cate: 'Hobby',
		description: 'Practice Smash Ultimate Movement Fundamentals',
		img: 'img/smash.png',
		people: 16,
	},
];

ReactDOM.render(
	<BrowserRouter>
		<App data={sample} />
	</BrowserRouter>,
	document.getElementById('root')
);
