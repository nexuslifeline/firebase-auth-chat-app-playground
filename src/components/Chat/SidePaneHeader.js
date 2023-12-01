import Box from "@mui/material/Box";

import User from "./User";
import { useAuthContext } from "@/shared/context/AuthContext";

export default function SidePaneHeader({ onSignOut }) {
  const { currentUser } = useAuthContext();

  return (
    <Box
      padding={"0 10px"}
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: { xs: 0, sm: 1 },
        borderBottomColor: { sm: "grey.400" },
        height: 50,
        bgcolor: "grey.100",
        overflow: "hidden",
      }}
    >
      <User data={{ name: currentUser?.name || "Unknown" }} subtitle="Online" />
      <Box onClick={onSignOut}>Sign out</Box>
    </Box>
  );
}
