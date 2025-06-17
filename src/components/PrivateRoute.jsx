import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { isLogedIn } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  // if user is not logged in, redirect to /login
  if (!isLogedIn && !token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
