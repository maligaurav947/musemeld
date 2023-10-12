import React from "react";
import { AiOutlineLink } from "react-icons/ai";
import { auth } from "../../data/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = ({ name }) => {
  const nav = useNavigate();
  const logOut = async () => {
    try {
      await setTimeout(() => {
        signOut(auth).then(() => {
          nav("/signin");
        });
        toast.success("You Have Successfully Logout");
      }, 2000);
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="flex flex-col gap-10 py-6">
      <div>
        <div className="flex items-center gap-5">
          <img
            src="https://w0.peakpx.com/wallpaper/107/46/HD-wallpaper-best-pose-for-profile-for-men-profile-pose-men-best-glasses.jpg"
            alt=""
            className="rounded-full h-[150px] w-[150px]"
          />
          <div className="grid gap-2">
            <div className="flex items-center gap-5 flex-wrap">
              <div className="text-center font-secondary text-2xl">
                <span>{name}</span>
              </div>
              <div className="btn-group flex gap-2 font-primary">
                <div>
                  <button className="btn bg-[#262626]">Edit Profile</button>
                </div>
                <div>
                  <button className="btn bg-[#262626]">View Archive</button>
                </div>
                <div>
                  <button className="btn bg-[#262626]" onClick={logOut}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 font-secondary text-xl flex-wrap">
              <div className="flex gap-2">
                <span>252</span>
                <span>Posts</span>
              </div>
              <div className="flex gap-2">
                <span>652</span>
                <span>followers</span>
              </div>

              <div className="flex gap-2">
                <span>745</span>
                <span>following</span>
              </div>
            </div>
            <div className="flex items-center font-secondary text-xl flex-wrap">
              <div>
                <span>{name}</span>
              </div>
            </div>
            <a
              target={"_blank"}
              rel="noreferrer"
              className="flex items-center font-secondary text-xl"
            >
              <AiOutlineLink size={20} />
              maligaurav947.github.io/Portfolio/
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-2"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1682686581551-867e0b208bd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-2xl h-[300px] w-[350px]"
          />
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1696943444991-def9485f89f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-2xl h-[300px] w-[350px]"
          />
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1696875222125-e1ed292370fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-2xl h-[300px] w-[350px]"
          />
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-2xl h-[300px] w-[350px]"
          />
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1696280292021-76c29fb11f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-2xl h-[300px] w-[350px]"
          />
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1696838163836-fd2f46aaadce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-2xl h-[300px] w-[350px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
