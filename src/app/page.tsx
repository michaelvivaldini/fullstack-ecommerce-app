"use client"

import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <img src={data?.user?.image}/>
      <h2>{data?.user?.name}</h2>
      <span>{data?.user?.email}</span>
    </main>
  );
}
