"use client";

import { useRouter } from "next/navigation";

import Chat from "@/components/Chat";
import withAuth from "@/shared/hoc/withAuth";
import useFirebaseAuth from "@/shared/hooks/firebase/useFirebaseAuth";
import { useAuthContext } from "@/shared/context/AuthContext";

const HomePage = () => {
  const { logout } = useFirebaseAuth();
  const { setCurrentUser } = useAuthContext();
  const router = useRouter();

  const handleSignOut = () => {
    setCurrentUser(null);
    logout();
    router.push("/");
  };

  return <Chat onSignOut={handleSignOut} />;
};

export default withAuth(HomePage);
