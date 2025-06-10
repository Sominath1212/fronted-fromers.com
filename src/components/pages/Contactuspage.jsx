import React, { useState } from "react";

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
    <div className=" mx-auto p-6  flex flex-col items-center justify-items-center w-screen h-[100vh] shadow-md rounded-2xl realtive top-10">
      <h2 className="text-2xl font-bold text-[#c4f254] mb-4 text-center">
        Contact Us
      </h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-[#c8e189] max-w-xl  p-5 shadow-md rounded-2xl relative top-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c4f254]"
        />
        <button
          type="submit"
          className="w-full bg-[#c4f254] text-black py-2 rounded-lg hover:bg-[#c5de89] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contactuppage;
