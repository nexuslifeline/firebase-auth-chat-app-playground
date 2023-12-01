"use client";

import { createContext, useState, useContext } from "react";

export const ThreadContext = createContext({});

export const useThreadContext = () => useContext(ThreadContext);

export const ThreadContextProvider = ({ children }) => {
  const [currentThreadId, setCurrentThreadId] = useState(null);
  const [sender, setSender] = useState(null);
  const [recipient, setRecipient] = useState(null);

  return (
    <ThreadContext.Provider
      value={{
        sender,
        setSender,
        recipient,
        setRecipient,
        currentThreadId,
        setCurrentThreadId,
      }}
    >
      {children}
    </ThreadContext.Provider>
  );
};
