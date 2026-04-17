import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
import "./tabForm.css";

function TabForm() {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Piyush",
    age: "23",
    email: "piyush@1234",
    interests: ["code", "debug"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Setting",
      component: Setting,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  return (
    <div className="min-h-screen p-10 bg-slate-200 flex flex-col">
      <div className="header">
        {tabs.map((item, index) => (
          <div
            key={index}
            className={`header-text ${index === activeTab ? "bg-amber-500" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="header-text flex-1 mt-10">
        <div className="h-full w-full">
          <ActiveTabComponent data={data} setData={setData} />
        </div>
      </div>
      <div className="w-full flex gap-4 justify-center mt-5">
        <button className="header-text">Prev</button>
        <button className="header-text">Next</button>
      </div>
    </div>
  );
}

export default TabForm;
