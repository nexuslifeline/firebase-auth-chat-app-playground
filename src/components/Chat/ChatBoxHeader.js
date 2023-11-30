import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import User from "./User";

export default function ChatBoxHeader() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          padding: "0 10px",
          borderBottom: 1,
          borderBottomColor: "grey.400",
          bgcolor: "grey.100",
        }}
      >
        <User name="John Doe" />
      </Box>
    </Box>
  );
}
