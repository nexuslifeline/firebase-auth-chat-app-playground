import Box from "@mui/material/Box";

import SidePane from "./SidePane";
import SidePaneHeader from "./SidePaneHeader";
import UserList from "./UserList";
import ChatBox from "./ChatBox";
import { useThreadContext } from "@/shared/context/ThreadContext";

export default function Chat({ onSignOut }) {
  const { currentThreadId } = useThreadContext();

  return (
    <Box
      margin={"0 auto"}
      sx={{
        display: "flex",
        border: 1,
        borderColor: "grey.400",
        height: "100%",
        width: "100%",
        maxWidth: "950px",
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <SidePane>
        <SidePaneHeader onSignOut={onSignOut} />
        <UserList />
      </SidePane>
      <ChatBox threadId={currentThreadId} />
    </Box>
  );
}
