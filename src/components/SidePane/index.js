import Box from "@mui/material/Box";

import ProfilePane from "./ProfilePane";
import UserList from "@/components/Users/List";

export default function SidePane({ children }) {
  return (
    <Box
      sx={{
        display: "flex",
        borderRight: { xs: 0, sm: 1 },
        borderRightColor: { sm: "secondary.dark" },
      }}
    >
      <ProfilePane />
      <Box sx={{ minWidth: 280 }}>
        <UserList />
      </Box>
    </Box>
  );
}
