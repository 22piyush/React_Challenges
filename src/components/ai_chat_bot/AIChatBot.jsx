import { ExternalLink } from "lucide-react";
import React from "react";

function AIChatBot() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-9/12 mx-auto bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-center">✈️ AI Chatbot</h1>
        <div className="p-8">
          <div className="flex justify-start">
            <div className="bg-rose-100  text-black font-medium px-4 py-3 rounded-xl w-fit">
              Hi, how are you
            </div>
          </div>
        </div>
        <div className="bg-indigo-600 p-8 fixed bottom-0 w-9/12">
          <form className="flex gap-4 ">
            <input
              required
              type="text"
              className="bg-white rounded-xl p-6 w-full"
              placeholder="Chat with AI from here"
            />
            <button className="bg-yellow-500 px-12 rounded-xl text-white flex flex-col items-center justify-center hover:bg-green-400 scale-0.5 transition-transform duration-300">
              <ExternalLink />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AIChatBot;
