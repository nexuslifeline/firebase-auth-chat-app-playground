import Box from "@mui/material/Box";

import User from "@/components/Users/User";

export default function ChatBoxHeader({ recipient }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 60,
          padding: "0 20px",
          borderBottom: 1,
          borderBottomColor: "divider",
          bgcolor: "grey.5",
        }}
      >
        {recipient?.name && <User data={recipient} size={36} />}
      </Box>
    </Box>
  );
}
