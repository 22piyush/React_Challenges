import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import "animate.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
const API_KEY = "AIzaSyChN8wWqM9HJ6TFdKAWW4NMBeWLH-yxflQ";

function AIChatBot() {
  const [message, setMesage] = useState("");

  const createChat = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-9/12 mx-auto bg-white min-h-screen">
        <h1 className="text-3xl font-bold text-center">✈️ AI Chatbot</h1>
        <div className="p-8 ">
          <div className="flex flex-col gap-2 justify-start animate__animated animate__fadeIn">
            <small className="text-gray-500 font-medium animate__animated animate__fadeIn">
              Typing...
            </small>
            <div className="bg-rose-100  text-black font-medium px-4 py-3 rounded-xl w-fit">
              Hi, how are you
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end animate__animated animate__fadeIn">
            <small className="text-gray-500 text-sm  w-full font-medium text-right animate__animated animate__fadeIn">
              Typing...
            </small>
            <div className="bg-green-100  text-black font-medium px-4 py-3 rounded-xl w-fit">
              Hi, how are you
            </div>
          </div>
        </div>
        <div className="bg-indigo-600 p-8 fixed bottom-0 w-9/12">
          <form className="flex gap-4" onSubmit={createChat}>
            <input
              required
              type="text"
              className="bg-white rounded-xl p-6 w-full"
              placeholder="Chat with AI from here"
              onChange={(e) => setMesage(e.target.value.trim())}
            />
            <button className="bg-yellow-500 px-12 rounded-xl text-white flex flex-col items-center justify-center hover:bg-green-400 scale-0.5 transition-transform duration-300">
              <ExternalLink />
              Send
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AIChatBot;
