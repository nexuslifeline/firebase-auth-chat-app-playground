import Box from "@mui/material/Box";
import User from "./User";

import useUsers from "@/shared/hooks/firebase/useUsers";
import { useAuthContext } from "@/shared/context/AuthContext";

export default function UserList() {
  const { users } = useUsers();
  const { currentUser } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      {users.map(
        ({ name, uid }) =>
          currentUser?.uid !== uid && (
            <User key={uid} name={name} padding={1} cursor="pointer" />
          )
      )}
    </Box>
  );
}
