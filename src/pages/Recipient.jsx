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
      { item, qty, status: "Pending", feedback: "" }
    ]);

    setItem("");
    setQty("");
  };

  const updateStatus = (index) => {
    const updated = [...requests];

    if (updated[index].status === "Pending")
      updated[index].status = "Approved";
    else if (updated[index].status === "Approved")
      updated[index].status = "Delivered";

    setRequests(updated);
  };

  const addFeedback = (index, text) => {
    const updated = [...requests];
    updated[index].feedback = text;
    setRequests(updated);
  };

  const statusColor = (status) => {
    if (status === "Pending") return "bg-yellow-500";
    if (status === "Approved") return "bg-blue-500";
    return "bg-green-600";
  };

  return (
    <Layout role="recipient">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-8 text-white">
        Recipient Dashboard
      </h1>

      {/* FORM CARD */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl mb-8">

        <h2 className="text-xl font-semibold mb-5 text-white">
          Request Essentials
        </h2>

        <div className="flex flex-wrap gap-4">

          <input
            className="bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg flex-1 outline-none"
            placeholder="Item needed"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <input
            type="number"
            className="bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg w-32 outline-none"
            placeholder="Qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <button
            onClick={addRequest}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Request
          </button>

        </div>
      </div>

      {/* REQUEST LIST CARD */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl">

        <h2 className="text-xl font-semibold mb-6 text-white">
          Your Requests
        </h2>

        {requests.length === 0 && (
          <p className="text-gray-300">
            No requests yet.
          </p>
        )}

        {requests.map((r, i) => (
          <div key={i} className="border-b border-white/20 py-5">

            <div className="flex justify-between items-center">

              <div>
                <p className="font-semibold text-white text-lg">
                  {r.item}
                </p>
                <p className="text-sm text-gray-300">
                  Qty: {r.qty}
                </p>
              </div>

              <button
                onClick={() => updateStatus(i)}
                className={`${statusColor(r.status)} text-white px-4 py-1 rounded-full text-sm font-semibold`}
              >
                {r.status}
              </button>

            </div>

            {/* FEEDBACK */}
            {r.status === "Delivered" && (
              <div className="mt-4">

                <input
                  placeholder="Give feedback..."
                  className="bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded w-full outline-none"
                  onBlur={(e) => addFeedback(i, e.target.value)}
                />

                {r.feedback && (
                  <p className="text-green-400 text-sm mt-2">
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
