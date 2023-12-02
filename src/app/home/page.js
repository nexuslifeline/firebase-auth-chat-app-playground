"use client";

import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";

import Chat from "@/components/Chat";
import SidePane from "@/components/SidePane";
import SidePaneHeader from "@/components/SidePane/Header";
import UserList from "@/components/Users/List";
import withAuth from "@/shared/hoc/withAuth";
const HomePage = () => {
  return (
    <Box
      margin={"0 auto"}
      sx={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <SidePane>
        <SidePaneHeader />
        <UserList />
      </SidePane>
      <Chat />
    </Box>
  );
};

export default withAuth(HomePage);
