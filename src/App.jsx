import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ImageFinder from "./components/ImageFinder";
import GradientFenerator from "./components/GradientFenerator";
import AvatarImageGenerator from "./components/AvatarImageGenerator";
import YoutubeThumbnailer from "./components/YoutubeThumbnailer";
import TaskPlanner from "./components/task_planner/TaskPlanner";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-finder" element={<ImageFinder />} />
        <Route path="/gradient-generator" element={<GradientFenerator />} />
        <Route path="/avatar-image-generator" element={<AvatarImageGenerator />}/>
        <Route path="/youtube-thumbnail" element={<YoutubeThumbnailer />} />
         <Route path="/task-planner" element={<TaskPlanner />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
