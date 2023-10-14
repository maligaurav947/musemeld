import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";

const PostLayout = ({ username, id, caption, imgUrl, profileImg }) => {
  const w = 500;
  const h = 300;
  return (
    <>
      <div key={id} className="my-5">
        <div className="flex items-center gap-2 mb-2">
          <div>
            <img
              src={profileImg}
              alt={username}
              className="rounded-full h-[50px] w-[50px]"
            />
          </div>
          <div className="grid">
            <span>@{username}</span>
            <span className="font-light">2 min ago</span>
          </div>
        </div>

        <div className="">
          <img
            src={imgUrl}
            alt=""
            className="rounded-xl"
            style={{ width: `${w + "px"}`, height: `${h + "px"}` }}
          />
        </div>

        <div className="mt-3 flex gap-5">
          <div className="flex items-center gap-1">
            <AiOutlineHeart />
            5252 Likes
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineComment />
            652 Comments
          </div>
        </div>
        <div className=" mt-2 mb-2 text-justify">
          <span className="font-bold">@{username} </span>
          <span className="font-light">{caption}</span>
        </div>
        {/* Comment Section */}
        <div className="">
          <div className="flex gap-5">
            <div className="lowercase">
              <span>@{username}</span>
            </div>
            <div className="">
              <span>Lorem, ipsum.</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <div className="lowercase">
              <span>@{username}</span>
            </div>
            <div className="">
              <span>Lorem, ipsum.</span>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5">
            <div className="lowercase">
              <span>@{username}</span>
            </div>
            <div className="">
              <span>Lorem, ipsum.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLayout;
