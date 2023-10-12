import React, { useEffect } from "react";
import SideNav from "../../components/SideNav/SideNav";
import Profile from "./Profile";

const ProfileHome = (props) => {
  useEffect(() => {
    document.title = `${props.name}`;
  });
  return (
    <div className="flex items-start justify-evenly">
      <div className="sticky left-0 top-0">
        <SideNav />
      </div>
      <div className="grid justify-center w-[95%]">
        <Profile name={props.name} />
      </div>
    </div>
  );
};

export default ProfileHome;
