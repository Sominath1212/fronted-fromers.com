import { Link, useNavigate } from "react-router-dom";
import loginimage from "../../assets/images/loginimage.jpg";
import { useContext, useState,useEffect } from "react";
import { AuthContext } from "../../context/authContext";

function Loginpage() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isLogedIn = localStorage.getItem("LogedIn");
    if (isLogedIn === "true") {
      navigate("/");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <main className="flex justify-center items-center bg-[#c4f254] min-h-screen px-4">
      <div className="bg-white flex flex-col md:flex-row shadow-2xl rounded-2xl w-full max-w-4xl overflow-hidden">
        {/* Left Side Image */}
        <section className="w-full md:w-1/2 h-60 md:h-auto">
          <div className="w-full h-full">
            <img
              src={loginimage}
              alt="Login"
              className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            />
          </div>
        </section>

        {/* Right Side Form */}
        <section className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-[#c4f254] text-3xl font-bold text-center mb-6">
            Sign In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@me.com"
                className="w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:bg-white focus:border-[#c4f254]"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******************"
                className="w-full bg-gray-200 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:bg-white focus:border-[#c4f254]"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center">
              <button
                type="button"
                className="border border-[#c4f254] hover:bg-[#c4f254] text-black font-bold py-2 px-4 rounded transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#c4f254] hover:bg-white hover:border-[#c4f254] border text-black font-bold py-2 px-4 rounded transition"
              >
                Sign In
              </button>
            </div>

            {/* Create Account */}
            <div className="text-center mt-6">
              <Link
                to="/sign-up"
                className="inline-block w-full bg-[#c4f254] hover:bg-white border hover:border-[#c4f254] text-black font-bold py-2 px-4 rounded transition"
              >
                Create Account
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Loginpage;
