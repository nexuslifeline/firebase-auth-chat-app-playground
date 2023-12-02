import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import AvatarMaker from "../AvatarMaker";

export default function User({
  data = {},
  subtitle = "",
  size = 32,
  onSelect,
  ...props
}) {
  return (
    <Box
      onClick={() => onSelect?.(data)}
      sx={{ flexGrow: 1, display: "flex", alignItems: "center", ...props }}
    >
      <AvatarMaker name={data?.name} size={size} />
      <Box
        marginLeft={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {data?.name && (
          <Typography paragraph margin={0} lineHeight={1.2} fontSize={14}>
            {data.name}
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
