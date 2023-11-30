import Box from "@mui/material/Box";
import ChatBoxActions from "./ChatBoxActions";
import ChatBoxHeader from "./ChatBoxHeader";
import MessageList from "./MessageList";

export default function ChatBox() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <ChatBoxHeader />
      <MessageList />
      <ChatBoxActions />
    </Box>
  );
}
