import { Link } from "react-router-dom";
import loginimage from "../../assets/images/loginimage.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      axios
        .post("http://localhost:5000/api/v1/auth/register", {
          name,
          email,
          password,
        })
        .then((responce) => {
          console.log(responce);
          if (responce.status == 200) {
            toast.success(responce.data.message);
            navigate("/login");
            setEmail("");
            setName("");
            setPassword("");
          } else {
            toast.info(responce.data.message);
            setEmail("");
            setName("");
            setPassword("");
          }
        });
    } catch (err) {
      toast.error("Internal Error");
      throw err;
    }

    // console.log(name, email, password);
    // toast.success(email);
  };
  return (
    <main className="flex justify-center bg-[#c4f254] w-full h-[100vh] relative ">
      <div className=" bg-white h-[70%] flex relative  shadow-4xl rounded-2xl realtive top-24">
        <section className="w-[300px] relative right-1  overflow-hidden">
          <img
            src={loginimage}
            className=" w-full h-full object-contain rounded-tl-2xl rounded-bl-2xl"
          />
        </section>
        <section className="w-[400px] p-5 flex flex-col my-2 gap-y-10">
          <h1 className="text-[#c4f254]  text-3xl font-bold  text-center">
            Sign Up
          </h1>
          <form className="w-full " onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#c4f254]"
                  id="inline-full-name"
                  type="text"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#c4f254]"
                  id="inline-full-name"
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@me.com"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="inline-password"
                >
                  Password
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#c4f254]"
                  id="inline-password"
                  type="password"
                  placeholder="******************"
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 flex items-center justify-between">
                <button
                  className="shadow border border-[#c4f254] hover:bg-[#c4f254] focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded cursor-pointer"
                  type="button"
                >
                  Cancle
                </button>
                <button
                  className="shadow bg-[#c4f254]  hover:bg-white hover:border-[#c4f254] cursor-pointer focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div className="shadow text-center md:w-2/3  relative left-30 top-5 bg-[#c4f254] hover:bg-white hover:border-[#c4f254] cursor-pointer focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded">
              <Link to={"/login"}>Login</Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Loginpage;
