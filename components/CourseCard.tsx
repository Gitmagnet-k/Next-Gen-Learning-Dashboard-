"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

type Props = {
  title: string;
  progress: number;
};

export default function CourseCard({ title, progress }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <div className="absolute inset-0 bg-linear-to-brbr from-blue-500/5 to-purple-500/5" />

      <BookOpen size={28} className="mb-4 text-blue-400" />

      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="mt-6 h-2 rounded-full bg-zinc-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5 }}
          className="h-2 rounded-full bg-linear-to-r from-blue-500 to-cyan-400"
        />
      </div>

      <p className="mt-3 text-zinc-400">
        {progress}% Complete
      </p>
    </motion.article>
  );
}