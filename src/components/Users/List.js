import { useEffect } from "react";

import Box from "@mui/material/Box";
import User from "./User";

import useUsers from "@/shared/hooks/firebase/useUsers";
import useThreads from "@/shared/hooks/firebase/useThreads";
import { useAuthContext } from "@/shared/context/AuthContext";
import { useThreadContext } from "@/shared/context/ThreadContext";

export default function UserList() {
  const { users, isLoading } = useUsers();
  const { currentUser } = useAuthContext();
  const { setCurrentThreadId, setSender, setRecipient } = useThreadContext();
  const { addThread, createThreadId } = useThreads();

  const handleSelect = async (recipient) => {
    const threadId = createThreadId([recipient?.uid, currentUser?.uid]);

    setCurrentThreadId(threadId);
    setSender(currentUser);
    setRecipient(recipient);

    await addThread(currentUser, recipient);
  };

  useEffect(() => {
    if (!isLoading && users.length > 0) {
      console.log("users[0]", users[0]);
      handleSelect(users[0]);
    }
  }, [isLoading]);

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto", padding: "12px" }}>
      {users.map(
        (user) =>
          currentUser?.uid !== user?.uid && (
            <User
              key={user?.uid}
              size={36}
              data={user}
              padding={"10px"}
              cursor="pointer"
              onSelect={handleSelect}
            />
          )
      )}
    </Box>
  );
}
