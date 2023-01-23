import React, { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "./ChangeProfile";

const Profile = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile of {username} <ChangeProfile />
    </div>
  );
};

export default Profile;
