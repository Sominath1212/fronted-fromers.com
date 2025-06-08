import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [isLogedIn, setLogedIn] = useState(false);
  const [user, setUser] = useState({});
 
  const values = { isLogedIn, setLogedIn, user, setUser };

  useEffect(() => {
    console.log(user, isLogedIn);
  }, [user]);
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
