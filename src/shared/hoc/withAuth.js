import { useEffect, useContext, useState } from "react";
import { AuthContext } from "@/shared/context/AuthContext";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const { currentUser } = useContext(AuthContext);
    const router = useRouter();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
      if (!isMounted) return;
      if (!currentUser) router.push("/");
    }, [isMounted, currentUser, router]);

    return isMounted && currentUser ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default withAuth;
