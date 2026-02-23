import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email,setEmail]=useState("");
  const [pass,setPass]=useState("");
  const [role,setRole]=useState("");
  const [showLogin,setShowLogin]=useState(false);

  const handleLogin=()=>{

    // ADMIN LOGIN (separate credentials)
    if(role==="admin"){
      if(email==="sathwik@klu" && pass==="3"){
        
        // ⭐ FIX: store role
        localStorage.setItem("role","admin");

        // ⭐ FORCE reload so App.js re-reads role
        window.location.href="/admin";

      }else{
        alert("Invalid Admin Credentials");
      }
      return;
    }

    // OTHER ROLES LOGIN
    if(email==="fsad@klu" && pass==="3" && role){

      // ⭐ FIX: store role
      localStorage.setItem("role",role);

      // ⭐ FORCE reload
      window.location.href="/"+role;

    }else{
      alert("Enter valid credentials & select role");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage:"url('/img.jpeg')"}}
      />
      <div className="absolute inset-0 bg-black/60"/>

      <div className="absolute top-6 right-10 z-20 flex gap-4">

        <button
          onClick={()=>setShowLogin(true)}
          className="px-5 py-2 bg-white text-gray-800 rounded-lg font-semibold"
        >
          Sign In
        </button>

        <button
          onClick={()=>alert("Registration page not implemented")}
          className="px-5 py-2 border border-white text-white rounded-lg"
        >
          Register
        </button>

      </div>

      <div className="relative z-10 w-1/2 px-20 text-white">

        <div className="bg-white/20 backdrop-blur-md px-5 py-2 inline-block rounded-full mb-6">
          ❤️ Connecting communities through giving
        </div>

        <h1 className="text-6xl font-bold leading-tight">
          Every gift <span className="text-orange-400">makes a difference</span>
        </h1>

        <p className="mt-6 text-lg text-gray-200 max-w-xl">
          Donate, request, and track essentials seamlessly from donor to recipient.
        </p>

        <div className="mt-8 flex gap-4">

          <button
            onClick={()=>{
              setRole("donor");
              setShowLogin(true);
            }}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold"
          >
            Start Donating →
          </button>

          <button
            onClick={()=>{
              setRole("recipient");
              setShowLogin(true);
            }}
            className="border border-white px-6 py-3 rounded-lg hover:bg-white/20"
          >
            Request Help
          </button>

        </div>

      </div>

      {showLogin && (
        <div className="absolute inset-0 flex items-center justify-center z-20">

          <div className="bg-white w-96 p-10 rounded-2xl shadow-2xl relative">

            <button
              onClick={()=>setShowLogin(false)}
              className="absolute top-3 right-4 text-gray-500 text-xl"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
              Sign In
            </h2>

            <input
              className="w-full p-3 border rounded-lg mb-4"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              className="w-full p-3 border rounded-lg mb-4"
              placeholder="Password"
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
            />

            <select
              className="w-full p-3 border rounded-lg mb-6"
              value={role}
              onChange={(e)=>setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option value="admin">Admin</option>
              <option value="donor">Donor</option>
              <option value="recipient">Recipient</option>
              <option value="logistics">Logistics</option>
            </select>

            <button
              onClick={handleLogin}
              className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
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