import React, { useState } from "react";

function FAQ() {
  const FAQ = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live?",
      answer:
        "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    },
  ];

  const [rotate, setRotate] = useState(null);

  const handleClick = (index) => {
    setRotate(rotate === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col items-center justify-center px-4 py-10">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Frequently Asked Questions
      </h1>

      {/* FAQ List */}
      <div className="w-full max-w-2xl space-y-4">
        {FAQ.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            
            {/* Question */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <p className="text-white font-medium text-lg">
                {item.question}
              </p>

              <img
                src="https://www.iconpacks.net/icons/2/free-right-arrow-icon-3094-thumb.png"
                alt="arrow"
                className={`h-5 w-5 transition-transform duration-300 ${
                  rotate === index ? "rotate-90" : ""
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                rotate === index
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;