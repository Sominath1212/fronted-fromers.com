import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "./productContext";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const { fetchData } = useContext(ProductContext);
  const navigate = useNavigate();
  const [isLogedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState({});
  let loginurl = "http://localhost:5000/api/v1/auth/login";
 
  const login = ({ email, password }) => {
    axios
      .post(loginurl, {
        email,
        password,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message || "Login successful!");

          const decoded = jwtDecode(response.data.token);
          localStorage.setItem("id", decoded.userid);
          localStorage.setItem("username", decoded.username); // optionally store username
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("LogedIn", "true"); // stored as string
          fetchData();
          setUser(decoded); // update user context/state
          navigate("/");
        }
      })
      .catch((error) => {
        // Server returned 401 or other error
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          toast.error(error.response.data.message); // from server
        } else {
          toast.error("Login failed. Please try again.");
        }
        console.error("Login error:", error);
      });
  };

  const values = { isLogedIn, login, setLogedIn, user, setUser };

  // useEffect(() => {
  //   setLogedIn(!isLogedIn);
  //   console.log(user, isLogedIn);
  // }, [user]);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
