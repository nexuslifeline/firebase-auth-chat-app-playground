import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

import AvatarMaker from "../AvatarMaker";

export default function User({
  name = "",
  subtitle = "",
  size = 32,
  ...props
}) {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", ...props }}>
      <AvatarMaker name={name} size={size} />
      <Box
        marginLeft={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {name && (
          <Typography paragraph margin={0} lineHeight={1.2} fontSize={14}>
            {name}
          </Typography>
        )}
        {subtitle && (
          <Typography
            paragraph
            margin={0}
            lineHeight={1.2}
            sx={{ color: "text.secondary", fontSize: 11 }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
