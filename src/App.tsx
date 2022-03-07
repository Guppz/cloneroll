import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Route/Home";
import All from "./Route/All";
import Manga from "./Route/Manga";
import Chapters from "./Route/Chapter";
const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<All />} />
          <Route path="/manga/:id" element={<Manga />} />
          <Route path="/manga/:id/chapters/:id" element={<Chapters />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
