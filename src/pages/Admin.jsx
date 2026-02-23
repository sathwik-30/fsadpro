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

  // Change request status
  const approveRequest = (index) => {
    const updated = [...requests];
    updated[index].status = "Approved";
    setRequests(updated);
  };

  // Add new drive
  const addDrive = () => {
    if (!newDrive) return;
    setDrives([...drives, newDrive]);
    setNewDrive("");
  };

  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-8 text-gray-800">
        Admin Dashboard
      </h1>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-blue-500 text-white p-6 rounded-2xl">
          <p>Total Donations</p>
          <h2 className="text-3xl">{donations.length}</h2>
        </div>

        <div className="bg-green-500 text-white p-6 rounded-2xl">
          <p>Requests</p>
          <h2 className="text-3xl">{requests.length}</h2>
        </div>

        <div className="bg-purple-500 text-white p-6 rounded-2xl">
          <p>Active Drives</p>
          <h2 className="text-3xl">{drives.length}</h2>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-2xl">
          <p>Delivery Rate</p>
          <h2 className="text-3xl">
            {Math.floor(
              (requests.filter(r => r.status === "Approved").length /
                requests.length) * 100
            ) || 0}%
          </h2>
        </div>
      </div>

      {/* Manage Drives */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl mb-4">Manage Drives</h2>

        <div className="flex gap-3 mb-4">
          <input
            value={newDrive}
            onChange={(e) => setNewDrive(e.target.value)}
            placeholder="Enter drive name"
            className="border p-2 rounded w-full"
          />
          <button
            onClick={addDrive}
            className="bg-indigo-600 text-white px-4 rounded"
          >
            Add
          </button>
        </div>

        {drives.map((d, i) => (
          <div key={i} className="p-3 bg-indigo-50 rounded mb-2">
            {d}
          </div>
        ))}
      </div>

      {/* Donations */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="text-xl mb-4">Recent Donations</h2>

        {donations.map((d, i) => (
          <div key={i} className="p-4 bg-blue-50 rounded mb-3 flex justify-between">
            {d.name}
            <span className="bg-blue-500 text-white px-3 py-1 rounded">
              {d.status}
            </span>
          </div>
        ))}
      </div>

      {/* Requests */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl mb-4">Recipient Requests</h2>

        {requests.map((r, i) => (
          <div key={i} className="p-4 bg-green-50 rounded mb-3 flex justify-between items-center">
            {r.name}

            {r.status === "Pending" ? (
              <button
                onClick={() => approveRequest(i)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Approve
              </button>
            ) : (
              <span className="bg-green-500 text-white px-3 py-1 rounded">
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