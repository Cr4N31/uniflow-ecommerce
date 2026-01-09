import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import AuthToggle from './AuthToggle';

function AuthLayout({ setUser, username, setUsername }) {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // ✅

  function handleAuthSubmit(data) {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    setUsername(data.username);

    navigate("/"); // ✅ redirect after login/register
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="mb-8">
        <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>

      <div className="w-full max-w-md">
        {isLogin ? (
          <LoginForm
            username={username}
            setUsername={setUsername}
            onSubmit={handleAuthSubmit}
          />
        ) : (
          <RegisterForm
            username={username}
            setUsername={setUsername}
            onSubmit={handleAuthSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default AuthLayout;
