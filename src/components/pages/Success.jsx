import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/cart", { state: { fromSuccess: true } });
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 px-4">
      <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl text-center max-w-md w-full transition duration-300 ease-in-out animate-fade-in">
        {/* ✅ Animated Checkmark */}
        <div className="text-green-500 text-7xl mb-6 animate-bounce">✅</div>

        {/* ✅ Animated Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-green-600 animate-slide-in">
          Payment Successful!
        </h2>

        <p className="text-gray-700 text-base mb-4 animate-fade-in-slow">
          Thank you for your payment. Your order is being processed.
        </p>

        <p className="text-sm text-gray-500 animate-pulse">
          Redirecting to your cart in a few seconds...
        </p>
      </div>
    </div>
  );
};

export default Success;
