import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import useThreads from "@/shared/hooks/firebase/useThreads";

export default function ChatBoxActions({ sender, recipient }) {
  const { addThreadMessage } = useThreads();

  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();
    setMessage("");
    addThreadMessage({ message: text, sender, recipient });
  };

  return (
    <Box
      sx={{
        height: 55,
        borderTop: 1,
        borderTopColor: "grey.400",
        display: "flex",
      }}
    >
      <TextField
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          flexGrow: 1,
          "& fieldset": { border: "none" },
        }}
        multiline
        maxRows={4}
        autoFocus
      />
      <Button onClick={handleSend} variant="contained" sx={{ borderRadius: 0 }}>
        Send
      </Button>
    </Box>
  );
}
