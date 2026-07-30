"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string | null;
}

const fallbackProjects = [
  {
    title: "Residential Electrical Installation",
    image: "/projects/electrical-installation.jpg",
    description:
      "Complete house wiring, socket installation and lighting solutions.",
  },
  {
    title: "Solar Power Installation",
    image: "/projects/solar-installation.jpg",
    description:
      "Professional solar panel installation and backup power systems.",
  },
  {
    title: "CCTV Installation",
    image: "/projects/cctv-installation.jpg",
    description:
      "Modern surveillance systems for homes, schools and businesses.",
  },
  {
    title: "Commercial Electrical Works",
    image: "/projects/commercial-electrical.jpg",
    description:
      "Electrical installation for offices, shops and commercial buildings.",
  },
  {
    title: "Electrical Panel Upgrade",
    image: "/projects/panel-upgrade.jpg",
    description:
      "Safe distribution board upgrades with circuit protection.",
  },
  {
    title: "Indoor & Outdoor Lighting",
    image: "/projects/lighting-installation.jpg",
    description:
      "Energy-efficient lighting systems for homes and businesses.",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          setProjects(
            data.map((project: any) => ({
              id: project.id,
              title: project.title,
              category: project.category,
              description: project.description,
              image: project.image || null,
            }))
          );
        } else {
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to load projects", error);
      }
    }

    fetchProjects();
  }, []);

  const displayedProjects =
    projects.length > 0 ? projects : fallbackProjects.map((project, index) => ({
      id: index,
      title: project.title,
      category: "",
      description: project.description,
      image: project.image,
    }));

  return (
    <section id="projects" className="py-24 bg-gray-100 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold">OUR PROJECTS</p>
          <h2 className="text-5xl font-bold mt-3">Davies Electrical Portfolio</h2>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            We provide reliable electrical, solar and CCTV installation services
            across residential and commercial properties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image ?? "/projects/electrical-installation.jpg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-3">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}