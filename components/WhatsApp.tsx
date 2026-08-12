"use client";

import { useEffect, useState } from "react";

export default function WhatsApp() {
  const [whatsapp, setWhatsapp] = useState("254738422374");

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/settings");

        if (!res.ok) return;

        const data = await res.json();

        if (data.whatsapp) {
          // Remove +, spaces and other non-digit characters
          const number = data.whatsapp.replace(/\D/g, "");
          setWhatsapp(number);
        }
      } catch (error) {
        console.error(error);
      }
    }

    loadSettings();
  }, []);

  const message = encodeURIComponent(
    "Hello Davies Electrical. I found your website and would like a quotation for electrical services. Please contact me."
  );

  return (
    <a
      href={`https://wa.me/${whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      bg-green-500
      text-white
      w-16
      h-16
      rounded-full
      flex
      items-center
      justify-center
      text-3xl
      shadow-xl
      hover:scale-110
      transition
      z-50
      "
    >
      💬
    </a>
  );
}