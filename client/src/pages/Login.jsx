import AuthForm from "../components/AuthForm";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post("/login", data);
      console.log("Login success:", res.data);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}
