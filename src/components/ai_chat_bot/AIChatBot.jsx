import { ExternalLink } from "lucide-react";
import React, { useState } from "react";
import "animate.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const API_KEY = "";

function AIChatBot() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const createChat = async (e) => {
    e.preventDefault();

    if (!message) return;

    const userMessage = {
      role: "user",
      text: message,
    };

    // Add user message
    setChats((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: userMessage.text }],
            },
          ],
        },
      );

      const aiText =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response";

      const aiMessage = {
        role: "ai",
        text: aiText,
      };

      setChats((prev) => [...prev, aiMessage]);
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="w-9/12 mx-auto bg-white min-h-screen flex flex-col">
        <h1 className="text-3xl font-bold text-center py-4">✈️ AI Chatbot</h1>

        {/* Chat Area */}
        <div className="flex-1 p-8 overflow-y-auto flex flex-col gap-4">
          {chats.map((chat, index) => (
            <div
              key={index}
              className={`flex flex-col gap-1 ${
                chat.role === "user" ? "items-end" : "items-start"
              } animate__animated animate__fadeIn`}
            >
              <small className="text-gray-500 text-sm">
                {chat.role === "user" ? "You" : "AI"}
              </small>

              <div
                className={`px-4 py-3 rounded-xl w-fit max-w-[70%] ${
                  chat.role === "user" ? "bg-green-100" : "bg-rose-100"
                }`}
              >
                {chat.text}
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {loading && (
            <div className="flex flex-col gap-1 items-start animate__animated animate__fadeIn">
              <small className="text-gray-500 text-sm">AI</small>
              <div className="bg-rose-100 px-4 py-3 rounded-xl w-fit">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="bg-indigo-600 p-6">
          <form className="flex gap-4" onSubmit={createChat}>
            <input
              value={message}
              type="text"
              className="bg-white rounded-xl p-4 w-full"
              placeholder="Chat with AI..."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="bg-yellow-500 px-6 rounded-xl text-white flex items-center justify-center hover:bg-green-400 transition">
              <ExternalLink />
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AIChatBot;
