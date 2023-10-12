import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../scenes/Home/Home";
import ProfileHome from "../scenes/profile/ProfileHome";
import Signin from "../scenes/auth/Signin/Signin";
import Signup from "../scenes/auth/Signup/Signup";
import { auth } from "../data/firebase";

const Router = () => {
  const [userName, setUserName] = useState("");
  const [userActive, setuserActive] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user?.displayName);
        setuserActive(true);
      } else {
        setUserName("");
      }
    });
  }, []);
  return (
    <HashRouter>
      <Routes>
        {!userActive ? (
          <Route path="/" element={<Signup />} />
        ) : (
          <Route path="/" element={<ProfileHome name={userName} />} />
        )}{" "}
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Profile" element={<ProfileHome name={userName} />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
