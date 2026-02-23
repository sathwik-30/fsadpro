import { useState } from "react";
import Layout from "../components/Layout";

function Recipient() {

  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [requests, setRequests] = useState([]);

  const addRequest = () => {
    if (!item || !qty) return;

    setRequests([
      ...requests,
      {
        item,
        qty,
        status: "Pending",
        feedback: ""
      }
    ]);

    setItem("");
    setQty("");
  };

  // Simulate delivery progress
  const updateStatus = (index) => {
    const updated = [...requests];

    if (updated[index].status === "Pending")
      updated[index].status = "Approved";
    else if (updated[index].status === "Approved")
      updated[index].status = "Delivered";

    setRequests(updated);
  };

  // Add feedback
  const addFeedback = (index, text) => {
    const updated = [...requests];
    updated[index].feedback = text;
    setRequests(updated);
  };

  return (
    <Layout>

      <h1 className="text-3xl font-bold mb-6">
        Recipient Dashboard
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Request Essentials
        </h2>

        <div className="flex gap-3">

          <input
            className="border p-3 rounded-lg flex-1"
            placeholder="Item needed"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <input
            type="number"
            className="border p-3 rounded-lg w-32"
            placeholder="Qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <button
            onClick={addRequest}
            className="bg-blue-600 text-white px-6 rounded-lg"
          >
            Request
          </button>

        </div>

      </div>

      {/* REQUEST LIST */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Your Requests
        </h2>

        {requests.length === 0 && (
          <p className="text-gray-500">
            No requests yet.
          </p>
        )}

        {requests.map((r, i) => (
          <div key={i} className="border-b py-4">

            <div className="flex justify-between items-center">

              <div>
                <p className="font-medium">{r.item}</p>
                <p className="text-sm text-gray-500">
                  Qty: {r.qty}
                </p>
              </div>

              <button
                onClick={() => updateStatus(i)}
                className="bg-indigo-500 text-white px-3 py-1 rounded text-sm"
              >
                {r.status}
              </button>

            </div>

            {/* Feedback Section */}
            {r.status === "Delivered" && (
              <div className="mt-3">

                <input
                  placeholder="Give feedback..."
                  className="border p-2 rounded w-full"
                  onBlur={(e) => addFeedback(i, e.target.value)}
                />

                {r.feedback && (
                  <p className="text-green-600 text-sm mt-2">
                    Feedback: {r.feedback}
                  </p>
                )}

              </div>
            )}

          </div>
        ))}

      </div>

    </Layout>
  );
}

export default Recipient;