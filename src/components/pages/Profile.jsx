import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const { userrole, username, useremail, userid } = jwtDecode(
        localStorage.getItem("token") || ""
      );
      setUser({ userrole, username, useremail, userid });
    } catch (err) {
      navigate("/login"); // Redirect if token is invalid
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("token");
    localStorage.removeItem("LogedIn");
    navigate("/login");
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 sm:mt-10 p-4 sm:p-6 bg-white shadow-lg rounded-xl relative top-14">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
          👤 User Profile
        </h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      <div className="space-y-3">
        <p className="text-base sm:text-lg text-gray-700">
          <strong>Name:</strong> {user.username || "N/A"}
        </p>
        <p className="text-base sm:text-lg text-gray-700">
          <strong>Email:</strong> {user.useremail || "N/A"}
        </p>
        <p className="text-base sm:text-lg text-gray-700">
          <strong>Role:</strong>{" "}
          <span className="font-semibold text-yellow-600">
            {user.userrole || "User"}
          </span>
        </p>
      </div>

      {/* Orders Section */}
      <div className="mt-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-2">
          🛒 Your Orders
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base">
          {/* Replace with real data later */}
          <li>Order #1234 - Pesticide A - ₹499</li>
          <li>Order #5678 - Fertilizer B - ₹899</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
