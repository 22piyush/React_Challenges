import React from "react";

function Profile({ data, setData }) {
  const { name, email, age } = data;

  const handleDataChange = (e, item) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full h-full">
        <div>
          <label>Name: </label>
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => handleDataChange(e, "name")}
          />
        </div>
        <div>
          <label>Emai: </label>
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => handleDataChange(e, "email")}
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="text"
            className="input"
            value={age}
            onChange={(e) => handleDataChange(e, "email")}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
