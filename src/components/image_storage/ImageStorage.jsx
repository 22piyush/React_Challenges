import { Upload } from "lucide-react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useImageStore } from "./store";

const FIVE_MB = 5 * 1024 * 1024;

function ImageStorage() {
  const { images, setImages } = useImageStore();

  const chooseFile = (e) => {
    const input = e.target;
    const file = input.files[0];

    if (!file.type.startsWith("image/"))
      return toast.error("Please select an image file", {
        position: "top-center",
      });

    if (file.size > FIVE_MB)
      return toast.error("File Size to large", {
        position: "top-center",
      });

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      console.log(fileReader.result);
      setImages({
        id: Date.now(),
        name: file.name,
        size: file.size,
        binary: fileReader.result,
        createdAt: new Date(),
      });
    };
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-9/12 mx-auto py-10 space-y-8">
        <h1 className="text-4xl font-bold text-center">Image Storage</h1>
        <div className=" mx-auto w-8/12 hover:scale-115 transition-transform duration-300 hover:shadow-lg cursor-pointer text-white flex flex-col items-center gap-3  p-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 rounded-xl">
          <Upload className="w-16 h-16" />
          <h1 className="text-xl font-medium">Click me to add an image</h1>
          <input
            type="file"
            className="cursor-pointer absolute top-0 left-0 opacity-0 w-full h-full rounded-xl"
            onChange={chooseFile}
          />
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default ImageStorage;
