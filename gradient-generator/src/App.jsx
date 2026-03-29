import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  const [gradients, setGradient] = useState([]);

  const generateGradients = () => {
    const colors = [];

    for (let i = 0; i < num; i++) {
      const color1 = getHexColorCode();
      const color2 = getHexColorCode();
      const degree = Math.floor(Math.random() * 360);
      const degreeString = `${degree}deg`;
      colors.push({
        gradient: `linear-gradient(${degreeString}, ${color1}, ${color2})`,
        css: `background: linear-gradient(${degreeString}, ${color1}, ${color2})`,
      });
    }

    setGradient(colors);
  };

  const onCopy = (css) => {
    navigator.clipboard.writeText(css);
    alert("Color Copied Successfully");
  };

  useEffect(() => {
    generateGradients();
  }, [num]);

  const getHexColorCode = () => {
    const rgb = 255 * 255 * 255;
    const random = Math.floor(Math.random() * rgb);
    const hexCode = random.toString(16);
    const colorHex = hexCode.padStart(6, "0");
    console.log(colorHex);
    return `#${colorHex}`;
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="w-9/12 mx-auto py-5">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">
            🎨 Gradient Generator - {num} , {type}
          </h1>
          <div className="flex gap-4">
            <input
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
              placeholder="12"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-15">
          {gradients.map((item, index) => (
            <div
              key={index}
              className="relative h-[180px] rounded-xl"
              style={{ background: getHexColorCode() }}
            >
              <button
                onClick={() => onCopy(item.css)}
                className="bg-black/75 text-white rounded absolute bottom-3 right-3 text-[10px] px-3 py-2 cursor-pointer "
              >
                COPY
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
