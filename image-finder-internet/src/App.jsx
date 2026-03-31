import React from "react";
import "animate.css";

function App() {
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
        {Array(24)
          .fill(0)
          .map((item, index) => {
            <div key={index} className="bg-white rounded-xl p-12"></div>;
          })}
      </div>
    </div>
  );
}

export default App;
