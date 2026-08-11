"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error);
        setLoading(false);
        return;
      }

      localStorage.setItem("admin", "true");

      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-2">
          Davies Electrical
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Admin Login
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg p-3"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold transition"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}