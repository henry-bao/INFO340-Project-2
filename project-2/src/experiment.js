//add useState for handling the image as a file and then the image as a url from firebase
import React, { useEffect } from "react";
import 'firebase/firestore';
import firebase from 'firebase'
import 'firebase/storage'
import {firebaseConfig} from './index';

export function Experiment() {




    const db = firebase.firestore();





    const [fileUrl, setFileUrl] = React.useState(null);
    const [users, setUsers] = React.useState([]);
  
    const onFileChange = async (e) => {
      const file = e.target.files[0];
      const storageRef = firebase.storage().ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      setFileUrl(await fileRef.getDownloadURL());
    };
  
    const onSubmit = async (e) => {
      e.preventDefault();
      const username = e.target.username.value;
      if (!username || !fileUrl) {
        return;
      }
      await db.collection("users").doc(username).set({
        name: username,
        avatar: fileUrl,
      });
    };
  
    useEffect(() => {
      const fetchUsers = async () => {
        const usersCollection = await db.collection("users").get();
        setUsers(
          usersCollection.docs.map((doc) => {
            return doc.data();
          })
        );
      };
      fetchUsers();
    }, []);
  
    return (
      <>
        <form onSubmit={onSubmit}>
          <input type="file" onChange={onFileChange} />
          <input type="text" name="username" placeholder="NAME" />
          <button>Submit</button>
        </form>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.name}>
                <img width="100" height="100" src={user.avatar} alt={user.name} />
                <p>{user.name}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }