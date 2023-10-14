import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../../data/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const Upload = () => {
  // const [uploaded, setUploaded] = useState(null);
  const [newcaption, setNewCaption] = useState();
  const [imgUrl, setImgUrl] = useState([]);
  const postCollectionRef = collection(db, "post");

  const UploadFile = async () => {
    // if (!uploaded) return;
    // const filefolderRef = ref(storage, `postsImg/${uploaded.name}`);
    try {
      //   await uploadBytes(filefolderRef, uploaded);
      addDoc(postCollectionRef, {
        profileImg: auth?.currentUser?.photoURL,
        username: auth?.currentUser?.displayName,
        caption: newcaption,
        imgUrl: imgUrl,
        //currentTime: new Date().getDate(),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div class="my-3">
        <textarea
          className="peer block min-h-[5rem] max-h-[8rem] w-full rounded border-0 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
          rows="3"
          onChange={(e) => setNewCaption(e.target.value)}
          placeholder="caption"
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
          onChange={(e) => setImgUrl(e.target.value)}
        />
      </div>
      <button className="button-40" onClick={UploadFile}>
        Upload
      </button>
    </>
  );
};

export default Upload;
