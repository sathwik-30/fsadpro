import { Link, useNavigate, useLocation } from "react-router-dom";

function Layout({ children, role }) {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  const linkStyle = (path) =>
    `px-3 py-2 rounded-lg font-medium transition-colors ${
      location.pathname === path
        ? "bg-blue-600 text-white"
        : "text-slate-200 hover:bg-white/15 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#1e3a8a]">
      <header className="sticky top-0 z-30 border-b border-white/20 bg-slate-900/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <h1 className="text-2xl font-bold tracking-tight text-white">
            Donation Connect
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {role === "admin" && (
              <Link className={linkStyle("/admin")} to="/admin">
                Admin
              </Link>
            )}

            <Link className={linkStyle("/donor")} to="/donor">
              Donor
            </Link>

            <Link className={linkStyle("/recipient")} to="/recipient">
              Recipient
            </Link>

            <Link className={linkStyle("/logistics")} to="/logistics">
              Logistics
            </Link>

            <button
              onClick={logout}
              className="rounded-lg bg-rose-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-rose-600"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 text-white sm:px-6 lg:px-10 lg:py-10">
        {children}
      </div>
    </div>
  );
}

export default Layout;
