import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from './Loading.js';
import project1 from '../Images/project1.PNG';
import project2 from '../Images/project2.PNG';
import project3 from '../Images/project3.PNG';
import { useLocation } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css'

const ProjectPage = styled.div`
  opacity: ${({show}) => show ? 1 : 0};
  transition: opacity 0.5s ease;

  .project_main_content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .heading{
    width: 80%;
  }

  .heading h1{
    font-size: 3rem;
    color: #0ce4c4;
  }

  .wrapper{
    width: 80%;
    display: flex;
    justify-content: space-between;
    padding: 5% 0px;
  }

  .wrapper > div{
    width: 32%;
    min-height: 300px;
    box-shadow: 0px 0px 10px rgba(0,0,0,1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    position: relative;
  }

  .active{
    transform: scale(1.3);
    background-color: #202434;
    z-index: 1;
  }

  .wrapper div a{
    width: 100%;
    height: 100%;
  }

  .wrapper div img{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0;
  }

  .project_description{
    color: white;
    width: 50%;
    box-shadow: 0px 0px 5px rgba(0,0,0,0.9);
    margin-bottom: 10px;
    padding: 20px;
    text-align: center;
  }

  .project_description h1{
    font-size: 1.5rem;
    color: #0ce4c4;
  }

  .project_description h2{
    font-size: 1rem;
    color: white;
  }

  .project_description a{
    text-decoration: none;
    color: grey;
  }

  @media(max-width: 1200px){
    .wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .heading h1{
      font-size: 2rem;
      text-align: center;
    }

    .wrapper > div{
      width: 50%;
      min-width: 0;
      min-height: 200px;
    }

    .project_description{
      margin-top: 30px;
    }
  }

  @media(max-width: 885px){
    .wrapper{
      flex-direction: column;
      display: flex;
      align-items: center;
    }

    .heading h1{
      font-size: 2rem;
    }

    .wrapper > div{
      width: 90%;
      min-width: 0;
      min-height: 200px;
    }

    .active{
      transform: scale(1.1);
    }

    .project_description{
      width: 90%;
    }

    .project_description h1{
      font-size: 0.9rem;
    }

    .project_description h2{
      font-size: 0.7rem;
    }

    .project_description a{
      font-size: 0.7rem;
    }
  }

`;

export default function Project() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(2);
  const description = [
    {'Title':'Movie App', 'Skills':'HTML | CSS | Javascript', 'Link':'https://sjyb9394.github.io/Movie_App/Movie_App/index.html'},
    {'Title':'My Blog', 'Skills':'HTML | CSS | Javascript | Python | Django | NoSQL', 'Link':'http://sjyb9394.pythonanywhere.com/'},
    {'Title':'50 UI Projects in 50 Days', 'Skills':'HTML | CSS | Javascript', 'Link':'https://github.com/sjyb9394/50-Web-Projects'}
  ];

  useEffect(()=>{
    Aos.init({duration: 1000});
  }, []);

  const location = useLocation();

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
      <ProjectPage show={show}>
        <div className="project_main_content" id="project">
          <div className="heading">
            <h1 data-aos='fade-down'>My Project</h1>
          </div>
          <div className="wrapper">
            <div className={`${active===1 ? 'active' : 'left'}`} onMouseOver={()=>setActive(1)}>
              <a href='https://sjyb9394.github.io/Movie_App/Movie_App/index.html' target='_blank' rel="noreferrer">
                <img src={project1} alt='project1'></img>
              </a>
            </div>
            <div className={`${active===2 ? 'active' : 'mid'}`} onMouseOver={()=>setActive(2)}>
              <a href='http://sjyb9394.pythonanywhere.com/' target='_blank' rel="noreferrer">
                <img src={project2} alt='project2'></img>
              </a>
            </div>
            <div className={`${active===3 ? 'active' : 'right'}`} onMouseEnter={()=>setActive(3)}>
              <a href='https://github.com/sjyb9394/50-Web-Projects' target='_blank' rel="noreferrer">
                <img src={project3} alt='project3'></img>
              </a>
            </div>
          </div>
          <div className="project_description" data-aos='fade-up'>
            <DisplayDescription active={active} description={description} />
          </div>
        </div>
      </ProjectPage>
    </>
  );
}

function DisplayDescription(props){
  return(
    <>
      <h1>Title : {props.description[props.active-1]['Title']}</h1>
      <h2>Skills Used: {props.description[props.active-1]['Skills']}</h2>
      <h2>Link: <a href={props.description[props.active-1]['Link']} target='_blank' rel="noreferrer">Go to {props.description[props.active-1]['Title']}</a></h2>
    </>
  )
}
