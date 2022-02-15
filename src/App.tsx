import { FC } from "react";
import Header from "./components/Header/Header";
import Carusel from "./components/Carusel/Carusel";
const App: FC = () => {
  return (
    <div className="bg-black w-full h-screen">
      <Header />
      <main className="">
        <Carusel />
      </main>
    </div>
  );
};

export default App;
