import React, { useEffect, useState } from "react";
import "animate.css";
import axios from "axios";

function YoutubeThumbnailer() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8 gap-12 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold text-indigo-600">📷 Image Gallery</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="focus:outline-indigo-600 border border-gray-200 p-2 bg-white rounded-l-lg"
          placeholder="Serach image here"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-r-lg px-4 text-white font-bold py-2 bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600"
        >
          Search
        </button>
      </form>

      <div className="grid md:grid-cols-4 lg:gap-12 gap-8 w-9/12">

      </div>

      {loading && (
        <div className="absolute top-[50%] left-[50%]">Loading...</div>
      )}

    </div>
  );
}

export default YoutubeThumbnailer;
