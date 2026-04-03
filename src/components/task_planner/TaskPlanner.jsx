import React, { useEffect, useState } from "react";
import "animate.css";
import { DatePicker, Select } from "antd";
const { Option } = Select;
import { Plus } from "lucide-react";
import AddTaskComponent from "./AddTaskComponent";
import CardComponent from "./CardComponent";

function TaskPlanner() {
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  const createTask = (value) => {
    console.log(value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <nav className="text-white bg-gradient-to-r from-rose-500 via-slate-800 to-slate-900 bg-white h-[60px] fixed top-0 left-0 w-full flex justify-between items-center px-8">
        <div>
          <button className="rounded-full h-10 w-10 bg-blue-600 font-bold text-white ">
            PL
          </button>
          <span className="text-xl font-bold ml-1">anner</span>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-xl font-bold lg:block ">{timer}</h1>
          <DatePicker />
          <button
            onClick={() => setOpen(true)}
            className="focus:shadow-lg hover:scale-105 transition-translate cursor-pointer duration-300 bg-gradient-to-br from-blue-600 via-violet-500 to-blue-600 text-white flex items-center gap-1 font-medium rounded-lg px-3 py-1 text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>
      </nav>

      <CardComponent />

      <footer className="text-white bg-gradient-to-r from-rose-500 via-slate-800 to-slate-900 bg-white px-8 h-[60px] fixed bottom-0 left-0 w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">Total Task - 22</h1>
        <p className="text-white-500 hover:text-white-900 cursor-pointer">
          Task Planner
        </p>
      </footer>

      <AddTaskComponent
        handleClose={handleClose}
        createTask={createTask}
        open={open}
      />
    </div>
  );
}

export default TaskPlanner;
