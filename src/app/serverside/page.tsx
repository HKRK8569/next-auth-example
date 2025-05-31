import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LoginButton from "@/components/LoginButton";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <p>{session?.user?.name}</p>
      <LoginButton />
    </div>
  );
}
