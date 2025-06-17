import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/cart", { state: { fromSuccess: true } });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md animate-fade-in">
        {/* ✅ Animated Checkmark */}
        <div className="text-green-500 text-7xl mb-4 animate-bounce">✅</div>

        {/* ✅ Animated Title */}
        <h2 className="text-3xl font-extrabold mb-3 text-green-600 animate-slide-in">
          Payment Successful!
        </h2>

        <p className="text-gray-600 mb-3 animate-fade-in-slow">
          Thank you for your payment.
        </p>

        <p className="text-sm text-gray-500 animate-pulse">
          Redirecting to your cart...
        </p>
      </div>
    </div>
  );
};

export default Success;
