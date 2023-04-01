import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import Card from './card.js';
import './loginHomepage.css';
import logo from 'D:/Travel/travel/src/images/monuments_home.jpg';

function Home(){
    return(
        <div class="body">
        {/* <Parallax pages={2} style={{ top: '0', left: '0', zIndex: -5 }} class='animation'>
            <ParallaxLayer offset={0} speed={-0.7}>
                <div class='animation_layer parallax' id ='sky'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={3}>
                <div class='animation_layer parallax' id ='sky'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={-0}>
                <div class='animation_layer parallax' id ='light'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.0}>
                <div class='animation_layer parallax' id ='dark'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.8}>
                <div class='animation_layer parallax' id ='monuments'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={3}>
                <div class='animation_layer parallax' id ='clouds'></div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={1.5}>
                <Card/>
            </ParallaxLayer>
      </Parallax> */}
      <img src={logo} alt="logo" />
      <Card/>
        </div>


    )
}

export default Home;