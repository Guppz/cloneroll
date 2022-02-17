import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "../MangaCard/MangaCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./ImageSlider.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/445f73338ca9b5b74a36903cf54bf00e.jpeg"
            title="Skull-face Bookseller Honda-san"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/1af14876af87bdfbe42e0220c9e5d002.jpeg"
            title="New Game!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/08545f1b41a194c8cf16fdc61a28b758.jpeg"
            title="GANBARE DOUKICHAN"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/69a6173d531328e01c84e204e830a1ec.jpg"
            title="Ace Attorney"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/0556286fa01c265341ccb1381475a197.jpeg"
            title="Working Buddies!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/fb4ca5e8af9ed9ccca9db6c62811c2bd.jpg"
            title="Ojisan and Marshmallow"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
