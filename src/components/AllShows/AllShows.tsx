import React, { FC } from "react";
import axios from "axios";
import MangaCard from "../MangaCard/MangaCard";
import Liner from "../Liner/Liner";
import "./Allshows.css";
import { Link } from "react-router-dom";

const AllShow: FC = () => {
  const [mangas, setManga] = React.useState<any[]>([]);

  const getData = async () => {
    await axios
      .get("/mock/manga.json")
      .then((res) => {
        setManga(res.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="content-wrapper bg-black w-full h-full">
      <h1 className="self-center inline-block max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-white text-[1.75rem]">
        Browse All
      </h1>
      <Liner color />
      <h3 className="mb-[1.75rem] mt-[.75rem] text-[1.15rem] text-white">
        Popular
      </h3>
      <div className="grid-shows">
        {mangas.length !== 0
          ? mangas.map((manga, index) => {
              return (
                <Link
                  to={`/manga/${index}`}
                  state={{ manga: manga, id: index }}
                  className="w-[162px] h-[305px]"
                >
                  <MangaCard
                    key={index}
                    img={manga.cover}
                    title={manga.title}
                    manga={manga}
                    id={index}
                  />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default AllShow;
