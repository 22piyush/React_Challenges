import { ArrowRight, Cannabis, Copy } from "lucide-react";
import React, { useState } from "react";
import "animate.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function StrongPassword() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState("");

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  const pattern = upper + lower + numbers + symbols;

  const generatePassword = (e) => {
    e.preventDefault();

    if (!length || length <= 0) {
      toast.error("Enter valid length!");
      return;
    }

    if (length > 30) {
      toast.error("Max length is 30!");
      return;
    }

    let p = "";
    const len = Number(length);
    const patternLength = pattern.length;

    for (let i = 0; i < len; i++) {
      const randomIndex = Math.floor(Math.random() * patternLength);
      p += pattern[randomIndex];
    }

    setPassword(p);
  };

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    toast.success("Password Copied!");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900">
      <div className="flex flex-col items-center gap-3 animate__animated animate__pulse p-16 w-lg border border-white rounded-xl bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-800">
        <Cannabis className="text-white w-12 h-12" />
        <h1 className="text-3xl font-bold text-white">Password Generator</h1>

        <form className="w-full mt-6" onSubmit={generatePassword}>
          <input
            value={length}
            onChange={(e) => setLength(e.target.value)}
            placeholder="Enter password length"
            type="number"
            className="text-white focus:outline-white font-bold w-full bg-black/10 p-3 rounded-lg border border-white/20"
          />

          <button className="bg-slate-600 border hover:scale-105 duration-300 border-white font-medium text-white rounded-lg flex items-center py-3 px-8 mt-5">
            <ArrowRight /> Generate strong password
          </button>
        </form>

        {password && (
          <div className="p-3 rounded-lg bg-black/20 text-white w-full flex items-center justify-between mt-5">
            <p className="break-all">{password}</p>
            <Copy
              onClick={copyPassword}
              className="w-4 h-4 hover:scale-110 duration-300 cursor-pointer"
            />
          </div>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default StrongPassword;
