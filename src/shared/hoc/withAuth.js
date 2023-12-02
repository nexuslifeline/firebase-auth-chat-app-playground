import { useEffect } from "react";
import { useAuthContext } from "@/shared/context/AuthContext";
import { useRouter } from "next/navigation";

// Restricts access to components that require authentication.
// It ensures that the wrapped component is only rendered if the user
// is authenticated, redirecting to the Signin page if not.
const withAuth = (WrappedComponent) => {
  const ComponentWithAuth = (props) => {
    const { currentUser, isLoading } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
      // If authentication information is still loading, return early
      if (isLoading) return;

      // If no user is logged in, redirect to the Signin page
      if (!currentUser) router.push("/");
    }, [isLoading, currentUser]);

    return !isLoading && currentUser ? <WrappedComponent {...props} /> : null;
  };

  return ComponentWithAuth;
};

export default withAuth;
