import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Ul = styled.ul`
//list-style: none;
//display: flex;
//flex-flow: row nowrap;
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin: 0;

  li {
    list-style: none;
    color: white;
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #4b2e83;
    position: fixed; //absolute?
    text-align: center;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    padding-top: 3.5rem;
    z-index: 1;
    //display: flex;
    //flex-direction: column;

    transform: ${({ open }) => open ? 'translateX(0)' : 'translateY(-100%)'};

  }
`;

const smallNav = ({ open }) => {
  return (
    <Ul open={open}>
        <li className="home">
		    <NavLink to="/">Home</NavLink>
		</li>
		<li className="ranking">
		    <NavLink to="/Ranking">Ranking</NavLink>
		</li>
		<li className="settings">
			<NavLink to="/Login">Sign in</NavLink>
		</li>
    </Ul>
  )
}

export default smallNav