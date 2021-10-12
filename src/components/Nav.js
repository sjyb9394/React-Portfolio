import React from 'react';
import {Link} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';
import styled from 'styled-components';
import logo from '../Images/Yeongbin_Logo.png';

const MainNav = styled.div`
    position: fixed;
    width: 6.5rem;
    background-color: #181818;
    color: #fff;
    top: 0;
    left: 0;
    right: auto;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index : 10;

    ul{
        list-style: none;
    } 

    .home-nav{
        min-height: 200px;
        background-color: #000;
    }

    .home-nav p{
        font-size: 0.5rem;
        padding: 0;
        margin: 0;
        position: relative;
        top: 0.75rem;
        color: #777;
        font-weight: bold;
    }

    .home-nav,.main-menu{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        flex-direction: column;
    }

    .main-menu{
        min-height: 250px;
    }

    .main-menu ul{
        margin-top: 0;
        width: 100%;
        border-top: 1px solid #282828;
        padding: 0;
        list-style-type: none;
    }

    .main-menu ul li{
        width: 100%;
        border-bottom: 1px solid #282828;
        text-align: center;
        padding: 0.75rem;
    }

    .social-nav{
        min-height: 200px;
    }

    .social-nav ul{
        display: flex;
        list-style-type: none;
        align-items: center;
        justify-content: center;
        padding: 0;
    }

    .social-nav ul li{
        padding: 5px;
    }
    
    .menu{
        text-decoration: none;
        color: grey;
        font-size: 0.8rem;
    }

    @media(max-width: 1200px){
        width: ${({open}) => open ? `100%` : 0};
        opacity: ${({open}) => open ? 1 : 0};
        transition: width 0.5s ease, opacity 0.5s ease;

        .home-nav p, .home-nav .menu{
            display: flex;
            aligen-items: center;
            justify-content: center;
        }

        .home-nav, .main-menu, .social-nav{
            display:${({open}) => open ? 'block' : 'none'};
        }
    }
`;

function Nav({open, setOpen}) {
  return (
    <MainNav open={open}>
        <div className="home-nav">
            <Link to="/" className="menu" onClick={()=>setOpen(!open)}><img src={logo} alt="Logo" style={{height:'129px'}}></img></Link>
            <p>Yeongbin Kim</p>
            <p>Software Engineer</p>
        </div>

        <div className="main-menu">
            <ul>
                <li><Link to="/#about" className ="menu" onClick={()=>setOpen(!open)}>About</Link></li>
                <li><Link to="/#myskills" className ="menu" onClick={()=>setOpen(!open)}>MySkills</Link></li>
                <li><Link to="/#project" className ="menu" onClick={()=>setOpen(!open)}>Project</Link></li>
                <li><Link to="/contact" className ="menu" onClick={()=>setOpen(!open)}>Contact</Link></li>
            </ul>
        </div>

        <div className="social-nav">
            <ul>
                <li><SocialIcon url="https://www.linkedin.com/in/yeongbin-kim-07590b16b/" bgColor="grey" style={{ height: 25, width: 25 }} /></li>
                <li><SocialIcon url="https://github.com/sjyb9394" bgColor="grey" style={{ height: 25, width: 25 }} /></li>
                <li><Link to="/contact"><SocialIcon network="email" style={{ height: 25, width: 25}} /></Link></li>
            </ul>
        </div>

    </MainNav>
  );
}

export {Nav};


