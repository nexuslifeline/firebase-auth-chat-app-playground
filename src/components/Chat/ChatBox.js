import Box from "@mui/material/Box";
import ChatBoxActions from "./ChatBoxActions";
import ChatBoxHeader from "./ChatBoxHeader";
import MessageList from "./MessageList";

export default function ChatBox({ threadId, senderUid, recipientUid }) {
  console.log("ChatBox threadId", threadId);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
      <ChatBoxHeader />
      <MessageList threadId={threadId} />
      <ChatBoxActions senderUid={senderUid} recipientUid={recipientUid} />
    </Box>
  );
}
