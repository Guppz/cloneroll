import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MangaCard from "../MangaCard/MangaCard";
import axios from "axios";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ImageSlider.css";

export default function App() {
  const [mangas, setManga] = React.useState<any[]>([]);

  const getData = async () => {
    await axios
      .get("/mock/manga.json")
      .then((res) => {
        res.data.length = 7;
        setManga(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, []);
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
        {mangas.map((manga, index) => {
          return (
            <SwiperSlide key={index}>
              <MangaCard
                img={manga.cover}
                title={manga.title}
                manga={manga}
                id={index}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
