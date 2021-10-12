import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from './Loading.js';
import codingperson from '../Images/Yeongbin_Kim_Pict.png';
import { useLocation } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css';



const AboutPage = styled.div`
  opacity: ${({show}) => show ? 1 : 0};
  transition: opacity 0.5s ease;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;

  .wrapper{
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: 3%;
  }

  .pict{
    display: flex;
    align-items: center;
    justify-content:center;
    max-width: 600px;
  }

  .aboutMeText{
    display: flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
    max-width: 700px;
    padding: 3rem;
  }

  .aboutMeText h1{
    font-size: 3rem;
    color: #0ce4c4;
  }

  .aboutMeText p{
    font-size: 1rem;
    color: white;
  }

  .resume{
    width: 100%;
    text-align: center;
    margin-top: 4rem;
  }

  .resume a{
    text-decoration: none;
    background-color: #202434;
    padding: 20px 50px;
    border-radius: 20px;
    color: white;
    font-weight: bold;
    transition: all 0.5s ease-in;
  }

  .resume a:hover{
    background-color: #123456;
    color: black;
  }

  .resume:active{
    transform: scale(0.97);
  }

  @media(max-width:1200px){
    .aboutMeText h1{
      margin-top:0;
      font-size: 2rem;
    }
    .aboutMeText p{
      font-size: 0.8rem;
    }
    .open, .close{
      display:none;
    }
  }

  @media(max-width: 885px){
    .wrapper{
      flex-direction:column;
    }
  }
}
`;

export default function About() {
  const [show, setShow] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);

    useEffect(()=> {
      if (location.hash) {
          let elem = document.getElementById(location.hash.slice(1))
          if (elem) {
              elem.scrollIntoView({behavior: "smooth"})
          }
      } else {
      window.scrollTo({top:0,left:0, behavior: "smooth"})
      }
  }, [location,])


  useEffect(()=>{
    setTimeout(() => {
      setShow(true);
    }, 1600);
  }, [])

  return (
    <>
      <Loading />
      <AboutPage show={show}>
        <div className="wrapper" id="about">
            <div className="pict">
              <img src={codingperson} alt="coding person" style={{width:'70%', opacity:'0.5', borderRadius:'20%'}}></img>
            </div>
            <div className="aboutMeText">
              <h1 data-aos='fade-up'>About Me</h1>
              <p data-aos='fade-up'> A motivated and passionate programmer who quickly adapts to any environment. Good understanding of JavaScript and Python. Strong computer science fundamentals in data structures, algorithms, and problem-solving skills. Fast learner and have a desire to learn other coding languages, and skills as needed.</p>
              <div className="resume" data-aos='fade-up'>
              <a href="https://drive.google.com/file/d/1cp4GNevxmZjM-5CKqacQpn0qAZcE3lUM/view?usp=sharing" target='_blank' rel="noreferrer">My Resume</a>
              </div>
          </div>
        </div>
      </AboutPage>
    </>
  );
}


