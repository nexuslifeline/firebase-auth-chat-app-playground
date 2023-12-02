import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";

import MessageItem from "./MessageItem";
import useMessages from "@/shared/hooks/firebase/useMessages";
import CircularProgress from "@mui/material/CircularProgress";

// TODO(Improvement): Implement logic to handle scrolling and load older messages when the
// user scrolls to the top. Currently, the component loads all messages in the thread all at once.

export default function MessageList({ threadId, sx }) {
  const scrollRef = useRef();
  const { messages, isLoading } = useMessages(threadId);

  useEffect(() => {
    if (isLoading) return;
    if (!messages?.length) return;
    if (!scrollRef?.current) return;
    scrollRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages?.length, isLoading]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
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
          borderRadius: "10px",
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
                {...(messages.length - 1 === index
                  ? {
                      ref: scrollRef,
                    }
                  : {})}
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
