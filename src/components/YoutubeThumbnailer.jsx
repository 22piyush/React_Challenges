import React, { useState } from "react";
import "animate.css";
import getYoutubeId from "get-youtube-id";
import { ToastContainer, toast } from "react-toastify";

function YoutubeThumbnailer() {

  const urlModel = [
    {
      width: 120,
      height: 90,
      url: "https://www.youtube.com/vi",
      filename: "default.jpg",
    },
    {
      width: 320,
      height: 180,
      url: "https://www.youtube.com/vi",
      filename: "mqdefault.jpg",
    },
    {
      width: 480,
      height: 360,
      url: "https://www.youtube.com/vi",
      filename: "hqdefault.jpg",
    },
    {
      width: 640,
      height: 480,
      url: "https://www.youtube.com/vi",
      filename: "sddefault.jpg",
    },
    {
      width: 1280,
      height: 720,
      url: "https://www.youtube.com/vi",
      filename: "maxresdefault.jpg",
    }, // ✅ fixed
  ];

  const [input, setInput] = useState("");
  const [thumbnail, setThumbnail] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchThumbnail = (e) => {
    e.preventDefault();

    const videoID = getYoutubeId(input);

    if (!videoID) {
      toast.error("Invalid YouTube URL ❌");
      return;
    }

    setLoading(true);

    const model = urlModel.map((item) => ({
      ...item,
      url: `${item.url}/${videoID}/${item.filename}`,
    }));

    setThumbnail(model);
    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8 gap-12 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold text-indigo-600">
        📷 Youtube Image Thumbnailer
      </h1>

      <form onSubmit={fetchThumbnail}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="focus:outline-indigo-600 border border-gray-200 p-2 bg-white rounded-l-lg"
          placeholder="Paste YouTube URL"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-r-lg px-4 text-white font-bold py-2 bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600"
        >
          Get Thumbnails
        </button>
      </form>

      {/* Loading */}
      {loading && (
        <div className="text-lg font-semibold text-gray-600">Loading...</div>
      )}

      {/* Thumbnails */}
      <div className="grid md:grid-cols-4 lg:gap-12 gap-8 w-9/12">
        {thumbnail.map((item, index) => (
          <div className="bg-white rounded-lg p-4 shadow" key={index}>
            <img
              src={item.url}
              alt={`thumbnail-${item.width}`}
              className="w-full h-[200px] object-cover"
              onError={(e) => {
                e.target.onerror = null; // ✅ prevent infinite loop
                e.target.src = "https://picsum.photos/300/200";
              }}
            />

            <p className="text-sm text-center mt-2">
              {item.width} x {item.height}
            </p>
          </div>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
}

export default YoutubeThumbnailer;
