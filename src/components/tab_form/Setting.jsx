import React from "react";

function Setting({ data, setData }) {
  const { theme } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      theme: e.target.value,
    });
  };

  return (
    <div>
      <h3>Select Theme</h3>

      <div>
        <label>Light</label>
        <input
          type="radio"
          name="theme"
          value="light"
          checked={theme === "light"}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Dark</label>
        <input
          type="radio"
          name="theme"
          value="dark"
          checked={theme === "dark"}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Setting;