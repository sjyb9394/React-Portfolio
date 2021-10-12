import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from './Loading.js';
import backgroundVideo from './video/video.mp4';
import TextTransition from "react-text-transition";
import {Link} from 'react-router-dom';

const TEXTS = [
  'A Software Engineer',
  'A Frontend Developer',
  'A Backend Developer',
  'A Web Developer'
];

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 3;
  opacity: ${({show}) => show ? 1 : 0};
  transition: opacity 0.5s ease;
  position: relative;

  .hello{
    position: absolute;
    color: rgba(255,255,255,1);
    top: 50%;
    margin-left: 15%;
    transform: translateY(-50%);
    cursor: default;
  }

  .hello h1{
    font-size: 3.5rem;
    padding: 0;
    margin: 0;
  }

  .contact{
    position: absolute;
    top: 100%;
    left: 0;
    padding: 15px 20px;
    border-radius: 8px;
    border: 0.5px solid;
    background: transparent;
    color: white;
    cursor:pointer;
    font-size: 18px;
    transition: border 0.3s ease-in, color 0.3s ease-in;
    text-decoration: none;
  }

  .contact::before{
    content:" ";
    width: 0%;
    height: 100%;
    background-color: #202434;
    opacity: 0.5;
    border-radius: 5px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.3s ease-in;
  }

  .contact:hover::before{
    width: 100%;
  }

  .contact:hover{
    border: color: #0ce4c4;;
    color: #0ce4c4;
  }

  .contact:active{
    transform: scale(0.97);
  }

  @media(max-width: 1200px){
    .hello h1{
      font-size: 2rem;
    }

    .hello h3{
      font-size: 1rem;
    }

    .contact{
      font-size: 0.7rem;
    }
  }

  @media(max-width: 800px){
    width:100%;
  }
}
`;

export default function Main() {
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      setIndex(index=>index+1);
    },2000)

    setTimeout(() => {
      setShow(true);
    }, 1600);

    return ()=> clearTimeout(intervalId);
  }, [])

  return (
    <>
      <Loading />
      <MainPage show={show}>
        <video autoPlay loop muted style={{position:'absolute', width:'100%', objectFit:'cover', height:'100%', top:'0', opacity:'0.4'}}>
          <source src={backgroundVideo} type="video/mp4"/>
        </video>
          <div className="hello">
            <h1>Hello,</h1>
            <h1>I'm Yeongbin</h1>
            <h1>
              <TextTransition
                text={ TEXTS[index % TEXTS.length] }
                style={{fontSize: '50px'}}
              />
            </h1>
            <Link to="/contact" className="contact">Contact Me</Link>
          </div>
      </MainPage>
    </>
  );
}