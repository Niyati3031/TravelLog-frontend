import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import AboutMe from '../about/aboutme.js';
import './homepage.css';
import logo from 'D:/Travel/travel/src/images/monuments_home.jpg';

function HomePage(){
    return(
        <div class="body">
        {/* <Parallax pages={2} style={{ top: '0', left: '0', zIndex: -5 }} class='animation'>
            <ParallaxLayer offset={0} speed={-0.7} style={{zIndex:-4}}>
                <div class='animation_layer parallax' id ='sky'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={3} style={{zIndex:-4}}>
                <div class='animation_layer parallax' id ='sky'></div>
            </ParallaxLayer> 
            <ParallaxLayer offset={0} speed={-1} style={{zIndex:-4}}>
                <div class='animation_layer parallax' id ='light'></div>
            </ParallaxLayer> 
            <ParallaxLayer offset={0} speed={2.0} style={{zIndex:-4}}>
                <div class='animation_layer parallax' id ='dark'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.} style={{zIndex:-4}}>
                <div class='animation_layer parallax' id ='monuments'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={3} style={{zIndex:-4}}>
                <div class='animation_layer parallax' id ='clouds'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.5} style={{zIndex:0, top:0}}>
                <AboutMe/>
            </ParallaxLayer>
      </Parallax> */}
      <img src={logo} alt="logo" />
      <AboutMe/>
        </div>


    )
}

export default HomePage;