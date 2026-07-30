"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Hero() {
  const [settings, setSettings] = useState({
    heroTitle: "Powering Homes With Smart Energy Solutions",
    heroSubtitle:
      "Davies Electrical Solutions provides modern electrical installation, solar systems, repairs and CCTV installation.",
  });

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/settings");

        if (!res.ok) return;

        const data = await res.json();

        setSettings({
          heroTitle:
            data.hero_title ||
            "Powering Homes With Smart Energy Solutions",
          heroSubtitle:
            data.hero_subtitle ||
            "Davies Electrical Solutions provides modern electrical installation, solar systems, repairs and CCTV installation.",
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadSettings();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white flex items-center px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-yellow-400 mb-5">
            <Zap />
            <p>Professional Electrical Experts</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {settings.heroTitle}
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            {settings.heroSubtitle}
          </p>

          <div className="mt-8 flex gap-5">
            <a
              href="#booking"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
            >
              Get Free Quote
            </a>

            <a
              href="#services"
              className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        {/* Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="h-96 bg-gray-800 rounded-3xl flex items-center justify-center text-8xl">
            ⚡
          </div>
        </motion.div>

      </div>
    </section>
  );
}