import { useState, useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { CardContext } from "../context/cardContext";
import { AuthContext } from "../context/authContext";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const { cartItems } = useContext(CardContext);
  const { isLogedIn } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showBadge] = useState(cartItems.length !== 0);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-white shadow-2xl fixed w-full z-50">
      <div className="flex items-center justify-between px-4 py-2 md:px-10">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl md:text-3xl text-[#c4f254] cursor-pointer font-bold">
            Farmer.com
          </h1>
        </Link>

        {/* Right section (cart + profile + hamburger) */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Cart Icon - Always visible on mobile */}
          <div className="relative">
            {showBadge && (
              <div className="bg-green-500 w-2 h-2 rounded-full absolute -top-1 -right-1"></div>
            )}
            <Link to="/cart">
              <GiShoppingBag className="text-2xl cursor-pointer hover:text-[#c4f254]" />
            </Link>
          </div>

          {/* Profile or Login/Signup - Always visible on mobile */}
          {localStorage.getItem("token") === null ? (
            <Link to="/login">
              <Link to="/login">
                <button className="border border-black rounded py-2 px-4 hover:text-black hover:bg-[#c4f254]">
                  Login
                </button>
              </Link>{" "}
            </Link>
          ) : (
            <Link to={`/profile/${localStorage.getItem("id")}`}>
              <FaRegUserCircle className="text-2xl cursor-pointer hover:text-[#c4f254]" />
            </Link>
          )}

          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="text-3xl">
            {showMenu ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <menu className="hidden md:flex gap-6">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/aboutus", label: "About Us" },
            { to: "/contactus", label: "Contact Us" },
            { to: "/policy", label: "Prolicy" },
          ].map(({ to, label }) => (
            <Link key={to} to={to}>
              <button className="text-center border-[#c4f254] border rounded py-2 px-4 hover:text-black hover:bg-[#c4f254]">
                {label}
              </button>
            </Link>
          ))}
        </menu>

        {/* Cart & Profile - Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            {showBadge && (
              <div className="bg-green-500 w-2 h-2 rounded-full absolute -top-1 -right-1"></div>
            )}
            <Link to="/cart">
              <GiShoppingBag className="text-3xl cursor-pointer hover:text-[#c4f254]" />
            </Link>
          </div>

          {localStorage.getItem("token") === null ? (
            // 👇 If no token → show Login + Sign-Up buttons
            <>
              <Link to="/login">
                <button className="border border-black rounded py-2 px-4 hover:text-black hover:bg-[#c4f254]">
                  Login
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="border border-black rounded py-2 px-4 hover:text-black hover:bg-[#c4f254]">
                  Sign-Up
                </button>
              </Link>
            </>
          ) : (
            // 👇 If token exists → show profile icon
            <Link to={`/profile/${localStorage.getItem("id")}`}>
              <FaRegUserCircle className="text-3xl cursor-pointer" />
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {showMenu && (
        <div className="flex flex-col items-center gap-4 px-4 pb-4 md:hidden">
          {[
            { to: "/", label: "Home" },
            { to: "/products", label: "Products" },
            { to: "/aboutus", label: "About Us" },
            { to: "/contactus", label: "Contact Us" },
            { to: "/policy", label: "Prolicy" },
          ].map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setShowMenu(false)}>
              <button className="w-full border-[#c4f254] border rounded py-2 px-4 hover:text-black hover:bg-[#c4f254]">
                {label}
              </button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
