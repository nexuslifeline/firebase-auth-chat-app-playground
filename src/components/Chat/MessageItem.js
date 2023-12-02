import { forwardRef } from "react";

import { Typography } from "@mui/material";
import { grey, blue, black } from "@mui/material/colors";
import Box from "@mui/material/Box";

import AvatarMaker from "../AvatarMaker";
import { useAuthContext } from "@/shared/context/AuthContext";
import { areDateAndTimeEqual } from "@/shared/lib/utils";

const MessageItem = forwardRef(
  (
    {
      data: { message, sender, recipient, createdAt } = {},
      prevData,
      children,
    },
    ref
  ) => {
    const { currentUser } = useAuthContext();
    const isOwner = sender?.uid === currentUser?.uid;

    const postedDate = createdAt?.seconds
      ? new Date(createdAt.seconds * 1000)
      : "";

    const prevPostedDate = prevData?.createdAt?.seconds
      ? new Date(prevData.createdAt.seconds * 1000)
      : "";

    return (
      <>
        {postedDate && !areDateAndTimeEqual(postedDate, prevPostedDate) && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 1,
            }}
          >
            <Typography
              component="span"
              fontSize={12}
              margin={0}
              borderRadius={6}
              color={grey[600]}
            >
              {postedDate.toLocaleString()}
            </Typography>
          </Box>
        )}
        <Box
          ref={ref}
          sx={{
            padding: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: !isOwner ? "flex-start" : "flex-end",
          }}
        >
          {!isOwner && (
            <AvatarMaker name={sender?.name || ""} marginRight={1} />
          )}

          <Typography
            component="span"
            fontSize={14}
            margin={0}
            padding={"7px 20px"}
            borderRadius={6}
            color={!isOwner ? "inherit" : "white"}
            backgroundColor={!isOwner ? grey[200] : blue[500]}
          >
            {message || children}
          </Typography>
        </Box>
      </>
    );
  }
);

MessageItem.displayName = "MessageItem";
export default MessageItem;
