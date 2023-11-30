import Box from "@mui/material/Box";
import User from "./User";

export default function SidePaneHeader({ onSignOut }) {
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
      <User name="Paul Rueda" subtitle="Online" />
      <Box onClick={onSignOut}>Sign out</Box>
    </Box>
  );
}
