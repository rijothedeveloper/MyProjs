import React, { useContext, useState } from "react";
import { AppContext } from "../App";

const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState("");
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        {" "}
        Change
      </button>
    </div>
  );
};

export default ChangeProfile;
