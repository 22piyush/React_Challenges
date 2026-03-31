import React from "react";
import { data } from "./config/data";

function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-500 to-purple-800 text-white">
      <div className="grid md:grid-cols-5 gap-3">
        {data.map((item, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
}

export default Home;
