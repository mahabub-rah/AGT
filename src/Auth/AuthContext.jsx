import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const UserAuth = createContext();

const auth = getAuth(app);
const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // log in with google
  const googleAuthProvider = (provider) => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };

  // side effect
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => unsubcribe();
  }, []);

  // create new user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in with password and email
  const userLogIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  // update name
  const nameUpdate = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const authInfo = {
    user,
    googleAuthProvider,
    setUser,
    createUser,
    userLogIn,
    logOutUser,
    nameUpdate,
    loader,
  };
  return (
    <>
      <UserAuth.Provider value={authInfo}>{children}</UserAuth.Provider>
    </>
  );
};

export default AuthContext;
