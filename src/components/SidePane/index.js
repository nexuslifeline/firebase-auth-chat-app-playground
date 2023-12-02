import Box from "@mui/material/Box";

import ProfilePane from "./ProfilePane";
import UserList from "@/components/Users/List";

export default function SidePane({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        borderRight: { xs: 0, sm: 1 },
        borderRightColor: { sm: "divider" },
      }}
    >
      <ProfilePane />
      <Box
        sx={{
          overflow: "hidden",
          minWidth: { xs: 0, sm: 280 },
          width: { xs: 0 },
        }}
      >
        <UserList />
      </Box>
    </Box>
  );
}
