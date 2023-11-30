import Box from "@mui/material/Box";

import MessageItem from "./MessageItem";

export default function MessageList() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: 500,
        overflow: "auto",
        padding: 1,
        overflow: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "0.4em",
        },
        "&::-webkit-scrollbar-track": {
          background: "grey.200",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey.300",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "grey.200",
        },
      }}
    >
      {Array.from({ length: 30 }).map((_, index) => (
        <MessageItem key={index} hasAvatar={index % 2 === 0} />
      ))}
    </Box>
  );
}
