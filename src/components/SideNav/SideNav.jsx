import React from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineFire,
  AiOutlineMessage,
  AiOutlinePlusCircle,
  AiOutlineUser,
  AiOutlineBell,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { auth } from "./../../data/firebase";

const SideNav = () => {
  return (
    <>
      <main className="grid items-stretch justify-center h-screen p-5 border-r-2 bg-black">
        <div className="">
          <span className="font-accent text-5xl">musemeld</span>
        </div>
        <div className="h-[60vh] grid font-primary ">
          <Link to="/Home" className="flex items-center gap-2 cursor-pointer">
            <div>
              <AiOutlineHome size={30} />
            </div>
            <div>
              <span>Home</span>
            </div>
          </Link>
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              <AiOutlineSearch size={30} />
            </div>
            <div>
              <span>Search</span>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              <AiOutlineCompass size={30} />
            </div>
            <div>
              <span>Explore</span>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              <AiOutlineFire size={30} />
            </div>
            <div>
              <span>Reel</span>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              <AiOutlineMessage size={30} />
            </div>
            <div>
              <span>Message</span>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              <AiOutlineBell size={30} />
            </div>
            <div>
              <span>Notification</span>
            </div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div>
              <AiOutlinePlusCircle size={30} />
            </div>
            <div>
              <span>Create</span>
            </div>
          </div>
          <Link
            to={`/Profile/${auth?.currentUser?.uid}`}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div>
              <AiOutlineUser size={30} />
            </div>
            <div>
              <span>Profile</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2 font-primary">
          <img
            src="https://avatars.githubusercontent.com/u/86152880?v=4"
            alt=""
            className="h-[30px] w-[30px] rounded-full"
          />
          <span>More</span>
        </div>
      </main>
    </>
  );
};

export default SideNav;
