import React from 'react';
import profile from 'D:/Travel/travel/src/images/travel.png';
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
margin:10px;
`;

const StyledImg = styled.img`
    width: 200px;
    height: auto;
    border: 2px solid #000;
    border-radius: 50%;
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

const Card = (prop) => {
    console.log(prop.loc);
    let navigate = useNavigate(); 
    const routeChangeFood = () =>{ 
         let path = `/food?loc=${prop.loc}`; 
        navigate(path);
    }
    const routeChangeHotel = () =>{ 
        let path = `/hotel?loc=${prop.loc}`; 
       navigate(path);
   }
   const routeChangeImages = () =>{ 
    let path = `/image?loc=${prop.loc}`; 
    navigate(path);
    }
    const routeChangeMustVisit = () =>{ 
        let path = `/mustVisit?loc=${prop.loc}`; 
       navigate(path);
   }
   const routeChangeAvoid = () =>{ 
    let path = `/avoid?loc=${prop.loc}`; 
   navigate(path);
    }
    const routeChangeMarket = () =>{ 
        let path = `/market?loc=${prop.loc}`; 
       navigate(path);
   }
   const routeChangeThings = () =>{ 
    let path = `/thing?loc=${prop.loc}`; 
   navigate(path);
    }
    const routeChangePoint = () =>{ 
        let path = `/point?loc=${prop.loc}`; 
    navigate(path);
    }
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <div>
        <Container
            onClick={routeChangeImages}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans),
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Images</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        <Container
            onClick={routeChangeMustVisit}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Must Visit Places</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        <Container
            onClick={routeChangeAvoid}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Places to avoid visiting</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        <Container
            onClick={routeChangeHotel}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Best Hotels available</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        <Container
            onClick={routeChangeMarket}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Best marketplace available</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        <Container
            onClick={routeChangeFood}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Best food items to try</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        <Container
            onClick={routeChangeThings}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Things you must buy</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        <Container
            onClick={routeChangePoint}
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[0,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <center><StyledH1>Points to remember</StyledH1></center>
            {/* <button onClick={routeChange1}>Click HERE</button> */}
            {/* <StyledH3>Data Scientist, Designer <br/> and Full Stack Developer</StyledH3> */}
        </Container>
        </div>

        
    );
}

export default Card;