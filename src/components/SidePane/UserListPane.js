import { useEffect, useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import UserList from "@/components/Users/List";

export default function UserListPane() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(280);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) return;
    if (!matches) {
      setWidth(180);
      setIsOpen(false);
      return;
    }

    setWidth(280);
    setIsOpen(true);
  }, [matches]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Box
      sx={{
        width: isOpen ? width : 0,
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ padding: "0 10px", display: isOpen ? "flex" : "none" }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="search"
          placeholder="Search"
          name="search"
          size="small"
          autoFocus
        />
      </Box>
      <UserList sx={{ display: isOpen ? "flex" : "none" }} />
      <IconButton
        onClick={() => setIsOpen((p) => !p)}
        size="small"
        sx={{
          bgcolor: "grey.200",
          position: "absolute",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {!isOpen ? (
          <ChevronRightIcon sx={{ color: "secondary.main" }} />
        ) : (
          <ChevronLeftIcon sx={{ color: "secondary.main" }} />
        )}
      </IconButton>
    </Box>
  );
}
