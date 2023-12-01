import Box from "@mui/material/Box";

import ChatBoxActions from "./ChatBoxActions";
import ChatBoxHeader from "./ChatBoxHeader";
import MessageList from "./MessageList";
import { useThreadContext } from "@/shared/context/ThreadContext";

export default function ChatBox({ threadId }) {
  const { sender, recipient } = useThreadContext();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <ChatBoxHeader recipient={recipient} />
      <MessageList threadId={threadId} />
      <ChatBoxActions sender={sender} recipient={recipient} />
    </Box>
  );
}
