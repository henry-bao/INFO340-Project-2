import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import Countdown from 'react-countdown';
import { toast } from 'react-toastify';

export function Join(props) {
    let joinData = props.data;
	useEffect(() => {
		const userDataRef = firebase.database().ref("UserData");
		userDataRef.on('value', (snapshot) => {
			console.log(snapshot);
		})
	}, [])

    const Completionist = () => <span>This event has ended :(</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            if (days > 30) {
                return <span>There is more than one month to finish the goal!</span>;
            } else {
                // Render a countdown
                return (
                    <span>
                        There is {days} days {hours} hours {minutes} mins {seconds} seconds left
                    </span>
                );
            }
        }
    };

    const eventEnded = () => {
		toast.warn("The event has ended!");
	}

    const loginError = () => {
		toast.warn("You haven't Sign in!");
	}

    let distance = props.distance;
    let userState = props.currentUser;

    const add = () => {
        if(distance <= 0) {
            eventEnded();
        } else if(!userState) {
            loginError();
        } else {
            // const newUserDataObj = {
            //     displayName: userState.displayName,
            //     selectedGoal: "none"
            // }
            const goalsRef = firebase.database().ref("Goals").child(joinData.key);
            goalsRef.update({
                "people": joinData.people + 1
              });
            // userDataRef.push(newUserDataObj);
        }
    }

    return (
        <div className="joinBox animate__animated animate__fadeInUp animate__slow">
            <Countdown date={Date.now() + distance} renderer={renderer} />
            <p>{joinData.contact}</p>
            <p>
                There are <strong>{joinData.people}</strong> people waiting for you!
            </p>
            <button className="btn btn-primary" onClick={add}>Count me in!</button>
        </div>
    );
}
