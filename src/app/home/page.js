"use client";

import { useRouter } from "next/navigation";

import Chat from "@/components/Chat";
import withAuth from "@/shared/hoc/withAuth";
import useFirebase from "@/shared/hooks/useFirebase";

const HomePage = () => {
  const { logout } = useFirebase();
  const router = useRouter();
  const handleSignOut = () => {
    logout();
    router.push("/");
  };

  return <Chat onSignOut={handleSignOut} />;
};

export default withAuth(HomePage);
