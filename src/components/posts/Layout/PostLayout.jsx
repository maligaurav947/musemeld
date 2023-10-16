import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import Action from "./Action/Action";

const PostLayout = ({
  username,
  id,
  caption,
  imgUrl,
  profileImg,
  postlikes,
}) => {
  const w = 500;
  const h = 300;
  return (
    <>
      <div key={id} className="my-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 mb-2">
            {profileImg ? (
              <>
                {" "}
                <img
                  src={profileImg}
                  alt=""
                  className="rounded-full h-[50px] w-[50px]"
                />
              </>
            ) : (
              <>
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODsPtzBD0QWVBYneQcrYk2irZa4iwR-ySSw&usqp=CAU"
                  alt=""
                  className="rounded-full h-[50px] w-[50px]"
                />
              </>
            )}
            <div className="grid">
              <span>@{username}</span>
              <span className="font-light">2 min ago</span>
            </div>
          </div>
          <div>
            <Action id={id} />
          </div>
        </div>

        <div className="">
          <img
            src={imgUrl}
            className="rounded-xl"
            style={{ width: `${w + "px"}`, height: `${h + "px"}` }}
          />
        </div>

        <div className="mt-3 flex gap-5">
          <div className="flex items-center gap-1">
            <AiOutlineHeart />
            <span
              onClick={() => {
                postlikes++;
              }}
            >
              {postlikes}
            </span>{" "}
            Likes
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
