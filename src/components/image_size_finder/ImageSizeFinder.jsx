import { ArrowBigDown, ArrowBigRight, Plus } from "lucide-react";
import React, { useState } from "react";

function ImageSizeFinder() {
  const [src, setSrc] = useState("/favicon.svg");

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
            <form>
              <input
                type="number"
                name="width"
                className="border border-gray-300 p-3 rounded"
                placeholder="Width"
              />
              <button className="mt-10 bg-indigo-600 text-white flex items-center gap-1 p-2 rounded ">
                <ArrowBigRight /> Find
              </button>
            </form>
            <h1 className="mt-4 text-xl font-bold">Height Suggestion: </h1>
          </div>

          <div>
            <h1 className="mb-10 bg-green-500 py-3 px-4 font-bold text-lg text-white w-fit">
              Width Finder
            </h1>
            <form>
              <input
                type="number"
                name="width"
                className="border border-gray-300 p-3 rounded"
                placeholder="Width"
              />
              <button className="mt-10 bg-indigo-600 text-white flex items-center gap-1 p-2 rounded ">
                <ArrowBigRight /> Find
              </button>
            </form>
            <h1 className="mt-4 text-xl font-bold">Width Suggestion: </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSizeFinder;
