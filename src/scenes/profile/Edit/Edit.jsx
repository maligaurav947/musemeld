import React, { useState } from "react";
import { db } from "./../../../data/firebase";
import { useParams, useNavigate } from "react-router-dom";
import { doc, updateDoc } from "firebase/firestore";

const Edit = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [updateName, setUpdateName] = useState("");
  const updateData = async (id) => {
    const update = doc(db, "post", id);
    await updateDoc(update, { title: updateName });
    nav("/Profile");
  };
  return (
    <div className="">
      <input type="text" onChange={(e) => setUpdateName(e.target.value)} />
      <button
        className="button-40"
        onClick={() => {
          updateData(id);
        }}
      >
        Edit Update
      </button>
    </div>
  );
};

export default Edit;
