import React, { useState } from "react";
import banner from "../../assets/images/background1.jpg";

const Contactuppage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you for contacting us!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="w-full max-w-[90%] sm:max-w-[500px] bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border rounded-lg placeholder:text-black focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
          />

          <button
            type="submit"
            className="w-full bg-[#c4f254] text-black py-2 rounded-lg hover:bg-[#c5de89] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contactuppage;
