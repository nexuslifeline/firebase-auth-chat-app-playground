import Box from "@mui/material/Box";

export default function SidePane({ children }) {
  return (
    <Box
      sx={{
        minWidth: { xs: "100%", sm: 270 },
        borderRight: { xs: 0, sm: 1 },
        borderRightColor: { sm: "grey.400" },
      }}
    >
      {children}
    </Box>
  );
}
