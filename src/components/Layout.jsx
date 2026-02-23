import { Link, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100">

      {/* Sidebar */}
      <div className="w-56 bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-6 shadow-xl">

        <h2 className="text-2xl font-bold mb-8">GiveFlow</h2>

        <nav className="space-y-4 text-lg">

          <Link className="block hover:text-yellow-300 transition" to="/admin">
            Admin
          </Link>

          <Link className="block hover:text-yellow-300 transition" to="/donor">
            Donor
          </Link>

          <Link className="block hover:text-yellow-300 transition" to="/recipient">
            Recipient
          </Link>

          <Link className="block hover:text-yellow-300 transition" to="/logistics">
            Logistics
          </Link>

        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 relative">

        {/* Logout Button */}
        <button
          onClick={logout}
          className="absolute top-5 right-6 bg-red-500 text-white text-sm px-4 py-1 rounded-lg font-semibold shadow hover:bg-red-600 transition"
        >
          Logout
        </button>

        {children}

      </div>

    </div>
  );
}

export default Layout;