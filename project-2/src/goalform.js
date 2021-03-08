import React from 'react';
import { useState } from 'react';
import 'firebase/database';
import firebase from 'firebase';

//firebase reference
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCznjpk9rhvA-ImvSlxReyqlBWf_HP8pQM',
	authDomain: 'info340-c1-project2.firebaseapp.com',
	projectId: 'info340-c1-project2',
	storageBucket: 'info340-c1-project2.appspot.com',
	messagingSenderId: '1022667652643',
	appId: '1:1022667652643:web:60c13da8ee87ee2b89fb96',
	measurementId: 'G-SV10TZ5LN4',
};

export function AddGoalForm() {
	//opening and closing form
	function openForm() {
		document.getElementById('myForm').style.display = 'block';
	}

	function closeForm() {
		document.getElementById('myForm').style.display = 'none';
	}

	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	} else {
		firebase.app(); // if already initialized, use that one
	}
	firebase.analytics();
	// firebase.initializeApp(firebaseConfig);

	let messagesRef = firebase.database().ref('messages');
	//Manipulating form data from here on

	function submitForm(e) {
		e.preventDefault();

		//Get values
		let name = inputValue;
		let description = inputDescription;
		saveMessage(name, description);
		setAlert('block');
		setInputValue('');
		setInputDescription('');
	}

	// //Function to get form values
	// function getInputVal(input) {

	//   return input.value;
	// }

	//save message to firebase
	function saveMessage(name, description) {
		let newMessageRef = messagesRef.push();
		newMessageRef.set({
			name: name,
			description: description,
		});
	}
	const [inputValue, setInputValue] = useState('');
	const [inputDescription, setInputDescription] = useState('');
	const [alert, setAlert] = useState('d-none');
	// Show alert
	setTimeout(function () {
		setAlert('d-none');
	}, 3000);

	return (
		<section>
			<button className="open-button" onClick={openForm}>
				Publish Now!
			</button>

			<div className="chat-popup" id="myForm">
				<form id="goalForm" className="form-container">
					<div className={alert}>Your Goal has been submitted!</div>
					<label htmlFor="msg">
						<b>Enter Goal Name</b>
					</label>
					<input
						type="text"
						id="goalName"
						onChange={(event) => setInputValue(event.target.value)}
						required
					></input>

					<label htmlFor="msg">
						<b>Enter Description</b>
					</label>
					{/* <textarea placeholder="Type message.." name="msg" required></textarea> */}
					<input
						type="text"
						id="goalDescription"
						onChange={(event) => setInputDescription(event.target.value)}
						required
					></input>

					<label htmlFor="msg">
						<b>Choose an Image Cover that others will see</b>
					</label>
					<div className="custom-file">
						<input type="file" className="custom-file-input" id="customFile" />
						<label className="custom-file-label" htmlFor="customFile">
							Upload an image
						</label>
					</div>

					<button type="submit" className="btn" onClick={submitForm}>
						Send
					</button>
					<button type="button" className="btn cancel" onClick={closeForm}>
						Close
					</button>
				</form>
			</div>
		</section>
	);
}
