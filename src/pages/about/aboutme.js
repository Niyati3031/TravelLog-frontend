import '../homepage/homepage';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
padding: 3em;
background: #FAEDCD;
border-radius: 10px;
z-index: 1;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;
margin:80px;
width:70%;
height:40%;
`;

function AboutMe() {
    return (
        <center>
            <div
        style={{
            background: 'white',
            alignItems: 'center'
          }}
        >
            <Container>
            <div id="about">
            <div id="about-container">
                <h1 id="about-title">About Travel Mania!!</h1>
                <p id="about-content">
                    <br></br>
                We have laid out a helpful community consisting of passionate travelers who love exploring new destinations and sharing their experiences with others..<br/><br/>
                On our website, you'll find practical travel tips and inspiring stories from our adventurers. Whether you're a seasoned traveler or a first-time explorer, we've got something for you.<br/><br/>
                People who love to travel are welcomed here, to share their experiences with other people, helping them to make better decisions while selecting a place to visit.<br/><br/>
                We have brought many travellers together through our chat community outlet, where people can easily submit their queries and also answer others questions if they have knowledge of that area.
                </p>
            </div>
            
        </div>
        </Container>
        </div>
        </center>
        
    );
}

export default AboutMe;