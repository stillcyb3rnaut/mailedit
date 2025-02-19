"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

interface ExampleCardProps {
  title: string;
  content: string;
}

export default function ExampleCard({ title, content }: ExampleCardProps) {
  return (
    <Link href="https://app.mailedit.aikyam.live" passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative p-6 bg-gray-900 text-white rounded-2xl border border-gray-700 shadow-md cursor-pointer overflow-hidden"
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 line-clamp-3">{content}</p>

        {/* Mail icon appears on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 right-4 text-gray-400"
        >
          <Mail size={24} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
