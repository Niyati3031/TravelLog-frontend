import React from 'react';
import profile from 'D:/Travel/travel/src/images/searchPage.png';
import add from 'D:/Travel/travel/src/images/add.png';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import { useNavigate } from "react-router-dom";

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #C7D2FE66;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
margin:80px;
width:30%;
height:40%;
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    // border: 2px solid #000;
    // border-radius: 50%;
`;

const StyledH1 = styled.h1`
    line-heright: 1.5;
    letter-spacing: 1.5;
    font-family: "Gilroy";
`;

const StyledH3 = styled.h3`
    line-heright: 1.5;
    letter-spacing: 1.15;
    font-family: "Gilroy";
    font-size: 20px;
`;

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    let navigate = useNavigate(); 
    const routeChange1 = () =>{ 
         let path = `/add`; 
        navigate(path);
    }
    const routeChange2 = () =>{ 
        let path = `/search`; 
       navigate(path);
   }
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <div>
        <Container
            onClick={routeChange1}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={add} />
            <center><StyledH1>ADD</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>

        <Container
            onClick={routeChange2}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>SEARCH</StyledH1></center>
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        </div>

        
    );
}

export default GlassCard;