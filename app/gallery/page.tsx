"use client";

import { useState } from "react";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = Array.from({ length: 29 }, (_, index) => ({
  id: index + 1,
  image: `/images/gallery/gallery${index + 1}.jpg`,
}));

export default function GalleryPage() {
  const [index, setIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Gallery</h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Explore some of our completed electrical work,
            installations, repairs and commercial work.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setIndex(item.id - 1)}
              className="cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-72 object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={galleryImages.map((item) => ({
          src: item.image,
        }))}
      />
    </main>
  );
}