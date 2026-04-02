import React from "react";

function TaskPlanner() {
  return (
    <div className="bg-gray-200 h-screen overflow-hidden">
      <nav className="bg-white h-[60px] fixed top-0 left-0 w-full">

      </nav>

      <section className="h-[calc(100%-120px)] bg-red-500 fixed top-0 left-0 h-[500px] w-full mt-[60px] overflow-x-auto">
        <div className="m-16 h-[350px] bg-yellow-500 w-[4000px]">

        </div>
      </section>

      <footer className="bg-white h-[60px] fixed bottom-0 left-0 w-full">

      </footer>
    </div>
  );
}

export default TaskPlanner;
