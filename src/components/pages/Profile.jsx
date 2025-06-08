import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    let { userrole, username, useremail, userid } = jwtDecode(
      localStorage.getItem("token") || ""
    );
    setUser({ userrole, username, useremail, userid });
  }, []);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="max-w-4xl relative top-14 mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          👤 User Profile
        </h1>

        <button
          onClick={() => logout()}
          className="bg-red-400 rounded-2xl px-3 py-3 cursor-pointer"
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <p className="text-lg text-gray-700">
          <strong>Name:</strong> {user.username || "N/A"}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Email:</strong> {user.useremail || "N/A"}
        </p>
        <p className="text-lg text-gray-700">
          <strong>Role:</strong>{" "}
          <span className="font-semibold text-indigo-600">{user.userrole}</span>
        </p>
      </div>

      {/* Admin Actions */}
      {user.userrole === "ADMIN" ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">🛠️ Admin Controls</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow">
              ➕ Add Product
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow">
              ✏️ Update Product
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow">
              🗑️ Remove Product
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow">
              📦 View Orders
            </button>
          </div>
        </div>
      ) : (
        // Regular User Section
        <div className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold mb-2">🛒 Your Orders</h2>
          {/* Replace with real order data */}
          <ul className="list-disc list-inside text-gray-600">
            <li>Order #1234 - Pesticide A - ₹499</li>
            <li>Order #5678 - Fertilizer B - ₹899</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
