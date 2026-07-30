"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";
import DashboardCard from "@/components/admin/DashboardCard";

interface Request {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

export default function Dashboard() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRequests() {
      try {
        const res = await fetch("/api/service-requests");
        const data = await res.json();

        console.log("Dashboard Data:", data);

        if (Array.isArray(data)) {
          setRequests(data);
        } else {
          console.error("API did not return an array:", data);
          setRequests([]);
        }
      } catch (error) {
        console.error("Failed to load requests:", error);
        setRequests([]);
      } finally {
        setLoading(false);
      }
    }

    loadRequests();
  }, []);

  const pending = requests.filter(
    (r) => r.status === "Pending"
  ).length;

  const completed = requests.filter(
    (r) => r.status === "Completed"
  ).length;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-8">

          <h1 className="text-3xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">

            <DashboardCard
              title="Total Requests"
              value={requests.length}
              color="text-blue-600"
            />

            <DashboardCard
              title="Pending Jobs"
              value={pending}
              color="text-yellow-500"
            />

            <DashboardCard
              title="Completed Jobs"
              value={completed}
              color="text-green-600"
            />

          </div>

          <div className="bg-white rounded-2xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-900 text-white">

                <tr>
                  <th className="p-4 text-left">Customer</th>
                  <th className="text-left">Phone</th>
                  <th className="text-left">Service</th>
                  <th className="text-left">Status</th>
                  <th className="text-left">Date</th>
                </tr>

              </thead>

              <tbody>

                {loading ? (

                  <tr>
                    <td
                      colSpan={5}
                      className="text-center p-8"
                    >
                      Loading...
                    </td>
                  </tr>

                ) : requests.length === 0 ? (

                  <tr>
                    <td
                      colSpan={5}
                      className="text-center p-8 text-gray-500"
                    >
                      No service requests found.
                    </td>
                  </tr>

                ) : (

                  requests.map((request) => (

                    <tr
                      key={request.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-4 font-medium">
                        {request.name}
                      </td>

                      <td>{request.phone}</td>

                      <td>{request.service}</td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            request.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : request.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {request.status}
                        </span>
                      </td>

                      <td>
                        {new Date(
                          request.created_at
                        ).toLocaleDateString()}
                      </td>
                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
}