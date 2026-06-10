"use client";

import {
  Home,
  BookOpen,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-24 flex-col items-center border-r border-zinc-800 bg-zinc-950 py-8">

      <div className="mb-12 text-xl font-bold">
        N
      </div>

      <nav className="flex flex-col gap-8">

        <Home className="cursor-pointer hover:text-blue-400" />

        <BookOpen className="cursor-pointer hover:text-blue-400" />

        <BarChart3 className="cursor-pointer hover:text-blue-400" />

        <Settings className="cursor-pointer hover:text-blue-400" />

      </nav>

    </aside>
  );
}