import { Link, useNavigate } from "react-router-dom";
import loginimage from "../../assets/images/loginimage.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

function Registerpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        navigate("/login");
        setEmail("");
        setName("");
        setPassword("");
      } else {
        toast.info(response.data.message);
        setEmail("");
        setName("");
        setPassword("");
      }
    } catch (err) {
      toast.error("Internal Error");
    }
  };

  return (
    <main className="flex justify-center items-center relative md:top-10 bg-[#c4f254] min-h-screen p-4">
      <div className="bg-white  sm:w-[50%]  max-w-4xl shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Image Section */}
        <section className="md:w-1/2 w-full h-64 md:h-auto">
          <img
            src={loginimage}
            alt="Login"
            className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </section>

        {/* Form Section */}
        <section className="md:w-1/2 w-full p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-[#c4f254] text-2xl sm:text-3xl font-bold text-center mb-6">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#c4f254]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="example@me.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#c4f254]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="******************"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#c4f254]"
              />
            </div>

            <div className="flex items-center justify-between gap-2 mt-4">
              <button
                type="button"
                className="w-1/2 border border-[#c4f254] hover:bg-[#c4f254] text-black font-bold py-2 rounded transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 bg-[#c4f254] hover:bg-white hover:border-[#c4f254] border text-black font-bold py-2 rounded transition"
              >
                Sign Up
              </button>
            </div>

            <div className="text-center mt-4">
              <Link
                to="/login"
                className="inline-block bg-[#c4f254] hover:bg-white hover:border-[#c4f254] px-6 py-2 rounded font-bold text-black border transition"
              >
                Already have an account? Login
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Registerpage;
