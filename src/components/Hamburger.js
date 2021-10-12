import React,{useState} from 'react';
import styled from 'styled-components';
import {Nav} from './Nav.js';

const StyledBurder = styled.div`
    width: 3rem;
    height: 3rem;
    background-color:#000;
    position: fixed;
    border-radius: 0.5rem;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display:none;

    div{
      width: 1.5rem; 
      height: 0.2rem;
      background-color: #fff;
      margin: 0.2rem;
    }

    @media(max-width: 1200px){
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 11;
    }
`;

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurder open={open} onClick={()=>setOpen(!open)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
      </StyledBurder>
      <Nav open={open} setOpen={setOpen}/>
    </>
  );
}