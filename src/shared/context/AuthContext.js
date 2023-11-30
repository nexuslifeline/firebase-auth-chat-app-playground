"use client";

import { useEffect, useState, createContext, useContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const { onAuth } = useFirebase();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuth((user) => {
      setCurrentUser(user ? user : null);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
