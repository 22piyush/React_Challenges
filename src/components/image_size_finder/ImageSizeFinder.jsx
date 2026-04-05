import { ArrowBigDown, ArrowBigRight, Plus } from "lucide-react";
import React, { useState } from "react";

function ImageSizeFinder() {
  const [src, setSrc] = useState("");
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
        setOriginal({
          height: image.height,
          width: image.width,
        });
      };
    };
  };

  const handleClear = () => {
    setSrc("");
    setOriginal({
      height: 0,
      width: 0,
    });
    setSuggestedHeight(0);
    setSuggestedWidth(0);
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

        <div className="bg-white rounded--xl p-8 mt-10 flex justify-center relative">
          {src ? (
            <img src={src} alt="image" className="w-[35%]" />
          ) : (
            <div className="flex flex-col items-center gap-10 w-full">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3747/3747120.png"
                className="w-[200px]"
              />
              <div className="text-xl">
                Click Add Image button to upload image
              </div>
            </div>
          )}

          <button
            onClick={handleClear}
            className="absolute top-[10px] right-[20px] bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium shadow-md transition-all duration-200"
          >
            Clear
          </button>
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
