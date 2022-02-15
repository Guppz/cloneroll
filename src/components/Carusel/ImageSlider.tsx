import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./ImageSlider.css";

// import required modules
import { Navigation, EffectFade, Pagination } from "swiper";

const ImageSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, EffectFade, Pagination]}
        className="mySwiper"
        effect="fade"
      >
        <SwiperSlide>
          <div className="bg-orange bg-cover bg-center bg-no-repeat w-full h-[604px] flex justify-center items-center">
            <img
              src="https://static.crunchyroll.com/fms/landscape_poster/960x540/1641512218090__4_art2_arousel_1920x1080_.png"
              alt=""
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue bg-cover bg-center bg-no-repeat w-full h-[604px] flex justify-center items-center">
            <img
              src="https://static.crunchyroll.com/fms/landscape_poster/960x540/1639778425206__emon_layer_ntertainment_arousel_1920x1080_.png"
              alt=""
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-orange-2  bg-cover bg-center bg-no-repeat w-full h-[604px] flex justify-center items-center">
            <img
              src="https://static.crunchyroll.com/fms/landscape_poster/960x540/f0657eb1-7be7-4cfc-adfc-59bb57320c0a.png"
              alt=""
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue bg-cover bg-center bg-no-repeat w-full h-[604px] flex justify-center items-center">
            <img
              src="https://static.crunchyroll.com/fms/landscape_poster/960x540/12a1a7b9-040b-49ff-8e9d-af75c5ce4b52.png"
              alt=""
              className="object-contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-orange bg-cover bg-center bg-no-repeat w-full h-[604px] flex justify-center items-center">
            <img
              src="https://static.crunchyroll.com/fms/landscape_poster/960x540/61c51933-7077-43bb-b638-f8b1cc89a777.png"
              alt=""
              className="object-contain"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageSlider;
