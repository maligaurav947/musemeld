/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { auth, db } from "../../data/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, getDocs } from "firebase/firestore";

const Profile = () => {
  //const id = auth.currentUser.uid;
  const [post, setPosts] = useState([]);
  const nav = useNavigate();
  const logOut = async () => {
    try {
      await signOut(auth).then(() => {
        setTimeout(() => {
          nav("/signin");
        });
        toast.success("You Have Successfully Logout");
      }, 2000);
    } catch (error) {
      toast.error(error);
    }
  };

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
      <div className="flex flex-col gap-10 py-6">
        <div>
          <div className="lg:flex items-center gap-5">
            {auth?.currentUser?.photoURL ? (
              <>
                {" "}
                <img
                  src={auth?.currentUser?.photoURL}
                  alt=""
                  className="rounded-full h-[150px] w-[150px]"
                />
              </>
            ) : (
              <>
                {" "}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODsPtzBD0QWVBYneQcrYk2irZa4iwR-ySSw&usqp=CAU"
                  alt=""
                  className="rounded-full h-[150px] w-[150px]"
                />
              </>
            )}
            <div className="grid gap-2">
              <div className="flex items-center gap-5 flex-wrap">
                <div className="text-center font-secondary text-2xl">
                  <span>
                    {auth?.currentUser?.displayName
                      ? auth?.currentUser?.displayName
                      : "username"}
                  </span>
                </div>
                <div className="btn-group flex gap-2 font-primary">
                  {/* <Link to={`/edit/${id}`}> */}
                  <button className="btn bg-[#262626]">Edit Profile</button>
                  {/* </Link> */}
                  <div>
                    <button className="btn bg-[#262626]">View Archive</button>
                  </div>
                  <div>
                    <button className="btn bg-[#262626]" onClick={logOut}>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-5 font-secondary text-xl flex-wrap">
                <div className="flex gap-2">
                  <span>252</span>
                  <span>Posts</span>
                </div>
                <div className="flex gap-2">
                  <span>652</span>
                  <span>followers</span>
                </div>

                <div className="flex gap-2">
                  <span>745</span>
                  <span>following</span>
                </div>
              </div>
              <div className="flex items-center font-secondary text-xl flex-wrap">
                <div>
                  <span>
                    {auth?.currentUser?.displayName
                      ? auth?.currentUser?.displayName
                      : "full name"}
                  </span>
                </div>
              </div>
              <a
                target={"_blank"}
                rel="noreferrer"
                className="flex items-center font-secondary text-xl"
              >
                <AiOutlineLink size={20} />
                {auth?.currentUser?.email}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t-2"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {post.map((data) => (
            <>
              {data.userid == auth?.currentUser?.uid ? (
                <>
                  <img
                    src={data.imgUrl}
                    className="w-[350px] h-[300px] rounded-2xl"
                    alt=""
                  />
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
