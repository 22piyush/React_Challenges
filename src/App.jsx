import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ImageFinder from "./components/ImageFinder";
import GradientFenerator from "./components/GradientFenerator";
import AvatarImageGenerator from "./components/AvatarImageGenerator";
import YoutubeThumbnailer from "./components/YoutubeThumbnailer";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/image-finder" element={<ImageFinder />} />{" "}
        <Route path="/gradient-generator" element={<GradientFenerator />} />{" "}
        <Route
          path="/avatar-image-generator"
          element={<AvatarImageGenerator />}
        />{" "}
        <Route
          path="/youtube-thumbnail"
          element={<YoutubeThumbnailer />}
        />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
export default App;
