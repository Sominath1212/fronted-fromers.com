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
    <section className="min-h-full text-black">
      <img
        src={banner}
        alt="Banner"
        className="w-full relative top-0  object-cover transition-all duration-1000"
      />
      <div className="absolute px-20 inset-0 bg-[rgba(0,0,0,0.5)] top-12 w-full h-full flex flex-col items-center justify-center text-white text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
          Contect Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 text-black bg-[#c8e189] max-w-xl  p-5 shadow-md rounded-2xl relative top-10"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 placeholder:text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 placeholder:text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full placeholder:text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
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
