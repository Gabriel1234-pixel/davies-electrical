"use client";

import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

interface Props {
  projects: Project[];
  onDelete: (id: number) => void;
  onEdit: (project: Project) => void;
}

export default function ProjectTable({
  projects,
  onDelete,
  onEdit,
}: Props): import("react").JSX.Element {
  if (projects.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
        No projects found.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full">

        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-left">Category</th>
            <th className="text-left">Description</th>
            <th className="text-left">Actions</th>
          </tr>
        </thead>

        <tbody>

          {projects.map((project) => (

            <tr
              key={project.id}
              className="border-b hover:bg-gray-50"
            >

              <td className="p-4">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={80}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <span className="text-gray-400">
                    No Image
                  </span>
                )}
              </td>

              <td className="font-semibold">
                {project.title}
              </td>

              <td>{project.category}</td>

              <td className="max-w-xs truncate">
                {project.description}
              </td>

              <td>
                <button
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mr-2"
  onClick={() => onEdit(project)}
>
  Edit
</button>

                <button
                  onClick={() => onDelete(project.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}