"use client";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";

import Chat from "@/components/Chat";
import SidePane from "@/components/SidePane";
import withAuth from "@/shared/hoc/withAuth";
const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <SidePane />
      <Chat />
    </Box>
  );
};

export default withAuth(HomePage);
