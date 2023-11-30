import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ChatBoxActions() {
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
        sx={{
          flexGrow: 1,
          "& fieldset": { border: "none" },
        }}
        multiline
        maxRows={4}
        autoFocus
      />
      <Button variant="contained" sx={{ borderRadius: 0 }}>
        Send
      </Button>
    </Box>
  );
}
