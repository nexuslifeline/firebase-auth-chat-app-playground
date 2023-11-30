import { Typography } from "@mui/material";
import { grey, blue, black } from "@mui/material/colors";
import Box from "@mui/material/Box";

import AvatarMaker from "../AvatarMaker";

export default function MessageItem({ hasAvatar = false }) {
  return (
    <Box
      sx={{
        padding: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: hasAvatar ? "flex-start" : "flex-end",
      }}
    >
      {hasAvatar && <AvatarMaker name="John Doe" marginRight={1} />}
      <Typography
        component="span"
        fontSize={14}
        margin={0}
        padding={"7px 20px"}
        borderRadius={6}
        color={hasAvatar ? "inherit" : "white"}
        backgroundColor={hasAvatar ? grey[200] : blue[500]}
      >{`This is a sample message.`}</Typography>
    </Box>
  );
}
