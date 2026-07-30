"use client";

import { useEffect, useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    companyName: "",
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    heroTitle: "",
    heroSubtitle: "",
    businessHours: "",
    location: "",
    googleMap: "",
    facebook: "",
    instagram: "",
    linkedin: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      const res = await fetch("/api/settings");
      const data = await res.json();

      setSettings({
        companyName: data.company_name || "",
        phone: data.phone || "",
        whatsapp: data.whatsapp || "",
        email: data.email || "",
        address: data.address || "",
        heroTitle: data.hero_title || "",
        heroSubtitle: data.hero_subtitle || "",
        businessHours: data.business_hours || "",
        location: data.location || "",
        googleMap: data.google_map || "",
        facebook: data.facebook || "",
        instagram: data.instagram || "",
        linkedin: data.linkedin || "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to load settings.");
    }

    setLoading(false);
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  }

  async function saveSettings() {
    try {
      const res = await fetch("/api/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Settings saved successfully!");
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save settings.");
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading Settings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Website Settings
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-10">

        {/* Company Information */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Company Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              name="companyName"
              value={settings.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="border rounded-lg p-3"
            />

            <input
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border rounded-lg p-3"
            />

            <input
              name="whatsapp"
              value={settings.whatsapp}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className="border rounded-lg p-3"
            />

            <input
              name="email"
              value={settings.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border rounded-lg p-3"
            />

          </div>

        </div>

        {/* Address */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Office Address
          </h2>

          <textarea
            name="address"
            value={settings.address}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded-lg p-3"
          />

        </div>

        {/* Hero */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Homepage
          </h2>

          <input
            name="heroTitle"
            value={settings.heroTitle}
            onChange={handleChange}
            placeholder="Hero Title"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <textarea
            name="heroSubtitle"
            value={settings.heroSubtitle}
            onChange={handleChange}
            rows={4}
            placeholder="Hero Subtitle"
            className="w-full border rounded-lg p-3"
          />

        </div>

        {/* Business Hours */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Business Hours
          </h2>

          <input
            name="businessHours"
            value={settings.businessHours}
            onChange={handleChange}
            placeholder="Business Hours"
            className="w-full border rounded-lg p-3"
          />

        </div>

        {/* Location */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Office Location
          </h2>

          <input
            name="location"
            value={settings.location}
            onChange={handleChange}
            placeholder="Office Location"
            className="w-full border rounded-lg p-3 mb-4"
          />

          <textarea
            name="googleMap"
            value={settings.googleMap}
            onChange={handleChange}
            rows={4}
            placeholder="Google Maps Embed Link"
            className="w-full border rounded-lg p-3"
          />

        </div>

        {/* Social Media */}

        <div>

          <h2 className="text-2xl font-bold mb-4">
            Social Media
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <input
              name="facebook"
              value={settings.facebook}
              onChange={handleChange}
              placeholder="Facebook Link"
              className="border rounded-lg p-3"
            />

            <input
              name="instagram"
              value={settings.instagram}
              onChange={handleChange}
              placeholder="Instagram Link"
              className="border rounded-lg p-3"
            />

            <input
              name="linkedin"
              value={settings.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn Link"
              className="border rounded-lg p-3"
            />

          </div>

        </div>

        <button
          onClick={saveSettings}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold"
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}