import Box from "@mui/material/Box";
import User from "./User";

const users = ["John Doe", "Kaezer Rueda", "Gelyn Manalang"];

export default function UserList() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "auto" }}>
      {users.map((user) => (
        <User key={user} name={user} padding={1} cursor="pointer" />
      ))}
    </Box>
  );
}
