import React, { useState } from 'react';
import styled from 'styled-components';
import SmallNav from './smallnav';

const Burbur = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  z-index: 2;
  display: none;


  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ffffff' : '#ffffff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Burbur open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burbur>
      <SmallNav open={open}/>
    </>
  )
}

export default Burger
