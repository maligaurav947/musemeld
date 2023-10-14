import React, { useEffect } from "react";
import SideNav from "../../components/SideNav/SideNav";
import Profile from "./Profile";

const ProfileHome = () => {
  return (
    <div className="flex items-start justify-evenly">
      <div className="hidden lg:grid sticky left-0 top-0">
        <SideNav />
      </div>
      <div className="grid justify-center w-[95%]">
        <Profile />
      </div>
    </div>
  );
};

export default ProfileHome;
