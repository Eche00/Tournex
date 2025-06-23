import React, { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router";
import { auth, db } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

function Header() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
  //     if (currentUser) {
  //       const userRef = doc(db, "users", currentUser.uid);
  //       const userSnap = await getDoc(userRef);

  //       if (userSnap.exists()) {
  //         const data = userSnap.data();
  //         console.log("Fetched user data:", data);
  //         setUser(data);
  //       } else {
  //         console.warn("User Firestore document not found.");
  //       }
  //     } else {
  //       setUser(null);
  //     }
  //     setLoading(false);
  //   });

  //   return () => unsubscribe();
  // }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userRef = doc(db, "usersTournex", currentUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            const data = userSnap.data();
            console.log("Fetched user data:", data);
            setUser(data); // ✅ FIX: no .doc()
          } else {
            console.warn("User Firestore document not found.");
          }
        } catch (err) {
          console.error("Error fetching user:", err);
        }
      } else {
        setUser(null);
      }
      setIsLoading(false); // ✅ Update the correct loading state
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="shadow-xl dark:shadow-none dark:border-b-[0.8px] dark:border-gray-700  fixed top-0 left-0 w-full bg-white dark:bg-[#1F1F1F] z-50">
      {/* container */}
      <main className=" flex items-center  justify-between py-[10px] sm:px-[20px] px-[10px] ">
        {/* logo */}
        <section>
          <img
            src="/logo.webp"
            alt="logo"
            className="w-[50px] h-[50px] object-cover border-gray-300 border-2 rounded-full "
          />
        </section>

        {/* auth  */}
        {!isLoading && user ? (
          <section className="">
            {/* avatar  */}
            <img
              src="/avatar.webp"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover border-gray-300 border-2 rounded-full "
            />
          </section>
        ) : (
          <section className="flex items-center gap-[16px] ">
            <Link
              to="/signin"
              className=" sm:flex items-center justify-center w-[100px] border-[0.8px] border-gray-500 text-gray-500 hover:bg-blue-600 hover:border-none hover:text-white  text-[14px] font-bold py-[8px] rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300 hidden">
              Login
            </Link>
            <Link
              to="/signup"
              className=" flex items-center justify-center w-[100px] bg-blue-600 py-[8px] text-white text-[14px] font-bold  rounded-[10px] cursor-pointer hover:scale-105 transition-all duration-300">
              SignUp
            </Link>
          </section>
        )}
      </main>
    </div>
  );
}

export default Header;
