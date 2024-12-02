import { SessionWrapper } from "@/components/SessionWrapper";
import SignOutPage from "@/components/login/SignOutComp";
import SignInPage from "@/components/login/LoginComp";
import { auth } from "./lib/auth";
export default async function Home() {
  const session = await auth();
  const isAuthentication = !!session?.user;
  return (
    <div>
      <SessionWrapper>
        {isAuthentication ? <SignOutPage /> : <SignInPage />}
      </SessionWrapper>
    </div>
  );
}
