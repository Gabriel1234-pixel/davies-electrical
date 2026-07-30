"use client";

import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [settings, setSettings] = useState({
    phone: "",
    email: "",
    address: "",
    businessHours: "",
  });

  useEffect(() => {
    async function loadSettings() {
      try {
        const res = await fetch("/api/settings");

        if (!res.ok) return;

        const data = await res.json();

        setSettings({
          phone: data.phone || "",
          email: data.email || "",
          address: data.address || "",
          businessHours: data.business_hours || "",
        });
      } catch (error) {
        console.error(error);
      }
    }

    loadSettings();
  }, []);

  return (
    <section
      id="contact"
      className="py-24 px-8 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-semibold">
            CONTACT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-600 mt-5">
            Have an electrical project? Contact Davies Electrical Solutions today.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {/* Phone */}

          <div className="bg-white p-8 rounded-3xl shadow">

            <Phone className="text-yellow-500 mb-5" size={35} />

            <h3 className="font-bold text-xl">
              Call Us
            </h3>

            <p className="text-gray-600 mt-2">
              {settings.phone}
            </p>

          </div>

          {/* Email */}

          <div className="bg-white p-8 rounded-3xl shadow">

            <Mail className="text-yellow-500 mb-5" size={35} />

            <h3 className="font-bold text-xl">
              Email
            </h3>

            <p className="text-gray-600 mt-2 break-all">
              {settings.email}
            </p>

          </div>

          {/* Address */}

          <div className="bg-white p-8 rounded-3xl shadow">

            <MapPin className="text-yellow-500 mb-5" size={35} />

            <h3 className="font-bold text-xl">
              Address
            </h3>

            <p className="text-gray-600 mt-2">
              {settings.address}
            </p>

          </div>

          {/* Business Hours */}

          <div className="bg-white p-8 rounded-3xl shadow">

            <Clock className="text-yellow-500 mb-5" size={35} />

            <h3 className="font-bold text-xl">
              Business Hours
            </h3>

            <p className="text-gray-600 mt-2">
              {settings.businessHours}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}