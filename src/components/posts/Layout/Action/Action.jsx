/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../../data/firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Action = ({ id }) => {
  const [open, setOpen] = useState(false);
  const deletePost = async (id) => {
    try {
      const postDoc = doc(db, "post", id);
      await deleteDoc(postDoc);
      toast.success("Post Delete");
    } catch (error) {
      console.log(error);
      toast.warning("You can't Bitch");
    }
  };
  return (
    <div className="relative">
      <BsThreeDots size={30} onClick={() => setOpen(!open)} />
      {open ? (
        <>
          <div className="z-10 absolute left-[-145px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <Link to={`/edit/${id}`} className="cursor-pointer">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <span className="flex items-center gap-2">
                    <AiFillEdit />
                    Edit Posts
                  </span>
                </a>
              </Link>
              <li className="cursor-pointer">
                <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <span
                    className="flex items-center gap-2"
                    onClick={() => deletePost(id)}
                  >
                    <AiTwotoneDelete />
                    Delete
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Action;
