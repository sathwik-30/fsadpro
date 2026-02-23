import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* ✅ CHANGE 1: receive setRole from App */
function Login({ setRole }) {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [role, setRoleLocal] = useState("");   // renamed local state to avoid clash
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {

    /* ADMIN LOGIN */
    if (role === "admin") {
      if (email === "sathwik@klu" && pass === "3") {
        localStorage.setItem("role", "admin");

        setRole("admin");   // ✅ CHANGE 2: trigger App rerender

        navigate("/admin", { replace: true });
      } else {
        alert("Invalid Admin Credentials");
      }
      return;
    }

    /* NORMAL USERS */
    if (email === "fsad@klu" && pass === "3" && role) {
      localStorage.setItem("role", role);

      setRole(role);   // ✅ CHANGE 3: trigger App rerender

      navigate(`/${role}`, { replace: true });
    } else {
      alert("Enter valid credentials and select role");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img.jpeg')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute right-4 top-4 z-20 flex gap-3 sm:right-8 sm:top-6 sm:gap-4">
        <button
          onClick={() => setShowLogin(true)}
          className="rounded-lg bg-white px-4 py-2 font-semibold text-gray-800 sm:px-5"
        >
          Sign In
        </button>

        <button
          onClick={() => alert("Registration page not implemented")}
          className="rounded-lg border border-white px-4 py-2 text-white transition-colors hover:bg-white/20 sm:px-5"
        >
          Register
        </button>
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-6 py-20 sm:px-10 lg:w-1/2 lg:px-20">
        <div className="text-white">
          <div className="mb-6 inline-block rounded-full bg-white/20 px-5 py-2 backdrop-blur-md">
            Connecting communities through giving
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Every gift <span className="text-orange-400">makes a difference</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-gray-200 sm:text-lg">
            Donate, request, and track essentials seamlessly from donor to recipient.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => {
                setRoleLocal("donor");   // updated
                setShowLogin(true);
              }}
              className="rounded-lg bg-orange-500 px-6 py-3 font-semibold transition-colors hover:bg-orange-600"
            >
              Start Donating
            </button>

            <button
              onClick={() => {
                setRoleLocal("recipient");  // updated
                setShowLogin(true);
              }}
              className="rounded-lg border border-white px-6 py-3 transition-colors hover:bg-white/20"
            >
              Request Help
            </button>
          </div>
        </div>
      </div>

      {showLogin && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 px-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl sm:p-10">
            <button
              onClick={() => setShowLogin(false)}
              className="absolute right-4 top-3 text-xl text-gray-500"
            >
              x
            </button>

            <h2 className="mb-6 text-center text-3xl font-bold text-green-600">
              Sign In
            </h2>

            <input
              className="mb-4 w-full rounded-lg border p-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="mb-4 w-full rounded-lg border p-3"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <select
              className="mb-6 w-full rounded-lg border p-3"
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
              className="w-full rounded-lg bg-green-600 p-3 text-white transition-colors hover:bg-green-700"
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