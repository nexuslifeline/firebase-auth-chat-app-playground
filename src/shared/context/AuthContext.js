"use client";

import { useEffect, useState, createContext, useContext } from "react";
import useFirebaseAuth from "../hooks/firebase/useFirebaseAuth";
import useUsers from "../hooks/firebase/useUsers";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const { onAuth } = useFirebaseAuth();
  const { getUser } = useUsers();

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuth((u) => {
      if (!u?.uid) {
        setCurrentUser(null);
        setIsLoading(false);
        return;
      }

      getUser(u.uid).then((user) => {
        setCurrentUser(user);
        setIsLoading(false);
      });
    });

    console.log("fired!");

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isLoading }}>
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
