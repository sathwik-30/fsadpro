import { useState } from "react";
import Layout from "../components/Layout";

function Logistics() {

  const [deliveries, setDeliveries] = useState([
    { item: "Rice Bags", qty: 50, status: "In Transit", vehicle: "Truck" },
    { item: "Clothes", qty: 120, status: "Delivered", vehicle: "Van" },
    { item: "Medicine Kits", qty: 30, status: "Pending", vehicle: "" }
  ]);

  const getStatusColor = (status) => {
    if (status === "Delivered") return "bg-green-100 text-green-700";
    if (status === "In Transit") return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  // Update delivery status
  const updateStatus = (index) => {
    const updated = [...deliveries];

    if (updated[index].status === "Pending")
      updated[index].status = "In Transit";
    else if (updated[index].status === "In Transit")
      updated[index].status = "Delivered";

    setDeliveries(updated);
  };

  // Assign vehicle
  const assignVehicle = (index, vehicle) => {
    const updated = [...deliveries];
    updated[index].vehicle = vehicle;
    setDeliveries(updated);
  };

  return (
    <Layout>

      <h1 className="text-3xl font-bold mb-6">
        Logistics Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mb-8">

        <div className="bg-white p-5 rounded-xl shadow">
          <p>Total Deliveries</p>
          <h2 className="text-2xl font-bold">
            {deliveries.length}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p>In Transit</p>
          <h2 className="text-2xl font-bold text-yellow-600">
            {deliveries.filter(d => d.status === "In Transit").length}
          </h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p>Delivered</p>
          <h2 className="text-2xl font-bold text-green-600">
            {deliveries.filter(d => d.status === "Delivered").length}
          </h2>
        </div>

      </div>

      {/* Delivery List */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-semibold mb-4">
          Delivery Management
        </h2>

        {deliveries.map((d, i) => (
          <div key={i} className="border-b py-4 flex justify-between items-center">

            <div>
              <p className="font-semibold">{d.item}</p>
              <p className="text-sm text-gray-500">
                Qty: {d.qty}
              </p>

              {/* Vehicle Assignment */}
              <select
                value={d.vehicle}
                onChange={(e) => assignVehicle(i, e.target.value)}
                className="border mt-2 p-1 rounded"
              >
                <option value="">Assign Vehicle</option>
                <option>Truck</option>
                <option>Van</option>
                <option>Bike</option>
              </select>
            </div>

            <div className="text-right">

              <span className={`px-4 py-1 rounded-full text-sm font-semibold ${getStatusColor(d.status)}`}>
                {d.status}
              </span>

              <button
                onClick={() => updateStatus(i)}
                className="block mt-2 bg-blue-500 text-white px-3 py-1 rounded"
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