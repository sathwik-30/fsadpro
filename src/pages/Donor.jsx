import { useState } from "react";
import Layout from "../components/Layout";

function Donor() {
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [drive, setDrive] = useState("");
  const [list, setList] = useState([]);

  const drives = ["Flood Relief Drive", "Winter Clothes Drive", "Food Donation Camp","Others"];

  const addItem = () => {
    if (!item || !qty || !drive) return;

    setList([...list, { item, qty, drive, status: "Pending" }]);
    setItem("");
    setQty("");
    setDrive("");
  };

  const updateStatus = (index) => {
    const updated = [...list];

    if (updated[index].status === "Pending") updated[index].status = "Approved";
    else if (updated[index].status === "Approved") updated[index].status = "Delivered";

    setList(updated);
  };

  const statusColor = (status) => {
    if (status === "Pending") return "bg-yellow-500";
    if (status === "Approved") return "bg-blue-500";
    return "bg-green-600";
  };

  return (
    <Layout role="donor">
      <h1 className="mb-8 text-3xl font-bold text-white">Donor Dashboard</h1>

      <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg">
        <h2 className="mb-5 text-xl font-semibold text-white">Add Donation</h2>

        <div className="flex flex-wrap gap-4">
          <input
            className="flex-1 rounded-lg border border-white/20 bg-white/10 p-3 text-white outline-none placeholder:text-gray-300"
            placeholder="Item name"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <input
            type="number"
            className="w-32 rounded-lg border border-white/20 bg-white/10 p-3 text-white outline-none placeholder:text-gray-300"
            placeholder="Qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />

          <select
            className="rounded-lg border border-white/20 bg-white/10 p-3 text-white outline-none"
            value={drive}
            onChange={(e) => setDrive(e.target.value)}
          >
            <option value="" className="text-black bg-white">
              Select Drive
            </option>

            {drives.map((d, i) => (
              <option key={i} value={d} className="text-black bg-white">
                {d}
              </option>
            ))}
          </select>

          <button
            onClick={addItem}
            className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg">
        <h2 className="mb-6 text-xl font-semibold text-white">Your Donations</h2>

        {list.length === 0 && <p className="text-gray-300">No donations yet.</p>}

        {list.map((d, i) => (
          <div key={i} className="flex items-center justify-between border-b border-white/20 py-5">
            <div>
              <p className="text-lg font-semibold text-white">{d.item}</p>
              <p className="text-sm text-gray-300">Drive: {d.drive}</p>
            </div>

            <div className="text-right">
              <p className="mb-2 font-bold text-green-400">Qty: {d.qty}</p>

              <button
                onClick={() => updateStatus(i)}
                className={`${statusColor(d.status)} rounded-full px-4 py-1 text-sm font-semibold text-white`}
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