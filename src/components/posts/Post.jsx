import React from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";

const Post = () => {
  return (
    <>
      <div className="text-white lg:w-[500px] w-[400px]">
        {/* {FieldPostsData.map((data, index) => (
          <div key={data.id} className="my-5">
            <div className="flex items-center gap-2 mb-2">
              <div>
                <img
                  src={ImgNotFound}
                  alt={data.userName}
                  className="rounded-full h-[50px] w-[50px]"
                />
              </div>
              <div className="grid">
                <span>{data.userName}</span>
                <span className="font-light">5 min ago</span>
              </div>
            </div>
            {data.postImgUrl ? (
              <>
                <div className="">
                  <img
                    src={data.postImgUrl}
                    alt={data.postText}
                    className="rounded-xl"
                    style={{ width: `${w + "px"}`, height: `${h + "px"}` }}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="">
                  <img
                    src={ImgNotFound}
                    alt={data.postText}
                    className="rounded-xl"
                    style={{ width: `${w + "px"}`, height: `${h + "px"}` }}
                  />
                </div>
              </>
            )}
            <div className="mt-3 flex gap-5">
              <div className="flex items-center gap-1">
                <AiOutlineHeart />
                {data.postLikes} Likes
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineComment />
                {data.postComment} Comments
              </div>
            </div>
            <div className="capitalize mt-2 mb-2 text-justify">
              <span className="font-bold">{data.userName} </span>
              <span className="font-light">{data.postText}</span>
            </div>
            <div className="">
              {data.comment.map((item) => (
                <div className="flex gap-5">
                  <div className="lowercase">
                    <span>{item.userName}</span>
                  </div>
                  <div className="">
                    <span>{item.commentContext}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Post;
