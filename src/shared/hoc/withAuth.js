import { useEffect } from "react";
import { useAuthContext } from "@/shared/context/AuthContext";
import { useRouter } from "next/navigation";

const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const { currentUser, isLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      if (isLoading) return;
      console.log("withAuth currentUser: ", currentUser);
      if (!currentUser) router.push("/");
    }, [isLoading, currentUser]);

    return !isLoading && currentUser ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default withAuth;
