import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { NavLink } from 'react-router-dom';

const handleSignout = (input) => {
    let word = input.target.outerText;
    if (word === 'Sign out') {
        firebase.auth().signOut();
    }
};

const AccessContainer = styled.div`
    display: flex;
`;

const LoginButton = styled.div`

`;

export default function Access(props) {
    return (
        <AccessContainer>
            <NavLink className='loginbutton'
                to={props.buttonWord === 'Sign in' ? '/signin' : '/'}
                onClick={(event) => {
                    handleSignout(event);
                }}
            >
                {props.buttonWord}
            </NavLink>
        </AccessContainer>
    );
}
