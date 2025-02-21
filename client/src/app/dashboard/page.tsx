'use client'

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Not signed in</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Welcome, {session.user?.name}!</h2>
      <p className="text-gray-500">Email: {session.user?.email}</p>
      {session.user?.image &&
      <Image
        src ={session.user?.image}
        alt="Profile"
        className="w-16 h-16 rounded-full mt-4"
      />
      }
      {/* Logout Button */}
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
