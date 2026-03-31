import React, { useEffect, useState } from "react";
import "animate.css";
import axios from "axios";
const API_KEY = "JnXRPk8wzzzgtmJYpdMIdFaU6tgpciZfwfpLWZjTVQTQcRhCB5bbG2dK";

function ImageFinder() {
  const [photos, setPhotos] = useState([]);
  const [count, setCount] = useState(12);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const fetchImage = async () => {
    setLoading(true);

    try {
      const options = {
        headers: {
          Authorization: API_KEY,
        },
      };
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=people&page=1&per_page=${count}`,
        options,
      );
      setPhotos(res.data.photos);
    } catch (err) {
      alert("Failed", err);
    } finally {
      setLoading(false);
    }
  };

  const result = input
    ? photos.filter((item) =>
        item.photographer?.toLowerCase().includes(input.toLowerCase()),
      )
    : photos;

  useEffect(() => {
    fetchImage();
  }, [count]);

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
        {result.map((item, index) => (
          <div key={index} className="bg-white rounded-xl">
            <img
              src={item.src.medium}
              alt={item.alt}
              className="rounded-lg h-[180px] object-cover w-full hover:scale-110 transition-transform duration-300"
            />
            <div className="p-3">
              <h1>{item.photographer}</h1>
              <a
                href={item.src.medium}
                download={`image-${index}.jpg`}
                className="mt-2 inline-block bg-gradient-to-tr from-violet-500 via-cyan-600 to-green-500 text-white px-4 py-1 rounded"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="absolute top-[50%] left-[50%]">Loading...</div>
      )}

      <div className="w-full flex justify-center">
        <button
          onClick={() => setCount(count + 12)}
          className="cursor-pointer mt-2 bg-gradient-to-tr from-violet-500 via-cyan-600 to-green-500 text-white px-4 py-1 rounded"
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default ImageFinder;
