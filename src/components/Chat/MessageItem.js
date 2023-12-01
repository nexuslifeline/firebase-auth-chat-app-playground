import { Typography } from "@mui/material";
import { grey, blue, black } from "@mui/material/colors";
import Box from "@mui/material/Box";

import AvatarMaker from "../AvatarMaker";
import { useAuthContext } from "@/shared/context/AuthContext";

export default function MessageItem({
  data: { message, sender, recipient } = {},
  children,
}) {
  const { currentUser } = useAuthContext();
  const isOwner = sender?.uid === currentUser?.uid;

  return (
    <Box
      sx={{
        padding: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: !isOwner ? "flex-start" : "flex-end",
      }}
    >
      {!isOwner && <AvatarMaker name={recipient?.name || ""} marginRight={1} />}
      <Typography
        component="span"
        fontSize={14}
        margin={0}
        padding={"7px 20px"}
        borderRadius={6}
        color={!isOwner ? "inherit" : "white"}
        backgroundColor={!isOwner ? grey[200] : blue[500]}
      >
        {message || children}
      </Typography>
    </Box>
  );
}
