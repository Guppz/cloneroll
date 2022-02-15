import { FC } from "react";
import Header from "./components/Header/Header";
import ImageSlider from "./components/Carusel/ImageSlider";
import Hero from "./components/Hero/Hero";
import ShowContainer from "./components/ShowContainer/ShowContainer";
const App: FC = () => {
  return (
    <div className="bg-black w-full h-full">
      <Header />
      <main className="grid gap-y-[3.75rem] content-evenly relative">
        <ImageSlider />
        <div className="main-content grid gap-y-[2.5rem]">
          <Hero img="https://static.crunchyroll.com/fms/desktop_large/1050x350/7c8efe6d-980c-468a-8172-93587c549a77.png" />
          <ShowContainer
            title="Time to CRY"
            suvText=" Ah, it looks like it started to rain."
          />
        </div>
      </main>
    </div>
  );
};

export default App;
