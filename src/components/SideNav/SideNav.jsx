import React from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineFire,
  AiOutlineMessage,
  AiOutlineNotification,
  AiOutlinePlusCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    icon: <AiOutlineHome size={30} />,
    name: <span>Home</span>,
  },
  {
    id: 2,
    icon: <AiOutlineSearch size={30} />,
    name: <span>Search</span>,
  },
  {
    id: 3,
    icon: <AiOutlineCompass size={30} />,
    name: <span>Explore</span>,
  },
  {
    id: 4,
    icon: <AiOutlineFire size={30} />,
    name: <span>Reel</span>,
  },
  {
    id: 5,
    icon: <AiOutlineMessage size={30} />,
    name: <span>Message</span>,
  },
  {
    id: 6,
    icon: <AiOutlineNotification size={30} />,
    name: <span>Notification</span>,
  },
  {
    id: 7,
    icon: <AiOutlinePlusCircle size={30} />,
    name: <span>Create</span>,
  },
  {
    id: 8,
    icon: <AiOutlineUser size={30} />,
    name: <span>Profile</span>,
  },
];

const SideNav = () => {
  return (
    <>
      <main className="grid items-stretch justify-center h-screen p-5 border-r-2 bg-black">
        <div className="">
          <span className="font-accent text-5xl">musemeld</span>
        </div>
        <div className="h-[60vh] grid font-primary ">
          {links.map((data) => (
            <Link to={`/${data.name.props.children}`}>
              <div
                className="flex items-center gap-2 cursor-pointer"
                key={data.id}
              >
                <div>{data.icon}</div>
                <div>{data.name}</div>
              </div>
            </Link>
          ))}
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
