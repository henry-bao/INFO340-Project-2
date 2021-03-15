import React from 'react';
import styled from 'styled-components';

const AccessContainer = styled.div`
    display: flex;
`;

const LoginButton = styled.div`
    border: 0;
    outline: 0;
    padding: 8px 1em;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 20px;
    background-color: #b7a57a;
    background-image: linear-gradient(to right, transparent 0%, #b7a57a 100%);
    transition: all 240ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #85754d;
    }
`;

export default function Access(props) {
    return (
        <AccessContainer>
            <LoginButton>Login</LoginButton>
        </AccessContainer>
    );
}
