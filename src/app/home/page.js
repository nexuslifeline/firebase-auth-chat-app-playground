"use client";

import { useRouter } from "next/navigation";

import Chat from "@/components/Chat";
import withAuth from "@/shared/hoc/withAuth";
import useFirebaseAuth from "@/shared/hooks/firebase/useFirebaseAuth";

const HomePage = () => {
  const { logout } = useFirebaseAuth();
  const router = useRouter();

  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  return <Chat onSignOut={handleSignOut} />;
};

export default withAuth(HomePage);
