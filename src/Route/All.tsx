import { FC, useLayoutEffect } from "react";
import Header from "../components/Header/Header";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";
import AllShow from "../components/AllShows/AllShows";

const All: FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="bg-black w-full h-full">
      <Header />
      <main className="grid gap-y-[3.75rem] content-evenly relative pt-[3.75rem]">
        <div className="main-content grid gap-y-[2.5rem]">
          <AllShow></AllShow>
          <News />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default All;
