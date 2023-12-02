import Box from "@mui/material/Box";

import ProfilePane from "./ProfilePane";
import UserListPane from "./UserListPane";

export default function SidePane({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        borderRight: { xs: 1 },
        borderRightColor: { xs: "divider" },
      }}
    >
      <ProfilePane />
      <UserListPane />
    </Box>
  );
}
