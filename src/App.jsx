import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import Donor from "./pages/Donor.jsx";
import Recipient from "./pages/Recipient.jsx";
import Logistics from "./pages/Logistics.jsx";

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole.toLowerCase());
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login setRole={setRole} />} />

        <Route
          path="/admin"
          element={
            role === "admin"
              ? <Admin />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/donor"
          element={
            role === "donor"
              ? <Donor />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/recipient"
          element={
            role === "recipient"
              ? <Recipient />
              : <Navigate to="/" replace />
          }
        />

        <Route
          path="/logistics"
          element={
            role === "logistics"
              ? <Logistics />
              : <Navigate to="/" replace />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;