import { FaRegUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const id = localStorage.getItem("id");
  return (
    <nav className="flex items-center bg-white z-10 justify-between px-15 shadow-2xl fixed w-screen py-1 ">
      {/* logo */}
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl text-[#c4f254] cursor-pointer font-bold">
            Farmer.com
          </h1>
        </Link>
      </div>
      {/* memu */}
      <menu className="flex items-center justify-evenly gap-10">
        <Link to="/">
          {" "}
          <button className="flex text-center border-[#c4f254] border  rounded py-2 px-3 hover:text-black  hover:bg-[#c4f254] cursor-pointer">
            Home
          </button>
        </Link>
        <Link to="/products">
          <button className="flex text-center border-[#c4f254] border  rounded py-2 px-3 hover:text-black  hover:bg-[#c4f254] cursor-pointer">
            Products
          </button>
        </Link>
        <Link to="/aboutus">
          <button className="flex text-center border-[#c4f254] border  rounded py-2 px-3 hover:text-black  hover:bg-[#c4f254] cursor-pointer">
            About Us
          </button>
        </Link>
        <Link to="/contactus">
          <button className="flex text-center border-[#c4f254]  border rounded py-2 px-3 hover:text-black  hover:bg-[#c4f254] cursor-pointer">
            Contact Us
          </button>
        </Link>
        <Link to="/policy">
          <button className="flex text-center border-[#c4f254] border  rounded py-2 px-3 hover:text-black  hover:bg-[#c4f254] cursor-pointer">
            Prolicy
          </button>
        </Link>
      </menu>
      {/* cart */}
      <div>
        <Link to="/cart">
          {" "}
          <GiShoppingBag className="text-3xl  cursor-pointer hover:text-[#c4f254]" />
        </Link>
      </div>
      {/* profile / */}

      {localStorage.getItem("id") != "" ? (
        <div>
          <Link to={`/profile/${id}`}>
            {" "}
            <FaRegUserCircle className="text-3xl cursor-pointer" />
          </Link>
        </div>
      ) : (
        <div className="flex items-center justify-evenly gap-5">
          <Link to={"/login"}>
            {" "}
            <button className="flex text-center border-black border  rounded py-2 px-3 hover:text-black  hover:bg-[#c4f254] cursor-pointer">
              Login
            </button>
          </Link>
          <Link to={"/sign-up"}>
            <button className="flex text-center border-black border  rounded py-2 px-3 hover:text-black  hover:bg-[#c4f254] cursor-pointer">
              Sign-Up
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
