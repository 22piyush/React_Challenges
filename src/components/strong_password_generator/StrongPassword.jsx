import { Cannabis } from "lucide-react";
import React from "react";
import "animate.css";

function StrongPassword() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-900">
      <div className="flex flex-col items-center gap-3 animate__animated animated__pulse p-16 w-lg bg-white border border-white rounded-xl bg-gradient-to-tr from-slate-800 via-slate-600 to-slate-800">
        <Cannabis className="text-white w-12 h-12" />
        <h1 className="text-3xl font-bold text-white ">Password Generator</h1>
        <form className="w-full mt-6">
          <input
            placeholder="Enter password length"
            type="number"
            className="text-white focus:outline-none font-bold w-full bg-black/10 p-3 rounded-lg border border-white/20"
          />
        </form>
      </div>
    </div>
  );
}

export default StrongPassword;
