"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("");

    // Client-side validation
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.service.trim() ||
      !formData.message.trim()
    ) {
      setStatus("Please fill in all the required fields.");
      return;
    }

    // Simple phone validation
    const phoneRegex = /^[0-9+\-\s]{10,15}$/;

    if (!phoneRegex.test(formData.phone.trim())) {
      setStatus("Please enter a valid phone number.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/service-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("✅ Request submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section
  id="booking"
  className="py-24 px-8 bg-gray-950 text-white"
>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left Side */}
        <div>
          <p className="text-yellow-400 font-semibold">
            REQUEST SERVICE
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Need an Electrician?
          </h2>

          <p className="text-gray-400 mt-6">
            Contact Davies Electrical Solutions for reliable and
            professional electrical services.
          </p>

          <div className="mt-8 space-y-4 text-lg">
            <p>⚡ Electrical Installation</p>
            <p>🔧 Electrical Repairs</p>
            <p>☀️ Solar Installation</p>
            <p>🏢 Commercial Electrical Work</p>
            <p>📹 CCTV Installation</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white text-black rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6">
            Get a Free Quote
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
              required
            >
              <option value="">Select Service</option>
              <option value="Electrical Installation">
                Electrical Installation
              </option>
              <option value="Electrical Repair">
                Electrical Repair
              </option>
              <option value="Solar Installation">
                Solar Installation
              </option>
              <option value="Commercial Electrical">
                Commercial Electrical
              </option>
              <option value="CCTV Installation">
                CCTV Installation
              </option>
            </select>

            <textarea
              name="message"
              placeholder="Describe your project or problem"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border rounded-lg p-3"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 text-black py-3 rounded-lg font-bold flex justify-center items-center gap-2 transition"
            >
              {loading ? "Submitting..." : "Send Request"}

              {!loading && <Send size={20} />}
            </button>

            {status && (
              <div
                className={`mt-4 p-3 rounded-lg text-center font-semibold ${
                  status.startsWith("✅")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}