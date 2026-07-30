"use client";

import { Bell, Search, UserCircle } from "lucide-react";

export default function Topbar() {
  return (
    <header className="bg-white h-20 shadow flex items-center justify-between px-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to Davies Electrical Solutions
        </p>
      </div>

      <div className="flex items-center gap-6">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search..."
            className="border rounded-full pl-10 pr-4 py-2 w-72"
          />

        </div>

        <Bell className="cursor-pointer" />

        <UserCircle size={36} />

      </div>

    </header>
  );
}