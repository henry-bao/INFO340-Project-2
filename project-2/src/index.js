import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth' //get everything from this library
// import 'firebase/database'

//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDe5U2HiQjuFGAmFR5Ht87awQuYrIgZnOg",
//     authDomain: "chirper-demo-65211.firebaseapp.com",
//     projectId: "chirper-demo-65211",
//     storageBucket: "chirper-demo-65211.appspot.com",
//     messagingSenderId: "443374740288",
//     appId: "1:443374740288:web:f8798967e8b53b385e50a5"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

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
