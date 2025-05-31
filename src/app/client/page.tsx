"use client";
import LoginButton from "@/components/LoginButton";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session && <p>Signed in as {session.user?.email}</p>}

      <LoginButton />
    </div>
  );
}
