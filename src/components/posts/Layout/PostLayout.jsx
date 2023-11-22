/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import {
  AiOutlineComment,
  AiOutlineHeart,
  AiOutlineSend,
} from "react-icons/ai";
import Action from "./Action/Action";
import { auth, db } from "../../../data/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Comment from "./Action/Comment/Comment";

const PostLayout = ({
  username,
  id,
  caption,
  imgUrl,
  profileImg,
  postlikes,
  userid,
}) => {
  const nav = useNavigate();

  // const addComment = async (id) => {
  //   try {
  //     const postDoc = doc(db, "post", id);
  //     await updateDoc(postDoc, {
  //       comment: addcomment,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const w = 500,
    h = 300;

  return (
    <>
      <div key={id} className="my-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-between">
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
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODsPtzBD0QWVBYneQcrYk2irZa4iwR-ySSw&usqp=CAU"
                    alt=""
                    className="rounded-full h-[50px] w-[50px]"
                  />
                </>
              )}
            </div>
            <div className="grid">
              <span>@{username}</span>
              <span className="font-light">2 min ago</span>
            </div>
          </div>
          <div>
            <Action id={id} userid={userid} />
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

        <Comment />

        {/*  */}
        <div className="flex items-center my-2 gap-2">
          <img
            src={auth?.currentUser?.photoURL}
            className="rounded-full w-[40px] h-[40px]"
          />

          <input
            type="text"
            className="h-[40px] rounded-2xl w-full p-2"
            //onChange={(e) => setAddComment(e.target.value)}
          />
          <div
            className="h-[40px] w-[40px] grid place-content-center bg-blue-400 rounded-full "
            //onClick={() => addComment(id)}
          >
            <AiOutlineSend size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLayout;
