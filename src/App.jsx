import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Donor from "./pages/Donor";
import Recipient from "./pages/Recipient";
import Logistics from "./pages/Logistics";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/donor" element={<Donor />} />
        <Route path="/recipient" element={<Recipient />} />
        <Route path="/logistics" element={<Logistics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
