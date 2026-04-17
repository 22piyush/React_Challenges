import React from "react";

function Interest({ data, setData }) {
  const { interests } = data;

  const handleChange = (e) => {
    const { name, checked } = e.target;

    let updatedInterests;

    if (checked) {
      updatedInterests = [...interests, name];
    } else {
      updatedInterests = interests.filter((item) => item !== name);
    }

    setData({
      ...data,
      interests: updatedInterests,
    });
  };

  return (
    <div>
      <div>
        <label>Coding: </label>
        <input
          type="checkbox"
          name="coding"
          onChange={handleChange}
          checked={interests.includes("coding")} 
        />
      </div>

      <div>
        <label>Music: </label>
        <input
          type="checkbox"
          name="music"
          onChange={handleChange}
          checked={interests.includes("music")}   
        />
      </div>
    </div>
  );
}

export default Interest;