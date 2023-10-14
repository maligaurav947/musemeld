/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../data/firebase";
import { useState } from "react";
import { toast } from "react-toastify";

const Signin = () => {
  const nav = useNavigate();
  const [pass, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async () => {
    if (!email || !pass) {
      toast.warn("Required Filed");
    }
    await signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        nav("/Profile");
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  };
  return (
    <>
      <div className="py-8">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-yellow-600 text-center">
              musemeld
            </h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email Address :
              </label>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                placeholder="example@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password :
                </label>
                <a href="#" className="text-xs text-gray-500">
                  Forget Password?
                </a>
              </div>
              <input
                className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                placeholder="••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-8">
              <button className="button-40" onClick={handleSubmit}>
                Signin
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <Link to="/signup" className="text-sm text-gray-500 ">
                Create account
              </Link>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
