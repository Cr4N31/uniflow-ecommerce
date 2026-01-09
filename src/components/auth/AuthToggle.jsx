function AuthToggle({ isLogin, setIsLogin }) {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button
        onClick={() => setIsLogin(true)}
        disabled={isLogin}
        className={`
          px-6 py-2 rounded font-semibold transition 
          ${isLogin ? 'bg-teal-500 text-white cursor-not-allowed' : 'bg-white text-teal-500 border border-teal-500 hover:bg-teal-600 hover:text-white'}
        `}
      >
        Login
      </button>

      <button
        onClick={() => setIsLogin(false)}
        disabled={!isLogin}
        className={`
          px-6 py-2 rounded font-semibold transition 
          ${!isLogin ? 'bg-teal-500 text-white cursor-not-allowed' : 'bg-white text-teal-500 border border-teal-500 hover:bg-teal-600 hover:text-white'}
        `}
      >
        Register
      </button>
    </div>
  );
}

export default AuthToggle;
