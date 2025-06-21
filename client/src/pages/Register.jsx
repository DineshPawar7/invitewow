import AuthForm from "../components/AuthForm";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const res = await axios.post("/register", data);
      console.log("Registered:", res.data);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return <AuthForm type="register" onSubmit={handleRegister} />;
}
