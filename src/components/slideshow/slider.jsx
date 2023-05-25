import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import './slider.scss'

import Banner1 from '../../assets/banner-img.jpeg'
import Banner2 from '../../assets/banner-img1.png'
import Banner3 from '../../assets/banner-img2.png'
import Banner4 from '../../assets/banner-img3.jpeg'
import Banner5 from '../../assets/banner-img4.jpeg'
import Banner6 from '../../assets/banner-img5.jpeg'


// import required modules
import { Autoplay } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                freeMode={{
                    enabled: true,
                    speed: 5000,
                    freeModeMomentum: false
                }}
                // navigation={false}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className="swiper"><img className="img" src={Banner1} /></SwiperSlide>
                <SwiperSlide className="swiper"><img className="img" src={Banner2} /></SwiperSlide>
                <SwiperSlide className="swiper"><img className="img" src={Banner3} /></SwiperSlide>
                <SwiperSlide className="swiper"><img className="img" src={Banner4} /></SwiperSlide>
                <SwiperSlide className="swiper"><img className="img" src={Banner5} /></SwiperSlide>
                <SwiperSlide className="swiper"><img className="img" src={Banner6} /></SwiperSlide>
            </Swiper>
        </>
    );
}
