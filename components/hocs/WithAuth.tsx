import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

const WithAuth = <P extends {}>(Component: ComponentType<P>) => {
  return function AuthenticatedComponent(props: P) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "loading") return;
      if (!session) router.push("/user/signin");
    }, [session, status, router]);

    return <Component {...props} />;
  };
};

export default WithAuth;
