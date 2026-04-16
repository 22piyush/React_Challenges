import React, { useState } from "react";
import Profile from "./Profile";
import Interest from "./Interest";
import Setting from "./Setting";
import "./tabForm.css";

function TabForm() {
  const [activeTab, setActiveTab] = useState(0);

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
      <div class="header">
        {tabs.map((item, index) => (
          <div key={index} class="header-text" onClick={()=>setActiveTab(index)}>
            {item.name}
          </div>
        ))}
      </div>
      <div class="header-text flex-1 mt-10">
        <ActiveTabComponent />
      </div>
    </div>
  );
}

export default TabForm;
