import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

import useThreads from "@/shared/hooks/firebase/useThreads";
import withNotifications from "@/shared/hoc/withNotifications";

const SendMessage = ({ sender, recipient, notify }) => {
  const { addThreadMessage } = useThreads();

  const [message, setMessage] = useState("");

  const handleSend = () => {
    const text = message.trim();

    if (!text) return;

    setMessage("");
    try {
      addThreadMessage({ message: text, sender, recipient });
    } catch (err) {
      notify(err);
    }
  };

  return (
    <Box
      sx={{
        padding: "10px 15px",
        display: "flex",
        backgroundColor: "background.paper",
        width: "100%",
        borderTop: 1,
        borderTopColor: "divider",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <TextField
          value={message}
          fullWidth
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          size="normal"
          sx={{
            flexGrow: 1,
            marginRight: "10px",
          }}
          autoFocus
        />
      </Box>
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
};

export default withNotifications(SendMessage);
