import React, { FC } from "react";
import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import "./manga.css";

const Chapter: FC = () => {
  const location = useLocation();
  const { chapter } = location.state as any;

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-black w-full h-full">
      <Header />
      <main className="grid gap-y-[3.75rem] content-evenly relative pt-[3.75rem]">
        <div className="content-wrapper ">
          <h1 className="text-white text-center text-xl mb-5">
            {chapter.titleChapter}
          </h1>
          <div className="grid gap-4  sm:grid-cols-1 ">
            {chapter.chaptersSrc.map((item: string, index: number) => {
              return <img key={index} src={item} alt={index + ""} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chapter;
