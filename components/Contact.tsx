"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-8 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold uppercase tracking-wider">
            CONTACT US
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Have an electrical project? Contact Davies Electrical Solutions today.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Phone */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <Phone className="text-yellow-500 mb-5" size={38} />

            <h3 className="text-2xl font-bold text-gray-900">
              Call Us
            </h3>

            <a
              href="tel:+254738422374"
              className="text-gray-600 mt-3 block hover:text-yellow-500"
            >
              +254 738422374
            </a>

          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <Mail className="text-yellow-500 mb-5" size={38} />

            <h3 className="text-2xl font-bold text-gray-900">
              Email
            </h3>

            <a
              href="mailto:davidvince026@gmail.com"
              className="text-gray-600 mt-3 block hover:text-yellow-500"
            >
              davidvince026@gmail.com
            </a>

          </div>

          {/* Address */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <MapPin className="text-yellow-500 mb-5" size={38} />

            <h3 className="text-2xl font-bold text-gray-900">
              Address
            </h3>

            <p className="text-gray-600 mt-3">
              Nairobi, Kenya
            </p>

          </div>

          {/* Business Hours */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

            <Clock className="text-yellow-500 mb-5" size={38} />

            <h3 className="text-2xl font-bold text-gray-900">
              Business Hours
            </h3>

            <p className="text-gray-600 mt-3">
              Mon - Sat : 8:00 AM - 8:00 PM
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}