"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export const HomeView = () => {
  const trpc= useTRPC();
  const{ data } = useQuery(trpc.hello.queryOptions({text: "Parth"}));

  return (
   <div className="p-4">
    {data?.greeting}
      </div>
  )
}

export default HomeView; 