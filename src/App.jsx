import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donor from "./pages/Donor";
import Recipient from "./pages/Recipient";
import Logistics from "./pages/Logistics";

function App() {
  // FIX: make role comparison safe
  const role = localStorage.getItem("role")?.toLowerCase();

  return (
    <BrowserRouter>
      <Routes>

        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* ADMIN ONLY */}
        <Route
          path="/admin"
          element={
            role === "admin"
              ? <Admin />
              : <Navigate to="/" />
          }
        />

        {/* COMMON PAGES FOR ALL LOGGED USERS */}
        <Route
          path="/donor"
          element={role ? <Donor /> : <Navigate to="/" />}
        />

        <Route
          path="/recipient"
          element={role ? <Recipient /> : <Navigate to="/" />}
        />

        <Route
          path="/logistics"
          element={role ? <Logistics /> : <Navigate to="/" />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;