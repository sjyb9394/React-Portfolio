import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"; 

const LoadingPage = styled.div`
  position:fixed;
  width: 100vw;
  height 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1d1d1d;
  transform: translateX(${props=>props.translate});
  transition: all 0.5s ease-in;
  z-index: 5;
  top: 0;
  left: 0;
`;

export default function Loading() {
    const [loading, setLoading] = useState(false);
    const [translate, setTranslate] = useState('-100%');

    useEffect(()=>{
        setLoading(true);
        setTranslate('0');
        setTimeout(()=>{
            setTranslate('-100%');
        }, 1200);
        setTimeout(()=>{
            setLoading(false);
        }, 2000);
    }, []);
  return (
    <>
      <LoadingPage translate={translate} >
          {
              loading 
              ? <ClimbingBoxLoader color={"#2D7C6D"} loading={loading} size={21} />
              : null
          }
      </LoadingPage>
    </>
  );
}


