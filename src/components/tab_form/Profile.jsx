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
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          className=""
          value={name}
          onChange={(e) => handleDataChange(e, "name")}
        />
      </div>
      <div>
        <label>Emai: </label>
        <input
          type="text"
          className=""
          value={email}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="text"
          className=""
          value={age}
          onChange={(e) => handleDataChange(e, "email")}
        />
      </div>
    </div>
  );
}

export default Profile;
