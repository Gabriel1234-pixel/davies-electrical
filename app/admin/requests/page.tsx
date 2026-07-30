"use client";

import { useEffect, useState } from "react";
import RequestTable from "@/components/admin/RequestTable";

interface Request {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

export default function RequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [search, setSearch] = useState("");

  async function loadRequests() {
    try {
      const res = await fetch("/api/service-requests");

      if (!res.ok) {
        throw new Error("Failed to load requests");
      }

      const data = await res.json();
      setRequests(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function updateStatus(id: number, status: string) {
    try {
      const res = await fetch("/api/service-requests", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          status,
        }),
      });

      if (res.ok) {
        loadRequests();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteRequest(id: number) {
    const confirmed = confirm(
      "Are you sure you want to delete this request?"
    );

    if (!confirmed) return;

    try {
      const res = await fetch("/api/service-requests", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (res.ok) {
        loadRequests();
      } else {
        alert("Failed to delete request.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  }

  const filteredRequests = requests.filter(
    (request) =>
      request.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      request.phone.includes(search) ||
      request.service
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">
        Service Requests
      </h1>

      <input
        type="text"
        placeholder="Search by customer, phone or service..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 border rounded-lg p-3 mb-6"
      />

      <RequestTable
        requests={filteredRequests}
        updateStatus={updateStatus}
        deleteRequest={deleteRequest}
      />
    </div>
  );
}