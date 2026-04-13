import { Upload } from "lucide-react";
import React from "react";

function ImageStorage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-9/12 mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold text-center">Image Storage</h1>
        <div className="text-white flex flex-col items-center gap-3  p-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 rounded-xl">
          <Upload className="w-16 h-16" />
          <h1 className="text-xl font-medium">Click me to add an image</h1>
        </div>
      </div>
    </div>
  );
}

export default ImageStorage;
