"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function CheckSession() {
  const { data: session, status } = useSession();

  useEffect(() => {}, [status]);

  return (
    <div>
      <h1 className="text-3xl text-red-600">
        Ini website font menggunakan geistSans {session?.user?.name}
      </h1>
      <h1 className="text-3xl text-red-600 font-geist-mono">
        Ini website font menggunakan geistMono
      </h1>
    </div>
  );
}
