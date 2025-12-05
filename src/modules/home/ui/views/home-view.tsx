"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const HomeView = () => {
  const router = useRouter();
  const {data: session} = authClient.useSession();

  if (!session) {
    return (
      <p>Loading....</p>
    )
  }


  return (
   <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome, {session.user.name}!</h1>
        <Button className="mt-4" onClick={() => authClient.signOut({
          fetchOptions: {
            onSuccess: async () => { await router.push("/sign-in"); }}
          })
          }>Sign Out</Button>
      </div>
  )
}

export default HomeView; 