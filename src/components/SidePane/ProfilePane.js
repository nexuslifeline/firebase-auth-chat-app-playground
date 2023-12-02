import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

import AvatarMaker from "../AvatarMaker";
import useFirebaseAuth from "@/shared/hooks/firebase/useFirebaseAuth";
import { useAuthContext } from "@/shared/context/AuthContext";

export default function ProfilePane() {
  const { currentUser, setCurrentUser } = useAuthContext();
  const { logout } = useFirebaseAuth();
  const router = useRouter();

  const handleSignOut = () => {
    setCurrentUser(null);
    logout();
    router.push("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: 60,
        alignItems: "center",
        padding: "10px 5px",
        height: "100%",
        bgcolor: "secondary.dark",
      }}
    >
      <AvatarMaker
        name={currentUser?.name}
        size={40}
        border={1}
        borderColor="white"
      />

      <Button
        variant="text"
        sx={{ marginTop: "auto", minWidth: 0 }}
        onClick={handleSignOut}
      >
        <LogoutIcon style={{ color: "white" }} />
      </Button>
    </Box>
  );
}
