import React from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
import "./tabForm.css";

function TabForm() {
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

  return (
    <div className="min-h-screen bg-slate-200">
      {tabs.map((item, index) => (
        <div key={index} class="header">
          <div class="header-text">{item.name}</div>
        </div>
      ))}
    </div>
  );
}

export default TabForm;
