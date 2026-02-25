import { useState } from "react";
import Layout from "../components/Layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

function Admin() {

  const [donations] = useState([
    { name: "Rice Bags", status: "Received" },
    { name: "Clothes", status: "Received" },
    { name: "Water Bottles", status: "Received" }
  ]);

  const [requests] = useState([
    { name: "Blankets", status: "Pending" },
    { name: "Medicine Kits", status: "Approved" },
    { name: "Food Packets", status: "Approved" }
  ]);

  const [search, setSearch] = useState("");

  const donationData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 40 },
    { month: "Apr", value: 28 },
    { month: "May", value: 50 }
  ];

  const requestStatusData = [
    { name: "Approved", value: 2 },
    { name: "Pending", value: 1 }
  ];

  const COLORS = ["#3b82f6", "#facc15"];

  return (
    <Layout role="admin">

      <h1 className="text-4xl font-bold mb-10">
        Admin Control Panel
      </h1>

      {/* STAT CARDS */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-12">

        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <p className="text-gray-300">Total Donations</p>
          <h2 className="text-3xl font-bold">{donations.length}</h2>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <p className="text-gray-300">Total Requests</p>
          <h2 className="text-3xl font-bold">{requests.length}</h2>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <p className="text-gray-300">Approved Requests</p>
          <h2 className="text-3xl font-bold text-green-400">
            {requests.filter(r => r.status === "Approved").length}
          </h2>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <p className="text-gray-300">Active Users</p>
          <h2 className="text-3xl font-bold text-blue-400">
            24
          </h2>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid gap-10 lg:grid-cols-2 mb-12">

        {/* LINE CHART */}
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <h2 className="text-xl mb-4">Monthly Donation Trend</h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={donationData}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
          <h2 className="text-xl mb-4">Request Status</h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={requestStatusData} dataKey="value" outerRadius={100}>
                {requestStatusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* SEARCH + ACTIVITY */}
      <div className="bg-white/10 p-6 rounded-2xl border border-white/20">

        <h2 className="text-xl mb-6">Recent Activity</h2>

        <input
          placeholder="Search donations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-3 rounded bg-white/10 border border-white/20 text-white outline-none"
        />

        {donations
          .filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
          .map((d, i) => (
            <div key={i} className="border-b border-white/20 py-4 flex justify-between">
              <span>{d.name}</span>
              <span className="text-blue-400">{d.status}</span>
            </div>
          ))
        }

      </div>

    </Layout>
  );
}

export default Admin;