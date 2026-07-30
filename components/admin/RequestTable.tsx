"use client";

interface Request {
  id: number;
  name: string;
  phone: string;
  service: string;
  message: string;
  status: string;
  created_at: string;
}

interface Props {
  requests: Request[];
  updateStatus: (id: number, status: string) => void;
  deleteRequest: (id: number) => void;
}

export default function RequestTable({
  requests,
  updateStatus,
  deleteRequest,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-4 text-left">Customer</th>
            <th className="text-left">Phone</th>
            <th className="text-left">Service</th>
            <th className="text-left">Message</th>
            <th className="text-left">Status</th>
            <th className="text-left">Date</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {requests.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="text-center py-8 text-gray-500"
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

                <td className="max-w-xs truncate">
                  {request.message}
                </td>

                <td>
                  <select
                    value={request.status}
                    onChange={(e) =>
                      updateStatus(
                        request.id,
                        e.target.value
                      )
                    }
                    className="border rounded-lg px-3 py-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">
                      Processing
                    </option>
                    <option value="Completed">
                      Completed
                    </option>
                    <option value="Cancelled">
                      Cancelled
                    </option>
                  </select>
                </td>

                <td>
                  {new Date(
                    request.created_at
                  ).toLocaleDateString()}
                </td>

                <td className="text-center space-x-2">
                  <button
                    onClick={() => alert(request.message)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg"
                  >
                    View
                  </button>

                  <button
                    onClick={() =>
                      deleteRequest(request.id)
                    }
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}