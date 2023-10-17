import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../data/firebase";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { signInAnonymously, updateProfile } from "firebase/auth";
import { async } from "@firebase/util";

const EditProfile = () => {
  const nav = useNavigate();

  const [updateprofileUrl, setUpdateProfileUrl] = useState();
  const [updatename, setUpdateName] = useState();
  const updateProfileitems = async () => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: updatename,
        photoURL: updateprofileUrl,
      });
      toast.success("Updated");
      nav("/Profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-content-center h-screen gap-2 ">
      <div className="w-[600px] grid gap-5">
        <input
          className="h-[30px] rounded-2xl p-5"
          placeholder="new name"
          onChange={(e) => setUpdateName(e.target.value)}
          type="text"
        />{" "}
        <input
          className="h-[30px] rounded-2xl p-5"
          placeholder="update Profile Url"
          onChange={(e) => setUpdateProfileUrl(e.target.value)}
          type="url"
        />
        <button className="button-40" onClick={updateProfileitems}>
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
