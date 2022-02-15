import { FC } from "react";
import Header from "./components/Header/Header";
import ImageSlider from "./components/Carusel/ImageSlider";
const App: FC = () => {
  return (
    <div className="bg-black w-full h-screen">
      <Header />
      <main className="">
        <ImageSlider />
      </main>
    </div>
  );
};

export default App;
