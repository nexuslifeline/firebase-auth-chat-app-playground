import { useEffect, useState } from "react";
import { useAuthContext } from "@/shared/context/AuthContext";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const { currentUser, isLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (isLoading) return;
      if (!currentUser) router.push("/");
    }, [isLoading, currentUser, router]);

    return !isLoading && currentUser ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default withAuth;
