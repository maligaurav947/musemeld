import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../../../../data/firebase";

const EditPost = () => {
  const { id } = useParams();
  const nav = useNavigate();
  // const [uploaded, setUploaded] = useState(null);
  console.log(id);
  const [updatecaption, setUpdatecaption] = useState();
  const [updateimgurl, setUpdateimgurl] = useState();

  const updatePostDoc = async (id) => {
    try {
      const postDoc = doc(db, "post", id);
      await updateDoc(postDoc, {
        caption: updatecaption,
        imgUrl: updateimgurl,
      });
      nav("/Home");
      toast.success("Post Update");
    } catch (error) {
      toast.warning("you can't bitch");
      nav("/Home");
    }
  };
  return (
    <>
      <div class="my-3">
        <textarea
          className="peer block min-h-[5rem] max-h-[8rem] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
          rows="3"
          onChange={(e) => setUpdatecaption(e.target.value)}
          placeholder="caption here...."
        />
      </div>
      {/* <div className="mb-3">
        <input
          className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
          type="file"
        />
      </div> */}
      <div className="mb-3">
        <input
          className="peer block min-h-[5rem] max-h-[8rem] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
          type="url"
          placeholder="img url here...."
          onChange={(e) => setUpdateimgurl(e.target.value)}
        />
      </div>
      <button className="button-40" onClick={() => updatePostDoc(id)}>
        Upload
      </button>
    </>
  );
};

export default EditPost;
