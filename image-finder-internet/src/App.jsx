import React, { useEffect, useState } from "react";
import "animate.css";
import axios from "axios";
const API_KEY = "JnXRPk8wzzzgtmJYpdMIdFaU6tgpciZfwfpLWZjTVQTQcRhCB5bbG2dK";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImage = async () => {
    setLoading(true);

    try {
      const options = {
        headers: {
          Authorization: API_KEY,
        },
      };
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=people&page=1&per_page=12`,
        options,
      );
      console.log(res);
      setPhotos(res.data.photos);
    } catch (err) {
      alert("Failed", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8 gap-12 animate__animated animate__fadeIn">
      <h1 className="text-4xl font-bold text-indigo-600">📷 Image Gallery</h1>

      <form>
        <input
          type="text"
          className="focus:outline-indigo-600 border border-gray-200 p-2 bg-white rounded-l-lg"
          placeholder="Serach image here"
        />
        <button className="cursor-pointer rounded-r-lg px-4 text-white font-bold py-2 bg-gradient-to-br from-indigo-600 via-blue-500 to-indigo-600">
          Search
        </button>
      </form>

      <div className="grid lg:grid-cols-4 lg:gap-12 gap-8 w-9/12">
        {photos.map((item, index) => (
          <div key={index} className="bg-white rounded-xl">
            <img
              src={item.src.medium}
              alt={item.alt}
              className="rounded-lg h-[180px] object-cover w-full hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {loading && (
        <div className="absolute top-[50%] left-[50%]">Loading...</div>
      )}
    </div>
  );
}

export default App;
