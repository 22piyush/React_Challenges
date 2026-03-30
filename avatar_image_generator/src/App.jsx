import React, { useEffect, useState } from "react";
import "animate.css";

const data = [
  {
    label: "Illustration",
    value: "avataars",
    url: "https://api.dicebear.com/7.x/avataars/svg?speed=",
  },
  {
    label: "Sketchy",
    value: "croodles",
    url: "https://api.dicebear.com/7.x/croodles/svg?speed=",
  },
  {
    label: "Cartoon",
    value: "adventurer",
    url: "https://api.dicebear.com/7.x/adventurer/svg?speed=",
  },
  {
    label: "Male",
    value: "male",
    url: "https://api.dicebear.com/7.x/adventurer/svg?gender=male&speed=",
  },
  {
    label: "Female",
    value: "female",
    url: "https://api.dicebear.com/7.x/adventurer/svg?gender=female&speed=",
  },
  {
    label: "Robots",
    value: "robots",
    url: "https://api.dicebear.com/7.x/bottts/svg?speed=",
  },
  {
    label: "Pixel Art",
    value: "pixel",
    url: "https://api.dicebear.com/7.x/pixel-art/svg?speed=",
  },
  {
    label: "Fun Emoji",
    value: "emoji",
    url: "https://api.dicebear.com/7.x/fun-emoji/svg?speed=",
  },
  {
    label: "Art (Abstract)",
    value: "art",
    url: "https://api.dicebear.com/7.x/shapes/svg?speed=",
  },
];

function App() {
  const [src, setSrc] = useState(null);
  const [option, setOption] = useState("male");

  const geneRandomHundred = () => {
    return Math.floor(Math.random() * 99) + 1;
  };

  const generateAssets = () => {
    const findOption = data.find((val) => val.value == option);
    const url = findOption.url;

    if (option == "male" || option == "female") {
      const imgUrl = `${url}/${geneRandomHundred()}.jpg`;
      setSrc(imgUrl);
    } else {
      const uniqueValue = Date.now();
      const imageUrl = `${url}${uniqueValue}`;
      setSrc(imageUrl);
    }
  };

  const onOptionChange = (e) => {
    const value = e.target.value;
    setOption(value);
  };

  const download = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = `${Date.now()}.jpg`;
    a.click();
    a.remove();
  };

  useEffect(() => {
    generateAssets();
  }, [option]);

  return (
    <div className="animate__animated animate__fadeIn overflow-hidden min-h-screen text-white flex items-center justify-center bg-gradient-to-br from bg-slate-900 via-slate-800 to-slate-900">
      <div className="animate__animated animate__bounceIn w-full max-w-md flex flex-col items-center rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10">
        <img
          src={
            src ??
            "https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_incoming&w=740&q=80"
          }
          className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
        />

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">Avatar Generator</h1>
          <p className="text-slate-300 ">
            Generate unlimited avatars for your website
          </p>
        </div>

        <div className="w-full mt-10 flex flex-col gap-5">
          <select
            className="bg-slate-900/60 w-full p-3 rounded-xl"
            value={option}
            onChange={onOptionChange}
          >
            {data.map((item, index) => (
              <option key={index} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>

          <div className="bg-slate-900/60 w-full p-3 rounded-xl">{src}</div>
        </div>

        <div className="w-full mt-5 flex gap-4">
          <button
            onClick={generateAssets}
            className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 cursor-pointer hover:scale-105 transition-transform"
          >
            Change
          </button>

          <button
            onClick={() => download(src)}
            className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 cursor-pointer hover:scale-105 transition-transform"
          >
            Download
          </button>

          <button
            onClick={() => {
              navigator.clipboard.writeText(src);
              alert("Copied!");
            }}
            className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 cursor-pointer hover:scale-105 transition-transform"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
