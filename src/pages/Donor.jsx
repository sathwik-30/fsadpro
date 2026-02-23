import { useState } from "react";
import Layout from "../components/Layout";

function Donor() {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [drive, setDrive] = useState("");
  const [list, setList] = useState([]);

  const drives = [
    "Flood Relief Drive",
    "Winter Clothes Drive",
    "Food Donation Camp"
  ];

  const addItem = () => {
    if (!item || !qty || !drive) return;

    setList([...list, { item, qty, drive, status: "Pending" }]);
    setItem("");
    setQty("");
    setDrive("");
  };

  const updateStatus = (index) => {
    const updated = [...list];

    if (updated[index].status === "Pending")
      updated[index].status = "Approved";
    else if (updated[index].status === "Approved")
      updated[index].status = "Delivered";

    setList(updated);
  };

  const statusColor = (status) => {
    if (status === "Pending") return "bg-yellow-500";
    if (status === "Approved") return "bg-blue-500";
    return "bg-green-600";
  };

  return (
    <Layout role="donor">   {/* ⭐ ONLY CHANGE */}

      <h1 className="text-3xl font-bold mb-8 text-white">
        Donor Dashboard
      </h1>

      {/* FORM */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl mb-8">

        <h2 className="text-xl font-semibold mb-5 text-white">
          Add Donation
        </h2>

        <div className="flex gap-4 flex-wrap">

          <input
            className="bg-white/10 border border-white/20 text-white placeholder-gray-300 p-3 rounded-lg flex-1 outline-none"
            placeholder="Item name"
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

          <select
            className="bg-white/10 border border-white/20 text-white p-3 rounded-lg outline-none"
            value={drive}
            onChange={(e) => setDrive(e.target.value)}
          >
            <option value="">Select Drive</option>
            {drives.map((d, i) => (
              <option key={i}>{d}</option>
            ))}
          </select>

          <button
            onClick={addItem}
            className="bg-green-600 text-white px-6 rounded-lg font-semibold"
          >
            Add
          </button>

        </div>
      </div>

      {/* LIST */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl">

        <h2 className="text-xl font-semibold mb-6 text-white">
          Your Donations
        </h2>

        {list.length === 0 && (
          <p className="text-gray-300">No donations yet.</p>
        )}

        {list.map((d, i) => (
          <div
            key={i}
            className="border-b border-white/20 py-5 flex justify-between items-center"
          >

            <div>
              <p className="font-semibold text-white text-lg">
                {d.item}
              </p>
              <p className="text-sm text-gray-300">
                Drive: {d.drive}
              </p>
            </div>

            <div className="text-right">
              <p className="text-green-400 font-bold mb-2">
                Qty: {d.qty}
              </p>

              <button
                onClick={() => updateStatus(i)}
                className={`${statusColor(d.status)} text-white px-4 py-1 rounded-full text-sm font-semibold`}
              >
                {d.status}
              </button>
            </div>

          </div>
        ))}

      </div>

    </Layout>
  );
}

export default Donor;