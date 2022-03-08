import React, { FC } from "react";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./manga.css";
import Liner from "../components/Liner/Liner";
import { Link } from "react-router-dom";

const Manga: FC = () => {
  const location = useLocation();
  const { manga, id } = location.state as any;
  const [type, setType] = React.useState([]);

  React.useEffect(() => {
    let uniqueChars: any = [];
    manga.types[0].split(/\n/g).forEach((c: string) => {
      if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
      }
    });
    setType(uniqueChars);
  }, []);

  const capitalize = (s: string) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <div className="bg-black w-full h-full">
      <Header />
      <main className="grid gap-y-[3.75rem] content-evenly relative pt-[3.75rem]">
        <div className="main-content grid gap-y-[2.5rem] content-wrapper ">
          <div className="grid-container">
            <div className="img">
              <img src={manga.cover} alt="cover" />
            </div>
            <div className="title">
              <h1 className="text-white text-[2.125rem]">
                {manga.title}
                <Liner color={false} />
              </h1>
            </div>
            <div className="des">
              <p className="text-white">{manga.des}</p>
            </div>
            <div className="genres">
              {manga.genres.map((item: string, index: number) => {
                return (
                  <div
                    key={index}
                    className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-primary text-white rounded-full"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="types">
              {type.map((item: string, index: number) => {
                if (index !== 0 && index !== 1 && index !== 3 && index !== 5)
                  return (
                    <div
                      key={index}
                      className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-[#ef4323] text-white rounded-full"
                    >
                      {capitalize(item)}
                    </div>
                  );
                else return null;
              })}
            </div>
          </div>
          <Liner color={false} />
          <div className="grid gap-4  sm:grid-cols-2 ">
            {manga.chapters.map((item: any, index: number) => {
              return (
                <Link
                  to={`/manga/${id}/chapters/${index}`}
                  key={index}
                  state={{ chapter: item }}
                  className="relative bg-primary text-white p-3 rounded-lg text-sm uppercase font-semibold tracking-tight overflow-visible"
                >
                  {item.titleChapter}
                  <div className="absolute -top-3 -right-3 px-2.5 py-0.5 bg-[#ef4323] rounded-full text-xs">
                    {item.chaptersSrc.length}
                  </div>
                </Link>
              );
            })}
          </div>
          <Liner color={false} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Manga;
