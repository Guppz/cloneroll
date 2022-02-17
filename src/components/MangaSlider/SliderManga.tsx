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
        slidesPerView={1}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpeg"
            title="One Piece"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpeg"
            title="One Piece"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpeg"
            title="One Piece"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpeg"
            title="One Piece"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MangaCard
            img="https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/2239c7b46b2e491ae33b33ff980e9fb1.jpeg"
            title="One Piece"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
