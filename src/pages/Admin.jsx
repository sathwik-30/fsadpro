import { useState } from "react";
import Layout from "../components/Layout";

function Admin() {
  const [donations] = useState([
    { name: "Rice Bags", status: "Received" },
    { name: "Clothes", status: "Received" },
    { name: "Water Bottles", status: "Received" }
  ]);

  const [requests, setRequests] = useState([
    { name: "Blankets", status: "Pending" },
    { name: "Medicine Kits", status: "Pending" },
    { name: "Food Packets", status: "Pending" }
  ]);

  const [drives, setDrives] = useState(["Flood Relief Drive"]);
  const [newDrive, setNewDrive] = useState("");

  const approveRequest = (index) => {
    const updated = [...requests];
    updated[index].status = "Approved";
    setRequests(updated);
  };

  const addDrive = () => {
    if (!newDrive) return;
    setDrives([...drives, newDrive]);
    setNewDrive("");
  };

  return (
    <Layout role="admin">
      <h1 className="mb-10 text-4xl font-bold text-white">Admin Dashboard</h1>

      <div className="mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
          <p className="text-gray-300">Total Donations</p>
          <h2 className="text-3xl font-bold">{donations.length}</h2>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
          <p className="text-gray-300">Requests</p>
          <h2 className="text-3xl font-bold">{requests.length}</h2>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
          <p className="text-gray-300">Active Drives</p>
          <h2 className="text-3xl font-bold">{drives.length}</h2>
        </div>

        <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-lg">
          <p className="text-gray-300">Delivery Rate</p>
          <h2 className="text-3xl font-bold text-green-400">
            {Math.floor(
              (requests.filter((r) => r.status === "Approved").length / requests.length) * 100
            ) || 0}
            %
          </h2>
        </div>
      </div>

      <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg">
        <h2 className="mb-5 text-xl text-white">Manage Drives</h2>

        <div className="mb-5 flex flex-wrap gap-3">
          <input
            value={newDrive}
            onChange={(e) => setNewDrive(e.target.value)}
            placeholder="Enter drive name"
            className="w-full rounded border border-white/20 bg-white/10 p-3 text-white placeholder-gray-300 outline-none"
          />

          <button
            onClick={addDrive}
            className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Add
          </button>
        </div>

        {drives.map((d, i) => (
          <div key={i} className="mb-2 rounded border border-white/20 bg-white/10 p-3 text-white">
            {d}
          </div>
        ))}
      </div>

      <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg">
        <h2 className="mb-5 text-xl text-white">Recent Donations</h2>

        {donations.map((d, i) => (
          <div
            key={i}
            className="mb-3 flex justify-between rounded border border-white/20 bg-white/10 p-4 text-white"
          >
            {d.name}

            <span className="rounded bg-blue-500 px-3 py-1">{d.status}</span>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg">
        <h2 className="mb-5 text-xl text-white">Recipient Requests</h2>

        {requests.map((r, i) => (
          <div
            key={i}
            className="mb-3 flex items-center justify-between rounded border border-white/20 bg-white/10 p-4 text-white"
          >
            {r.name}

            {r.status === "Pending" ? (
              <button
                onClick={() => approveRequest(i)}
                className="rounded-lg bg-green-600 px-4 py-1 text-white transition-colors hover:bg-green-700"
              >
                Approve
              </button>
            ) : (
              <span className="rounded bg-green-500 px-4 py-1">Approved</span>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Admin;
