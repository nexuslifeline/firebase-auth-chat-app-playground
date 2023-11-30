import Avatar from "@mui/material/Avatar";

import {
  green,
  grey,
  orange,
  pink,
  blue,
  red,
  purple,
} from "@mui/material/colors";

const colors = [
  pink[500],
  orange[500],
  blue[500],
  purple[500],
  red[300],
  green[500],
];

const generateColor = (name = "") => {
  const index = name.split("").reduce((p, c) => p + c.charCodeAt(0), 0);
  return colors[index % colors.length];
};

export default function AvatarMaker({ name = "", size = 32, ...props }) {
  return (
    <Avatar
      sx={{ bgcolor: generateColor(name), width: size, height: size, ...props }}
    >
      {name.charAt(0).toUpperCase()}
    </Avatar>
  );
}
