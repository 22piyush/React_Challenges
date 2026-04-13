import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ImageFinder from "./components/ImageFinder";
import GradientFenerator from "./components/GradientFenerator";
import AvatarImageGenerator from "./components/AvatarImageGenerator";
import YoutubeThumbnailer from "./components/YoutubeThumbnailer";
import TaskPlanner from "./components/task_planner/TaskPlanner";
import FAQ from "./components/faq_component/FAQ";
import ImageSizeFinder from "./components/image_size_finder/ImageSizeFinder";
import ExportCSV from "./components/export_csv/ExportCSV";
import StrongPassword from "./components/strong_password_generator/StrongPassword";
import ImageStorage from "./components/image_storage/ImageStorage";
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
        <Route path="/faq-component" element={<FAQ />} />
        <Route path="/image-size-finder" element={<ImageSizeFinder />} />
        <Route path="/export_csv" element={<ExportCSV />} />
        <Route path="/strong_password_generator" element={<StrongPassword />} />
        <Route path="/image_storage" element={<ImageStorage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
