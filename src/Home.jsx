import React from "react";
import { data } from "./config/data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-purple-500 to-purple-800 text-white p-6">
      <div className="sticky top-0 z-50 bg-gradient-to-r from-purple-500 to-purple-800 p-6 text-center">
        <h1 className="text-4xl font-semibold">React Challenges</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Title */}
            <h2 className="text-lg font-semibold mb-4">{item.title}</h2>

            {/* Bottom Right Link */}
            <div className="flex justify-end">
              <Link
                to={`/${item.id}`}
                className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-fuchsia-500 hover:to-violet-500 transition-all duration-300"
              >
                Open →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
