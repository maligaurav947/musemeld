import React from "react";
import { auth } from "../../../../../data/firebase";

const Comment = () => {
  return (
    <div className="">
      <div className="flex gap-5">
        <div className="lowercase">@{auth?.currentUser?.displayName}</div>
        <div className="">{/* <span>{comment}</span> */}</div>
      </div>
    </div>
  );
};

export default Comment;
