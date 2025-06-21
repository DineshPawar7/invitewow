import { useState } from "react";

export default function AuthForm({ type, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (type === "register") {
      onSubmit({ name: form.name, email: form.email, password: form.password });
    } else {
      onSubmit({ email: form.email, password: form.password });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        {type === "login" ? "Login" : "Register"}
      </h2>

      {type === "register" && (
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />
      )}

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full mb-4 p-2 border border-gray-300 rounded"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {type === "login" ? "Login" : "Register"}
      </button>
    </form>
  );
}
