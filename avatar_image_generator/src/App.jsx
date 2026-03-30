import React from "react";
import 'animate.css';

function App() {
  return (
    <div className="animate__animated animate__fadeIn overflow-hidden min-h-screen text-white flex items-center justify-center bg-gradient-to-br from bg-slate-900 via-slate-800 to-slate-900">
      <div className="animate__animated animate__bounceIn w-full max-w-md flex flex-col items-center rounded-2xl shadow-xl backdrop-blur-xl border border-slate-700 p-10">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_incoming&w=740&q=80"
          className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"
        />

        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-wide">Avatar Generator</h1>
          <p className="text-slate-300 ">
            Generate unlimited avatars for your website
          </p>
        </div>

        <div className="w-full mt-10 flex flex-col gap-5">
          <select className="bg-slate-900/60 w-full p-3 rounded-xl">
            <option>Male</option>
          </select>

          <div className="bg-slate-900/60 w-full p-3 rounded-xl">coing ott</div>
        </div>

        <div className="w-full mt-5 flex gap-4">
          <button className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 cursor-pointer hover:scale-105 transition-transform">
            Change
          </button>

          <button className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 cursor-pointer hover:scale-105 transition-transform">
            Download
          </button>

          <button className="flex-1 bg-gradient-to-r from-rose-500 to-orange-600 font-medium rounded-lg py-2 cursor-pointer hover:scale-105 transition-transform">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
