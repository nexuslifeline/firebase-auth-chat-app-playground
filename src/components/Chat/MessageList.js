import { useEffect } from "react";

import Box from "@mui/material/Box";

import MessageItem from "./MessageItem";
import useMessages from "@/shared/hooks/firebase/useMessages";
import { useAuthContext } from "@/shared/context/AuthContext";

export default function MessageList({ threadId }) {
  const { messages } = useMessages(threadId);
  const { currentUser } = useAuthContext();

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
      {messages?.map((data, index) => (
        <MessageItem key={index} data={data} />
      ))}
    </Box>
  );
}
