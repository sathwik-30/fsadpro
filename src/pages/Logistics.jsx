import { useState } from "react";
import Layout from "../components/Layout";

function Logistics() {
  const [deliveries, setDeliveries] = useState([
    { item: "Rice Bags", qty: 50, status: "In Transit", vehicle: "Truck" },
    { item: "Clothes", qty: 120, status: "Delivered", vehicle: "Van" },
    { item: "Medicine Kits", qty: 30, status: "Pending", vehicle: "" }
  ]);

  const getStatusColor = (status) => {
    if (status === "Delivered") return "bg-green-500";
    if (status === "In Transit") return "bg-yellow-500";
    return "bg-red-500";
  };

  const updateStatus = (index) => {
    const updated = [...deliveries];

    if (updated[index].status === "Pending")
      updated[index].status = "In Transit";
    else if (updated[index].status === "In Transit")
      updated[index].status = "Delivered";

    setDeliveries(updated);
  };

  const assignVehicle = (index, vehicle) => {
    const updated = [...deliveries];
    updated[index].vehicle = vehicle;
    setDeliveries(updated);
  };

  return (
    <Layout>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-8 text-white">
        Logistics Dashboard
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-white">
          <p className="text-gray-300">Total Deliveries</p>
          <h2 className="text-3xl font-bold">{deliveries.length}</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-white">
          <p className="text-gray-300">In Transit</p>
          <h2 className="text-3xl font-bold text-yellow-400">
            {deliveries.filter(d => d.status === "In Transit").length}
          </h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl text-white">
          <p className="text-gray-300">Delivered</p>
          <h2 className="text-3xl font-bold text-green-400">
            {deliveries.filter(d => d.status === "Delivered").length}
          </h2>
        </div>

      </div>

      {/* DELIVERY LIST */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-xl">

        <h2 className="text-xl font-semibold mb-6 text-white">
          Delivery Management
        </h2>

        {deliveries.map((d, i) => (
          <div
            key={i}
            className="border-b border-white/20 py-5 flex justify-between items-center"
          >

            <div>
              <p className="font-semibold text-white text-lg">
                {d.item}
              </p>

              <p className="text-sm text-gray-300">
                Qty: {d.qty}
              </p>

              <select
                value={d.vehicle}
                onChange={(e) => assignVehicle(i, e.target.value)}
                className="bg-white/10 border border-white/20 text-white mt-3 p-2 rounded outline-none"
              >
                <option value="">Assign Vehicle</option>
                <option>Truck</option>
                <option>Van</option>
                <option>Bike</option>
              </select>
            </div>

            <div className="text-right">

              <span className={`${getStatusColor(d.status)} text-white px-4 py-1 rounded-full text-sm font-semibold`}>
                {d.status}
              </span>

              <button
                onClick={() => updateStatus(i)}
                className="block mt-3 bg-blue-600 text-white px-4 py-1 rounded-lg font-semibold"
              >
                Update Status
              </button>

            </div>

          </div>
        ))}

      </div>

    </Layout>
  );
}

export default Logistics;