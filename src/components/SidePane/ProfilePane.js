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
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 5px",
        height: "100%",
        background:
          "linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)",
      }}
    >
      <AvatarMaker
        name={currentUser?.name}
        size={38}
        border={1}
        borderColor="white"
      />

      <Button variant="text" sx={{ minWidth: 0 }} onClick={handleSignOut}>
        <LogoutIcon style={{ color: "white" }} />
      </Button>
    </Box>
  );
}
