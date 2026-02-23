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

    setList([
      ...list,
      { item, qty, drive, status: "Pending" }
    ]);

    setItem("");
    setQty("");
    setDrive("");
  };

  // Fake status progress (simulation)
  const updateStatus = (index) => {
    const updated = [...list];

    if (updated[index].status === "Pending")
      updated[index].status = "Approved";
    else if (updated[index].status === "Approved")
      updated[index].status = "Delivered";

    setList(updated);
  };

  return (
    <Layout>

      <h1 className="text-3xl font-bold mb-6">
        Donor Dashboard
      </h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">

        <h2 className="text-xl font-semibold mb-4">
          Add Donation
        </h2>

        <div className="flex gap-3 flex-wrap">

          <input
            className="border p-3 rounded-lg flex-1"
            placeholder="Item name"
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

          {/* DRIVE SELECT */}
          <select
            className="border p-3 rounded-lg"
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
            className="bg-green-600 text-white px-6 rounded-lg"
          >
            Add
          </button>

        </div>

      </div>

      {/* LIST */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Your Donations
        </h2>

        {list.length === 0 && (
          <p className="text-gray-500">
            No donations yet.
          </p>
        )}

        {list.map((d, i) => (
          <div
            key={i}
            className="border-b py-4 flex justify-between items-center"
          >

            <div>
              <p className="font-medium">{d.item}</p>
              <p className="text-sm text-gray-500">
                Drive: {d.drive}
              </p>
            </div>

            <div className="text-right">
              <p className="text-green-600 font-semibold">
                Qty: {d.qty}
              </p>

              <button
                onClick={() => updateStatus(i)}
                className="mt-2 text-sm bg-blue-500 text-white px-3 py-1 rounded"
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