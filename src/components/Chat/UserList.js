import Box from "@mui/material/Box";
import User from "./User";

import useUsers from "@/shared/hooks/firebase/useUsers";
import useThreads from "@/shared/hooks/firebase/useThreads";
import { useAuthContext } from "@/shared/context/AuthContext";
import { useThreadContext } from "@/shared/context/ThreadContext";

export default function UserList() {
  const { users } = useUsers();
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

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      {users.map(
        (user) =>
          currentUser?.uid !== user?.uid && (
            <User
              key={user?.uid}
              data={user}
              padding={1}
              cursor="pointer"
              onSelect={handleSelect}
            />
          )
      )}
    </Box>
  );
}
