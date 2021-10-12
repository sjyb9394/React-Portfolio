import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Loading from './Loading.js';
import emailjs from 'emailjs-com';
import Typewriter from 'typewriter-effect';

const ContactPage = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${({show}) => show ? 1 : 0};
  transition: opacity 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .Wrapper{
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .Left{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    min-height: 500px;
    padding: 5%;
    font-size: 3rem;
    color: white;
  }

  .Left form{
    width: 100%;
  }

  .Left strong{
    font-size: 1.3rem;
    color: #0ce4c4;
  }

  .cursorSize{
    font-size: 1.3rem;
    transition: all 0.6s;
    animation: blinking-cursor 0.8s cubic-bezier(0.68, 0.01, 0.01, 0.99) 0s infinite;
  }

  @keyframes blinking-cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .contact_wrapper{
    margin-top: 5%;
  }

  .contact_wrapper .name_email{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .name_field, .email_field{
    width: 48%;
  }

  .name_field input, .email_field input{
    width: 100%;
    padding: 10px;
    background-color: #202434;
    border: none;
    outline-color: #34348c;
  }

  input:focus, .message_field textarea:focus, .subject_field input:focus{
    border:1px solid #34348c;
    outline: none;
  }

  .subject_field input{
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    background-color: #202434;
    border: none;
  }

  .message_field textarea{
    margin-top: 30px;
    width: 100%;
    height: 150px;
    padding: 10px;
    resize: none;
    background-color: #202434;
    border: none;
  }

  .Right{
    width: 50%;
    height: 100%;
    padding: 2%;
    min-height: 500px;
  }

  .submit_btn{
    margin-top: 20px;
  }

  .submit_btn input{
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid;
    color: white;
    background-color: transparent;
    transition: border 0.3s ease-in, color 0.3s ease-in;
    cursor:pointer;
  }

  .submit_btn input:hover{
    border: 1px solid rgb(17, 95, 125);
    color: rgb(17, 95, 125);
  }

  .submit_btn input:active{
    transform: scale(0.97);
  }

  @media(max-width: 1200px){
    .Wrapper{
      width: 100rem;
    }

    .Left{
      width: 50%;
    }
  
    .Right{
      padding: 2%;
    }

    .Left strong{
      font-size: 1rem;
    }
  
    .cursorSize{
      font-size: 1rem;
    }
  }

  @media(max-width: 885px){
    .Wrapper{
      flex-direction: column;
      display: flex;
      align-items: center;
    }

    .Left{
      width: 90%;
      padding: 0;
      font-size: 1.5rem;
    }
  
    .Right{
      width:100vw;
      padding: 5%;
    }

    .Left strong{
      font-size: 0.9rem;
    }
  
    .cursorSize{
      font-size: 0.8rem;
    }
  }
`;

export default function Contact() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setShow(true);
    }, 1600);
  }, []);

  function sendEmail(e){
    e.preventDefault();
    
    emailjs.sendForm('service_6tp822g', 'template_zwxe6o9', e.target, 'user_BEqiG6AWpEwHdfdM5FTMF')
      .then((result)=>{
        alert('Message Sent! Thank You!');
      }, (error)=>{}); 
    e.target.reset();
  }

  return (
    <>
      <Loading />
      <ContactPage show={show}>
          <div className="Wrapper">

            <div className="Left">
                <Typewriter 
                  textStyle={{
                    color: '#3F3D56',
                    fontWeight: 500,
                    fontSize: '1.5rem',
                  }}
                  onInit={(typewriter)=>{
                    typewriter.pauseFor(1500).typeString('<strong>Welcome To My Website!</strong>').start().pauseFor(1500).deleteAll()
                    .typeString('<strong>Connect Me On LinkedIn!</strong>').start().pauseFor(1500).deleteAll()
                    .typeString('<strong>Contact Me At Anytime!</strong>').start().pauseFor(1500);
                  }}
                  options={{
                    loop:true,
                    cursorClassName: 'cursorSize',
                    delay: 85
                  }}
                />
              <form onSubmit={sendEmail}>
                <div className="contact_wrapper">
                  <div className="name_email">
                    <div className="name_field">
                      <input type='text' className='form-control' placeholder='Name' name='name' required />
                    </div>
                    <div className="email_field">
                      <input type='email' className='form-control' placeholder='Email Address' name='email' required />
                    </div>
                  </div>
                  <div className="subject_field">
                    <input type='text' className='form-control' placeholder='Subject' name='subject' required />
                  </div>
                  <div className="message_field">
                    <textarea className='forn-control' placeholder='Your message' name='message' required></textarea>
                  </div>
                  <div className='submit_btn'>
                    <input type='submit' className='submit_button' value='Send Message'></input>
                  </div>
                </div>
              </form>

              
            </div>
            <div className="Right">
            <div style={{textDecoration:'none', width:'100%', height:'100%', opacity:'0.7'}}><div id="gmapdisplay" style={{height:'100%', width:'100%'}}><iframe title='map' style={{height:'100%',width:'100%',border:'0', borderRadius:'10px'}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=45-17+161st+st,+flushing,+ny+11358&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div></div>
            </div>
          </div>
      </ContactPage>
    </>
  );
}


