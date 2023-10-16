import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../scenes/Home/Home";
import ProfileHome from "../scenes/profile/ProfileHome";
import Signin from "../scenes/auth/Signin/Signin";
import Signup from "../scenes/auth/Signup/Signup";
import { auth } from "../data/firebase";

import EditPost from "../components/posts/Layout/Action/Edit/EditPost";

const Router = () => {
  const [userActive, setuserActive] = useState(false);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setuserActive(true);
      } else {
      }
    });
  }, []);
  return (
    <HashRouter>
      <Routes>
        {!userActive ? (
          <Route path="/" element={<Signup />} />
        ) : (
          <Route path="/" element={<ProfileHome />} />
        )}{" "}
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile" element={<ProfileHome />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
