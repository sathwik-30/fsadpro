import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login({ setRole }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRoleLocal] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {

    if (role === "admin") {
      if (email === "sathwik@klu" && pass === "3") {
        localStorage.setItem("role", "admin");
        setRole("admin");
        navigate("/admin", { replace: true });
      } else {
        alert("Invalid Admin Credentials");
      }
      return;
    }

    if (email === "fsad@klu" && pass === "3" && role) {
      localStorage.setItem("role", role);
      setRole(role);
      navigate(`/${role}`, { replace: true });
    } else {
      alert("Enter valid credentials and select role");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* DARK BLUE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e293b]/85 to-[#1e3a8a]/90" />

      {/* TOP BUTTONS */}
      <div className="absolute right-8 top-6 z-20 flex gap-4">

        <button
          onClick={() => setShowLogin(true)}
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          Sign In
        </button>

        <button
          className="rounded-lg border border-white px-5 py-2 text-white hover:bg-white/20 transition-colors"
        >
          Register
        </button>

      </div>

      {/* HERO SECTION */}
      <div className="relative z-10 flex min-h-screen items-center px-10 lg:w-1/2 lg:px-20">
        <div className="text-white">

          <h1 className="text-5xl font-bold leading-tight">
            Every gift{" "}
            <span className="text-blue-400">
              makes a difference
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-xl">
            Connect donors, recipients, and logistics seamlessly through one unified platform.
          </p>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() => {
                setRoleLocal("donor");
                setShowLogin(true);
              }}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Donating
            </button>

            <button
              onClick={() => {
                setRoleLocal("recipient");
                setShowLogin(true);
              }}
              className="rounded-lg border border-white px-6 py-3 hover:bg-white/20 transition-colors"
            >
              Request Help
            </button>

          </div>

        </div>
      </div>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm">

          <div className="relative w-full max-w-md rounded-2xl bg-white/95 p-8 shadow-2xl">

            <button
              onClick={() => setShowLogin(false)}
              className="absolute right-4 top-3 text-gray-600 text-xl"
            >
              ×
            </button>

            <h2 className="mb-6 text-center text-3xl font-bold text-blue-600">
              Sign In
            </h2>

            <input
              className="mb-4 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="mb-4 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <select
              className="mb-6 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
              value={role}
              onChange={(e) => setRoleLocal(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="donor">Donor</option>
              <option value="recipient">Recipient</option>
              <option value="logistics">Logistics</option>
            </select>

            <button
              onClick={handleLogin}
              className="w-full rounded-lg bg-blue-600 p-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Login
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Login;