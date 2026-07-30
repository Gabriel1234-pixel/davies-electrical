"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ClipboardList,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Service Requests",
    href: "/admin/requests",
    icon: ClipboardList,
  },
  {
    title: "Projects",
    href: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
  
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gray-950 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold text-yellow-400 mb-10">
        ⚡ Davies Electrical
      </h1>

      <nav className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-yellow-400 hover:text-black transition"
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <button
  onClick={() => {
    localStorage.removeItem("admin");
    window.location.href = "/admin/login";
  }}
  className="mt-12 flex items-center gap-3 text-red-400 hover:text-red-300"
>
  <LogOut size={20} />
  Logout
</button>
    </aside>
  );
}