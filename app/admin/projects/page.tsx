"use client";

import { useEffect, useState } from "react";
import ProjectTable from "@/components/admin/ProjectTable";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [imageFile, setImageFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  async function loadProjects() {
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();

      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);
function editProject(project: Project) {
  setEditingId(project.id);
  setTitle(project.title);
  setCategory(project.category);
  setDescription(project.description);
}
  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      let image = "";

      if (imageFile) {
        const formData = new FormData();
        formData.append("file", imageFile);

        const upload = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });

        const uploadData = await upload.json();

        if (!upload.ok) {
          alert(uploadData.error);
          setLoading(false);
          return;
        }

        image = uploadData.image;
      }

      const res = await fetch("/api/projects", {
  method: editingId ? "PUT" : "POST",

  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify({
    id: editingId,
    title,
    category,
    description,
    image,
  }),
});

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        setLoading(false);
        return;
      }

      alert("Project added successfully.");

      setTitle("");
      setCategory("");
      setDescription("");
      setImageFile(null);
setEditingId(null);
      loadProjects();

    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  async function deleteProject(id: number) {
    if (!confirm("Delete this project?")) return;

    try {
      await fetch("/api/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      loadProjects();

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        Projects Management
      </h1>
      

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 mb-10 space-y-5"
      >

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="w-full border rounded-lg p-3"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <textarea
          rows={5}
          className="w-full border rounded-lg p-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-3"
          onChange={(e) => {
            if (e.target.files) {
              setImageFile(e.target.files[0]);
            }
          }}
        />

        <button
          disabled={loading}
          className="bg-yellow-400 hover:bg-yellow-500 px-8 py-3 rounded-lg font-semibold"
        >
          {loading ? "Uploading..." : "Add Project"}
        </button>

      </form>

      <ProjectTable
  projects={projects}
  onDelete={deleteProject}
  onEdit={(project) => {
    console.log(project);
  }}
/>

    </div>
  );
}