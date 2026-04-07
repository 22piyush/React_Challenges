import { ArrowRight, Cannabis, Copy } from "lucide-react";
import React, { use, useState } from "react";
import "animate.css";

function StrongPassword() {
  const [password, setPassword] = useState("");

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  const pattern = upper + symbols + numbers + lower  ;

  const generatePassword = (e) => {
    e.preventDefault();

    let p = "";

    const len = e.target[0].value;
    const patternLength = pattern.length - 1;

    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * patternLength);
      p = p + pattern[randomIndex];
    }

    setPassword(p);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900">
      <div className="flex flex-col items-center gap-3 animate__animated animated__pulse p-16 w-lg bg-white border border-white rounded-xl bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-800">
        <Cannabis className="text-white w-12 h-12" />
        <h1 className="text-3xl font-bold text-white ">Password Generator</h1>
        <form className="w-full mt-6" onSubmit={generatePassword}>
          <input
            placeholder="Enter password length"
            type="number"
            className="text-white focus:outline-white font-bold w-full bg-black/10 p-3 rounded-lg border border-white/20"
          />
          <button className="bg-slate-600 border hover:scale-105 duration-300 border-white font-medium text-white rounded-lg flex items-center py-3 px-8 mt-5">
            <ArrowRight /> Generate strong password
          </button>
        </form>
        {password !== "" && (
          <div className="p-3 rounded-lg bg-black/20 text-white w-full flex items-center justify-between mt-5">
            <p>{password}</p>
            <Copy className="w-4 h-4 hover:scale-115 duration-300 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
}

export default StrongPassword;
