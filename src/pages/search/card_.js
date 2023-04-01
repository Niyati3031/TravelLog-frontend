import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../index.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Scrollbar} from 'swiper';

import slide_image_1 from '../../images/assets/images/imagesMain.png';
import slide_image_2 from '../../images/assets/images/mustVisit.png';
import slide_image_3 from '../../images/assets/images/avoid.png';
import slide_image_4 from '../../images/assets/images/hotels.png';
import slide_image_5 from '../../images/assets/images/markets.png';
import slide_image_6 from '../../images/assets/images/food.png';
import slide_image_7 from '../../images/assets/images/things.png';
import slide_image_8 from '../../images/assets/images/points.png';
import { useNavigate } from 'react-router';

function MyCard(prop) {
    console.log(prop.loc);
    const navigate = useNavigate();
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
  return (
    // 
    <div>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
    modules={[EffectCoverflow,Navigation, Pagination, Scrollbar]}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 500,
      modifier: 2.5,
    }}
    spaceBetween={50}
    slidesPerView={'auto'}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    }}
    pagination={{el:'.swiper-pagination', clickable: true}}
    scrollbar={{draggable: true}}
    onSwiper={(swiper) => console.log(swiper)}
    className="swiper_container"
    style={{marginTop: "2%", marginLeft:0, marginRight: 0}}
    >
        <SwiperSlide><img src={slide_image_1} alt="slide_image" onClick={routeChangeImages}/></SwiperSlide>
        <SwiperSlide><img src={slide_image_2} alt="slide_image" onClick={routeChangeMustVisit}/></SwiperSlide>
        <SwiperSlide><img src={slide_image_3} alt="slide_image" onClick={routeChangeAvoid}/></SwiperSlide>
        <SwiperSlide><img src={slide_image_4} alt="slide_image" onClick={routeChangeHotel}/></SwiperSlide>
        <SwiperSlide><img src={slide_image_5} alt="slide_image" onClick={routeChangeMarket}/></SwiperSlide>
        <SwiperSlide><img src={slide_image_6} alt="slide_image" onClick={routeChangeFood}/></SwiperSlide>
        <SwiperSlide><img src={slide_image_7} alt="slide_image" onClick={routeChangeThings}/></SwiperSlide>
        <SwiperSlide><img src={slide_image_8} alt="slide_image" onClick={routeChangePoint}/></SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
    </Swiper>
    </div>
  );
}

export default MyCard;