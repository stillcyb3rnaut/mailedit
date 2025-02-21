"use client";

import Link from "next/link";
import { WandSparkles } from "lucide-react";

export function AICard({ height }: { height: string }) {
  return (
    <Link href="https://app.mailedit.aikyam.live" target="_blank ">
      <div
        className={`w-[250px] bg-black border border-gray-600 text-white flex flex-col items-center justify-center rounded-2xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer p-6 hover:text-green-500`}
        style={{ height: height }} 
      >
        <div className="flex flex-col items-center ">
          <WandSparkles className="w-16 h-16 text-blue-400 " />
          <h2 className="mt-4 text-xl font-bold">Generate with AI</h2>
          <p className="mt-2 text-gray-400 text-sm text-center">
            Click to create AI-powered emails.
          </p>
        </div>
      </div>
    </Link>
  );
}
