// regLogic to handle the registration process
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const handleRegistration = async (formData) => {
  const {
    username,
    email,
    password,
    following,
    followers,
    gamecategory,
    country,
    bio,
    phone,
    address,
    sign,
    gender,
    createdAt,
  } = formData;

  try {
    // create User  in firebase
    const userCresidentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCresidentials.user;

    // Store additional user details in Firestore
    await setDoc(doc(db, "usersTournex", user.uid), {
      username,
      email,
      following,
      followers,
      gamecategory,
      country,
      bio,
      phone,
      address,
      sign,
      gender,
      createdAt,
    });
    console.log("User registered successfully:");
  } catch (error) {
    console.error("Registeration  failed:", error);
    throw new Error("Registeration  Failed. Please try again !!");
  }
};
