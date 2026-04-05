import { ArrowBigDown, ArrowBigRight, Plus } from "lucide-react";
import React, { useState } from "react";

function ImageSizeFinder() {
  const [src, setSrc] = useState("/favicon.svg");
  const [original, setOriginal] = useState({
    height: 0,
    width: 0,
  });

  const [suggestedHeight, setSuggestedHeight] = useState(0);
  const [suggestedWidth, setSuggestedWidth] = useState(0);

  const findHeight = (e) => {
    e.preventDefault();
    const width = e.target.width.value;

    const height = (width * original.height) / original.width;
    setSuggestedHeight(Math.round(height));
  };

  const findWidth = (e) => {
    e.preventDefault();
    const height = e.target.height.value;

    const width = (height * original.width) / original.height;
    setSuggestedWidth(Math.round(width));
  };

  const closeImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = () => {
      const file = input.files[0];
      const url = URL.createObjectURL(file);
      setSrc(url);
      const image = new Image();
      image.src = url;
      image.onload = () => {
        console.log(image.width, image.height);
        setOriginal({
          height: image.height,
          width: image.width,
        });
      };
    };
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-9/12 mx-auto py-16">
        <button
          onClick={closeImage}
          className="w-fit bg-indigo-600 text-white font-medium px-16 py-3 rounded-lg flex items-center gap-1 hover:scale-105 transition-transform duration-300"
        >
          <Plus className="w-5 h-5 mr-1" /> Add Image
        </button>

        <div className="bg-white rounded--xl p-8 mt-10 flex justify-center">
          <img src={src} alt="image" className="w-[40%]" />
        </div>
        <div className="bg-white rounded--xl p-8 mt-10 grid grid-cols-2  justify-items-center">
          <div>
            <h1 className="mb-10 bg-rose-500 py-3 px-4 font-bold text-lg text-white w-fit">
              Height Finder
            </h1>
            <form onSubmit={findHeight}>
              <input
                required
                type="number"
                name="width"
                className="border border-gray-300 p-3 rounded"
                placeholder="Width"
              />
              <button className="mt-10 bg-indigo-600 text-white flex items-center gap-1 p-2 rounded ">
                <ArrowBigRight /> Find
              </button>
            </form>
            <h1 className="mt-4 text-xl font-bold">
              Height Suggestion: {suggestedHeight}
            </h1>
          </div>

          <div>
            <h1 className="mb-10 bg-green-500 py-3 px-4 font-bold text-lg text-white w-fit">
              Width Finder
            </h1>
            <form onSubmit={findWidth}>
              <input
                required
                type="number"
                name="height"
                className="border border-gray-300 p-3 rounded"
                placeholder="Height"
              />
              <button className="mt-10 bg-indigo-600 text-white flex items-center gap-1 p-2 rounded ">
                <ArrowBigRight /> Find
              </button>
            </form>
            <h1 className="mt-4 text-xl font-bold">
              Width Suggestion: {suggestedWidth}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSizeFinder;
