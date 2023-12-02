import { useEffect } from "react";

import Box from "@mui/material/Box";

import User from "./User";
import useUsers from "@/shared/hooks/firebase/useUsers";
import useThreads from "@/shared/hooks/firebase/useThreads";
import { useAuthContext } from "@/shared/context/AuthContext";
import { useThreadContext } from "@/shared/context/ThreadContext";
import withNotifications from "@/shared/hoc/withNotifications";

// TODO(Improvement): As an improvement for the future, consider implementing pagination for better performance.
// Currently, all data is loaded at once, which may become inefficient as the dataset grows.
// Additionally, handling search functionality on the backend through Firestore queries would further enhance efficiency.
// Paginating the data and offloading search operations to the backend will optimize the user experience.
const UserList = ({ sx, notify, search }) => {
  const { users, isLoading } = useUsers();
  const { currentUser } = useAuthContext();
  const { setCurrentThreadId, setSender, setRecipient } = useThreadContext();
  const { addThread, createThreadId } = useThreads();

  const handleSelect = async (recipient) => {
    const threadId = createThreadId([recipient?.uid, currentUser?.uid]);

    setCurrentThreadId(threadId);
    setSender(currentUser);
    setRecipient(recipient);

    try {
      await addThread(currentUser, recipient);
    } catch (err) {
      notify(err);
    }
  };

  useEffect(() => {
    if (!isLoading && users.length > 0) {
      handleSelect(users[0]);
    }
  }, [isLoading]);

  const filteredUsers = search
    ? users.filter((user) =>
        (user?.name || "").toLowerCase().includes(search.toLowerCase())
      )
    : users;

  return (
    <Box
      sx={{
        flexGrow: 1,
        overflow: "auto",
        width: "100%",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "grey.300",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey.500",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "grey.300",
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          padding: "0 8px",
        }}
      >
        {filteredUsers.map(
          (user) =>
            currentUser?.uid !== user?.uid && (
              <User
                key={user?.uid}
                size={36}
                data={user}
                padding={"10px"}
                cursor="pointer"
                onSelect={handleSelect}
                sx={{ "&:hover": { bgcolor: "grey.200" }, borderRadius: 2 }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default withNotifications(UserList);
