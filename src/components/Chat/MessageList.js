import Box from "@mui/material/Box";

import MessageItem from "./MessageItem";
import useMessages from "@/shared/hooks/firebase/useMessages";
import CircularProgress from "@mui/material/CircularProgress";

export default function MessageList({ threadId, sx }) {
  const { messages, isLoading } = useMessages(threadId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        height: "calc(100vh - 150px)",
        overflow: "auto",
        padding: 1,
        overflow: "auto",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "grey.300",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey.500",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "grey.300",
        },
        ...sx,
      }}
    >
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        messages?.map(
          (data, index) =>
            data?.message && (
              <MessageItem
                key={index}
                data={data}
                prevData={index > 0 && messages[index - 1]}
              />
            )
        )
      )}
    </Box>
  );
}
