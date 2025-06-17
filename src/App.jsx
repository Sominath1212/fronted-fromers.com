import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Loginpage from "./components/pages/Loginpage";
import Registerpage from "./components/pages/Registerpage";
import Homepage from "./components/pages/Homepage";
import Productspage from "./components/pages/Productspage";
import Cartpage from "./components/pages/Cartpage";
import Aboutuspage from "./components/pages/Aboutuspage";
import Contactuspage from "./components/pages/Contactuspage";
import Policypage from "./components/pages/Policypage";
import ProductDetails from "./components/pages/ProductDetails";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/authContext";
import { ProductContextProvider } from "./context/productContext";
import { CardContextProvider } from "./context/cardContext";
import Profile from "./components/pages/Profile";
import Success from "./components/pages/Success";
import Cancle from "./components/pages/Cancle";
function App() {
  return (
    <>
      <CardContextProvider>
        <ProductContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/sign-up" element={<Registerpage />} />
              <Route path="/products" element={<Productspage />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              <Route path="/aboutus" element={<Aboutuspage />} />
              <Route path="/contactus" element={<Contactuspage />} />
              <Route path="/policy" element={<Policypage />} />

              {/* ✅ Protected Routes */}
              <Route
                path="/cart"
                element={
                  <PrivateRoute>
                    <Cartpage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile/:id"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/success"
                element={
                  <PrivateRoute>
                    <Success />
                  </PrivateRoute>
                }
              />
              <Route path="/cancle" element={<Cancle />} />
            </Routes>
            <ToastContainer />
          </AuthContextProvider>
        </ProductContextProvider>
      </CardContextProvider>
    </>
  );
}

export default App;
