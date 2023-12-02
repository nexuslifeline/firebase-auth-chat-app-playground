import Box from "@mui/material/Box";

import User from "@/components/Users/User";

export default function ChatBoxHeader({ recipient }) {
  return (
    <Box sx={{ height: 60, display: "flex", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: 60,
          padding: "0 20px",
          borderBottom: 1,
          borderBottomColor: "divider",
          width: "100%",
          backgroundColor: "background.paper",
          width: "100%",
          position: "fixed",
        }}
      >
        {recipient?.name && <User data={recipient} size={36} />}
      </Box>
    </Box>
  );
}
