import React, { useEffect, useState } from "react";

function GradientGenerator() {
  const [num, setNum] = useState(12);
  const [type, setType] = useState("linear");
  const [gradients, setGradients] = useState([]);

  const positions = [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top left",
    "top right",
    "bottom left",
    "bottom right",
  ];

  const directions = [
    "to right",
    "to left",
    "to top",
    "to bottom",
    "to top right",
    "to bottom left",
  ];

  const getHexColorCode = () => {
    const random = Math.floor(Math.random() * 16777215);
    return `#${random.toString(16).padStart(6, "0")}`;
  };

  const generateGradients = () => {
    const colors = [];
    const count = Number(num) || 0;

    for (let i = 0; i < count; i++) {
      const color1 = getHexColorCode();
      const color2 = getHexColorCode();

      const position =
        positions[Math.floor(Math.random() * positions.length)];
      const direction =
        directions[Math.floor(Math.random() * directions.length)];

      const gradient =
        type === "linear"
          ? `linear-gradient(${direction}, ${color1}, ${color2})`
          : `radial-gradient(circle at ${position}, ${color1}, ${color2})`;

      // Tailwind (approx)
      const tailwind =
        type === "linear"
          ? `bg-gradient-to-r from-[${color1}] to-[${color2}]`
          : `bg-[radial-gradient(circle_at_${position.replace(
              " ",
              "_"
            )},${color1},${color2})]`;

      colors.push({
        gradient,
        css: `background: ${gradient};`,
        tailwind,
        color1,
        color2,
      });
    }

    setGradients(colors);
  };

  const onCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  useEffect(() => {
    generateGradients();
  }, [num, type]);

  return (
    <div className="min-h-screen bg-gray-200">
      <div className="w-9/12 mx-auto py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            🎨 Gradient Generator - {num}, {type}
          </h1>

          <div className="flex gap-4">
            <input
              type="number"
              className="border border-slate-300 bg-white rounded-lg w-[100px] p-2"
              value={num}
              onChange={(e) => setNum(e.target.value)}
              min="1"
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="border border-slate-300 bg-white rounded-lg p-2"
            >
              <option value="linear">Linear</option>
              <option value="radial">Radial</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10">
          {gradients.map((item, index) => (
            <div
              key={index}
              className="relative h-[180px] rounded-xl p-2 text-xs text-white"
              style={{ background: item.gradient }}
            >
              <div className="absolute top-2 left-2 bg-black/50 p-1 rounded">
                {item.color1} <br /> {item.color2}
              </div>

              <div className="absolute bottom-2 left-2 flex flex-col gap-1">
                <button
                  onClick={() => onCopy(item.css)}
                  className="bg-black/70 px-2 py-1 rounded"
                >
                  CSS
                </button>

                <button
                  onClick={() => onCopy(item.tailwind)}
                  className="bg-black/70 px-2 py-1 rounded"
                >
                  Tailwind
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradientGenerator;