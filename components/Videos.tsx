"use client";

export default function Videos() {
  return (
    <section id="videos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Installation Videos
          </h2>

          <p className="mt-4 text-gray-600">
            Watch some of our recent electrical installation projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <video
            controls
            className="w-full rounded-2xl shadow-lg"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>

      </div>
    </section>
  );
}