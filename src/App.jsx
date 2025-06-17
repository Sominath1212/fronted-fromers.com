import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
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
              <Route path="/login" element={<Loginpage />} />
              <Route path="/" element={<Homepage />} />
              <Route path="/sign-up" element={<Registerpage />} />
              <Route path="/products" element={<Productspage />} />
              <Route path="/cart" element={<Cartpage />} />
              <Route path="/aboutus" element={<Aboutuspage />} />
              <Route path="/contactus" element={<Contactuspage />} />
              <Route path="/policy" element={<Policypage />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/productdetails/:id" element={<ProductDetails />} />
              <Route path="/success" element={<Success />} />
              <Route path="/cancle" element={<Cancle />} />
              Rout
            </Routes>
            <ToastContainer />
          </AuthContextProvider>
        </ProductContextProvider>
      </CardContextProvider>
    </>
  );
}

export default App;
