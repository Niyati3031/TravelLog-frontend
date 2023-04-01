// import logo from './logo.svg';
// import './App.css';
// import background from './images/background2.jpg';
import logo_add from 'D:/Travel/travel/src/images/background_add.png'
import GlassCard from './glasscard';
import './card.css';

function Card() {
  return (
    <div className="main-div"
      style={{
        width: '100vw',
        height: '100vh',
        // backgroundImage: {logo_add},
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <GlassCard />
      
    </div>
  );
}

export default Card;