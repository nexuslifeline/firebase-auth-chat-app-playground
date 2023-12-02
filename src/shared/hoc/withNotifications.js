import { useState } from "react";

import Snackbar from "@mui/joy/Snackbar";
import { translateError } from "@/shared/lib/translator";

const withNotifications = (WrappedComponent) => {
  const NewComponent = (props) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("solid");
    const [color, setColor] = useState("danger");
    const notify = ({
      message,
      variant = "solid",
      color = "danger",
      translate = true,
    }) => {
      setMessage(translate ? translateError(message) : message);
      setVariant(variant);
      setColor(color);
      setOpen(true);
    };

    return (
      <>
        <Snackbar
          autoHideDuration={4000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          variant={variant}
          color={color}
          onClose={(e, reason) => {
            if (reason === "clickaway") return;
            setOpen(false);
          }}
        >
          {message}
        </Snackbar>
        <WrappedComponent {...props} notify={notify} />
      </>
    );
  };

  return NewComponent;
};

export default withNotifications;
