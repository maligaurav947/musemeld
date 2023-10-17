import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../../../data/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const Upload = () => {
  const nav = useNavigate();
  // const [uploaded, setUploaded] = useState(null);
  const [newcaption, setNewCaption] = useState();
  const [imgUrl, setImgUrl] = useState([]);
  const postCollectionRef = collection(db, "post");
  const likesCount = 1;
  const UploadFile = async () => {
    // if (!uploaded) return;
    // const filefolderRef = ref(storage, `postsImg/${uploaded.name}`);
    try {
      //await uploadBytes(filefolderRef, uploaded);
      addDoc(postCollectionRef, {
        profileImg: auth?.currentUser?.photoURL,
        username: auth?.currentUser?.displayName,
        caption: newcaption,
        imgUrl: imgUrl,
        postlikes: likesCount,
        userid: auth?.currentUser?.uid,
      });
      nav("/Home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <main className="grid">
        <div className="my-5">
          <input
            placeholder="Start a post"
            className="input  w-full cursor-pointer"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          />
        </div>

        <dialog id="my_modal_1" className="modal">
          <div className="modal-box ">
            <div className="grid gap-2">
              <textarea
                className="textarea w-full"
                placeholder="caption That touch other's"
                onChange={(e) => setNewCaption(e.target.value)}
              />
              <input
                type="url"
                placeholder="img Url here"
                className="textarea w-full"
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <div className="modal-action">
                <form method="dialog" className="grid grid-cols-2 gap-2">
                  <button className="button-40" onClick={UploadFile}>
                    Upload
                  </button>
                  <button className="button-40">Close</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </main>
    </>
  );
};

export default Upload;
