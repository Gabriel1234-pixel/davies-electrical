"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export default function Navbar() {
  const [companyName, setCompanyName] = useState("Davies Electrical");

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/settings");

        if (!res.ok) return;

        const data = await res.json();

        if (data.company_name) {
          setCompanyName(data.company_name);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadSettings();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Zap className="text-yellow-400" size={32} />

          <h1 className="text-2xl font-bold">
            {companyName}
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <a href="#" className="hover:text-yellow-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-yellow-400 transition">
            Services
          </a>


          <a href="#contact" className="hover:text-yellow-400 transition">
            Contact
          </a>

          <a
            href="#booking"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Get Free Quote
          </a>

        </div>

      </div>
    </nav>
  );
}