"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";

interface ExampleCardProps {
  title: string;
  content: string;
}

export default function ExampleCard({ title, content }: ExampleCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href="https://app.mailedit.aikyam.live" passHref>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative p-6 rounded-2xl border border-gray-700 shadow-md cursor-pointer overflow-hidden transition-all duration-300 bg-gray-900 text-white"
      >
        {isHovered ? (
          // Hover state - Show only input field
          <input
            type="email"
            placeholder="Send this mail to someone@example.com"
            className="w-full px-3 py-2 rounded-lg bg-gray-700 text-gray-300 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ) : (
          // Default state - Show title, content, and mail icon
          <>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-300 line-clamp-3">{content}</p>

            {/* Mail icon stays visible */}
            <div className="absolute bottom-4 right-4 text-gray-400">
              <Mail size={24} />
            </div>
          </>
        )}
      </div>
    </Link>
  );
}
