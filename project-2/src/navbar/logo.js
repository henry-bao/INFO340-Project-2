import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    z-index: 11;
`;

const LogoImg = styled.div`
    width: 50px;
    height: 60px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoText = styled.h1`
    font-size: 20px;
    margin: 0;
    margin-left: 4px;
    color: white;
    font-weight: 500;
`;

export default function Logo(props) {
    return (
        <LogoWrapper>
            <LogoImg>
                <img src="img/logo.png" alt="Goal Husky logo" />
            </LogoImg>
            <LogoText>Goal Husky!</LogoText>
        </LogoWrapper>
    );
}
