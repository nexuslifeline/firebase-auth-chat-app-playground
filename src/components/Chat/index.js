import Box from "@mui/material/Box";

import SendMesage from "./SendMesage";
import ChatBoxHeader from "./Header";
import MessageList from "./MessageList";
import { useThreadContext } from "@/shared/context/ThreadContext";

export default function ChatBox() {
  const { sender, recipient, currentThreadId } = useThreadContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
      }}
    >
      <ChatBoxHeader recipient={recipient} />
      <MessageList threadId={currentThreadId} />
      <SendMesage sender={sender} recipient={recipient} />
    </Box>
  );
}
