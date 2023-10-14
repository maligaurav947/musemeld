import React, { useEffect, useState } from "react";
import { db } from "../../data/firebase";
import { collection, getDocs } from "firebase/firestore";
import Upload from "./Upload/Upload";
import PostLayout from "./Layout/PostLayout";

const Post = () => {
  const [post, setPosts] = useState([]);
  const postCollectionRef = collection(db, "post");
  useEffect(() => {
    const postsList = async () => {
      try {
        const data = await getDocs(postCollectionRef);
        const filterData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setPosts(filterData);
      } catch (error) {
        console.log(error);
      }
    };
    postsList();
  });
  return (
    <>
      <Upload />
      <div className="text-white lg:w-[500px] w-[400px]">
        {post.map((data) => (
          <>
            <PostLayout {...data} />
          </>
        ))}
      </div>
    </>
  );
};

export default Post;
