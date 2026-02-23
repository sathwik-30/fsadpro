import { useState } from "react";
import Layout from "../components/Layout";

function Admin() {
  const [donations, setDonations] = useState([
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
    <Layout role="admin"> {/* ⭐ IMPORTANT CHANGE HERE */}

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-10 text-white">
        Admin Dashboard
      </h1>

      {/* STATS */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-2xl">
          <p className="text-gray-300">Total Donations</p>
          <h2 className="text-3xl font-bold">{donations.length}</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-2xl">
          <p className="text-gray-300">Requests</p>
          <h2 className="text-3xl font-bold">{requests.length}</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-2xl">
          <p className="text-gray-300">Active Drives</p>
          <h2 className="text-3xl font-bold">{drives.length}</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 text-white p-6 rounded-2xl">
          <p className="text-gray-300">Delivery Rate</p>
          <h2 className="text-3xl font-bold text-green-400">
            {Math.floor(
              (requests.filter(r => r.status === "Approved").length /
                requests.length) * 100
            ) || 0}%
          </h2>
        </div>

      </div>

      {/* DRIVES */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl mb-8">

        <h2 className="text-xl mb-5 text-white">Manage Drives</h2>

        <div className="flex gap-3 mb-5">
          <input
            value={newDrive}
            onChange={(e) => setNewDrive(e.target.value)}
            placeholder="Enter drive name"
            className="bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded w-full outline-none"
          />

          <button
            onClick={addDrive}
            className="bg-indigo-600 text-white px-5 rounded-lg font-semibold"
          >
            Add
          </button>
        </div>

        {drives.map((d, i) => (
          <div key={i} className="p-3 bg-white/10 border border-white/20 rounded mb-2 text-white">
            {d}
          </div>
        ))}

      </div>

      {/* DONATIONS */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl mb-8">

        <h2 className="text-xl mb-5 text-white">Recent Donations</h2>

        {donations.map((d, i) => (
          <div
            key={i}
            className="p-4 bg-white/10 border border-white/20 rounded mb-3 flex justify-between text-white"
          >
            {d.name}

            <span className="bg-blue-500 px-3 py-1 rounded">
              {d.status}
            </span>
          </div>
        ))}

      </div>

      {/* REQUESTS */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl">

        <h2 className="text-xl mb-5 text-white">Recipient Requests</h2>

        {requests.map((r, i) => (
          <div
            key={i}
            className="p-4 bg-white/10 border border-white/20 rounded mb-3 flex justify-between items-center text-white"
          >
            {r.name}

            {r.status === "Pending" ? (
              <button
                onClick={() => approveRequest(i)}
                className="bg-green-600 text-white px-4 py-1 rounded-lg"
              >
                Approve
              </button>
            ) : (
              <span className="bg-green-500 px-4 py-1 rounded">
                Approved
              </span>
            )}

          </div>
        ))}

      </div>

    </Layout>
  );
}

export default Admin;