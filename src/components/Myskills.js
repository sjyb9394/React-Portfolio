import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from './Loading.js';
import react_icon from '../Images/React_Icon.png';
import html_icon from '../Images/HTML_Icon.png';
import css_icon from '../Images/CSS_Icon.png';
import python_icon from '../Images/Python_Icon.png';
import javascript_icon from '../Images/Javascript_Icon.png';
import java_icon from '../Images/Java_Icon.png';
import { BadgeCheckIcon } from "@heroicons/react/solid";
import { useLocation } from 'react-router';
import Aos from 'aos';
import 'aos/dist/aos.css'

const MySkillPage = styled.div`
  opacity: ${({show}) => show ? 1 : 0};
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .Wrapper{
    display: flex;
    width: 100%;
    height: 100%;
  }

  .Left{
    width: 50%;
    min-width: 550px;
    height: 100%;
    padding: 8%;
  }

  h1{
    margin-top: 0;
    font-size: 2rem;
    color: #0ce4c4;
  }

  .description p{
    font-size: 0.9rem;
    color: white;
  }

  .skills{
    display: flex;
    margin: 10px;
  }

  .Right{
    width: 50%;
    height: 100%;
    padding-right: 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 5%;
  }

  .skills img{
    height:80px;
  }

  .skill_box{
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 300px;
    background-color: #202434;
    margin: 20px 10px 20px 20px;

    border-radius: 10px;
    display: flex;
  }

  .skill_box input{
    width: 50px;
    height: 20px;
  }

  .skill_box h2{
    font-size: 1rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: start;
    padding-left: 20px;
  }


  @media(max-width: 1200px){
    flex-direction: column;

    .Wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .Left{
      width: 100%;
      min-width: 0;
      margin-top: 0;
    }

    .description{
      width: 100%;
    }

    .Right{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      margin-bottom: 20px;
      margin-top: 0;
    }

    .Right_Left{
      width: 90%;
    }

    .Right_Right{
      width: 90%;
    }

    .skills img{
      height:50px;
      margin-right: 15px;
    }

    .skill_box{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      width: 100%;
      margin-right: 10px;
      min-width: 0;
    }

    .skill_box h2{
      font-size: 0.7rem;
      padding-left: 0px;
    }
  }
`;

export default function MySkills() {
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
}, [location,]);

  useEffect(()=>{
    setTimeout(() => {
      setShow(true);
    }, 1600);
  }, [])

  return (
    <>
    <Loading />
      <MySkillPage show={show}>
        <div className="Wrapper" id="myskills">
          <div className="Left">
            <div className="description">
              <h1 data-aos='fade-up'>Skills & Technology</h1>
              <p data-aos='fade-up'>I graduated from Queens College with a Bachelor’s degree in computer science major with a
              3.78 major GPA. I am a passionate programmer who quickly adapts to any environment and
              has the desire to learn other coding languages as needed.<br /><br />
              I have work experience from US Army. I work as wheeled vehicle mechanics which I do test
              driving, inspecting, troubleshooting maintaining all the army vehicles. I learned how to stay
              motivated, improved my communication skills in both English and Korean, and how to manage
              the time wisely. These abilities have allowed me to continue to be passionate and learn new
              skills in computer science.<br /><br />
              My technical skills include extensive knowledge of programming, mathematics, data structures,
              algorithms, and coding languages and I have experience using Python, Java, and other
              skills for web development such as HTML/CSS, JavaScript, and React. I have created several
              projects such as a personal website, web scraping project, easy capture software application
              using Tkinter.</p>
            </div>
          </div>
          <div className="Right">
            <div className="Right_Left">
              <div className="skills" data-aos='fade-up'>
                <img src={react_icon} alt="Logo"></img>
                <div className="skill_box"><h2>React</h2></div>
                <BadgeCheckIcon style={{width:'40px', color:'lightgreen'}} />
              </div>
              <div className="skills" data-aos='fade-up'>
                <img src={html_icon} alt="Logo"></img>
                <div className="skill_box"><h2>HTML</h2></div>
                <BadgeCheckIcon style={{width:'40px', color:'lightgreen'}} />
              </div>
              <div className="skills" data-aos='fade-up'>
                <img src={css_icon} alt="Logo"></img>
                <div className="skill_box"><h2>CSS</h2></div>
                <BadgeCheckIcon style={{width:'40px', color:'lightgreen'}} />
              </div>
            </div>
            <div className="Right_Right">
              <div className="skills" data-aos='fade-up'>
                <img src={javascript_icon} alt="Logo"></img>
                <div className="skill_box"><h2>JavaScript</h2></div>
                <BadgeCheckIcon style={{width:'40px', color:'lightgreen'}} />
              </div>
              <div className="skills" data-aos='fade-up'>
                <img src={python_icon} alt="Logo"></img>
                <div className="skill_box"><h2>Python</h2></div>
                <BadgeCheckIcon style={{width:'40px', color:'lightgreen'}} />
              </div>
              <div className="skills" data-aos='fade-up'>
                <img src={java_icon} alt="Logo"></img>
                <div className="skill_box"><h2>Java</h2></div>
                <BadgeCheckIcon style={{width:'40px', color:'lightgreen'}} />
              </div>
            </div>
          </div>
        </div>
      </MySkillPage>
    </>
  );
}


