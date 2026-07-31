"use client";

import {
  ShieldCheck,
  Clock,
  Award,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Qualified Electricians",
    description:
      "Our team provides safe and professional electrical solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    description:
      "Quick assistance for installations, repairs and maintenance.",
    icon: Clock,
  },
  {
    title: "Quality Work",
    description:
      "We use reliable materials and follow safety standards.",
    icon: Award,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Trusted by homeowners and businesses.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold uppercase tracking-wider">
            WHY CHOOSE US
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3">
            Reliable Electrical Experts
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver safe, reliable and professional electrical services for
            homes, businesses and commercial projects.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}