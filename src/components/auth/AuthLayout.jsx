import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AuthToggle from "./AuthToggle";
import { useNavigate } from "react-router-dom";

function AuthLayout({ setUser }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  function handleAuthSubmit({ username }) {
    const userData = { username };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />

      {isLogin ? (
        <LoginForm onSubmit={handleAuthSubmit} />
      ) : (
        <RegisterForm onSubmit={handleAuthSubmit} />
      )}
    </div>
  );
}

export default AuthLayout;
