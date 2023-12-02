import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import useThreads from "@/shared/hooks/firebase/useThreads";

export default function ChatBoxActions({ sender, recipient }) {
  const { addThreadMessage } = useThreads();

  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    setMessage("");
    addThreadMessage({ message: text, sender, recipient });
  };

  return (
    <Box
      sx={{
        padding: "10px 15px",
        display: "flex",
      }}
    >
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
        size="normal"
        sx={{
          flexGrow: 1,
          borderRadius: 4,
          marginRight: "10px",
        }}
        autoFocus
      />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          aria-label="send"
          disabled={!message?.trim()}
          onClick={handleSend}
          size="large"
        >
          <SendIcon sx={{ color: "secondary.main" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
