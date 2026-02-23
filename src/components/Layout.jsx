import { Link, useNavigate, useLocation } from "react-router-dom";

function Layout({ children, role }) {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    navigate("/");
  };

  const linkStyle = (path) =>
    `px-4 py-2 rounded-lg font-medium transition ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">

      {/* TOP NAVBAR */}
      <div className="bg-white/90 backdrop-blur-md shadow px-10 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>

        <div className="flex items-center gap-4">

          {/* ADMIN ONLY */}
          {role === "admin" && (
            <Link className={linkStyle("/admin")} to="/admin">
              Admin
            </Link>
          )}

          {/* COMMON LINKS */}
          <Link className={linkStyle("/donor")} to="/donor">
            Donor
          </Link>

          <Link className={linkStyle("/recipient")} to="/recipient">
            Recipient
          </Link>

          <Link className={linkStyle("/logistics")} to="/logistics">
            Logistics
          </Link>

          {/* LOGOUT */}
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>

        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="p-10 text-white">
        {children}
      </div>

    </div>
  );
}

export default Layout;