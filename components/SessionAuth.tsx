"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase";
import Login from "@/components/Login";
import Loading from "./Loading";

type Props = {
  children: React.ReactNode;
};

const SessionAuth = ({ children }: Props) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Ha ocurrido un error: {error.message}</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen sm:grid sm:place-items-center backdrop-blur-sm bg-[#001D3D]">
        <Login />
      </div>
    );
  }

  return <>{children}</>;
};

export default SessionAuth;
