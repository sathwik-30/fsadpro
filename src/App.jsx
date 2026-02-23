import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import Donor from "./pages/Donor.jsx";
import Recipient from "./pages/Recipient.jsx";
import Logistics from "./pages/Logistics.jsx";

function App() {
  const [role, setRole] = useState(null);

  // Load role on first render
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) setRole(savedRole.toLowerCase());
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login setRole={setRole} />} />

        {/* ADMIN */}
        <Route
          path="/admin"
          element={
            role === "admin"
              ? <Admin />
              : <Navigate to="/" replace />
          }
        />

        {/* USER PAGES */}
        <Route
          path="/donor"
          element={role ? <Donor /> : <Navigate to="/" replace />}
        />

        <Route
          path="/recipient"
          element={role ? <Recipient /> : <Navigate to="/" replace />}
        />

        <Route
          path="/logistics"
          element={role ? <Logistics /> : <Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;