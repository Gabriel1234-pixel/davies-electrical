import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    image: "/images/gallery/gallery1.jpg",
    title: "House Wiring",
  },
  {
    id: 2,
    image: "/images/gallery/gallery2.jpg",
    title: "Electrical Installation",
  },
  {
    id: 3,
    image: "/images/gallery/gallery3.jpg",
    title: "Distribution Board",
  },
  {
    id: 4,
    image: "/images/gallery/gallery4.jpg",
    title: "Solar Installation",
  },
  {
    id: 5,
    image: "/images/gallery/gallery5.jpg",
    title: "Lighting Installation",
  },
  {
    id: 6,
    image: "/images/gallery/gallery6.jpg",
    title: "Commercial Electrical",
  },
  {
    id: 7,
    image: "/images/gallery/gallery7.jpg",
    title: "Generator Installation",
  },
  {
    id: 8,
    image: "/images/gallery/gallery8.jpg",
    title: "Electrical Maintenance",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            Our Gallery
          </h1>

          <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
            Explore some of our completed electrical projects,
            installations, repairs and commercial work.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}