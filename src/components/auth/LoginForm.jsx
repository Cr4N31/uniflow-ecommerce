import { useState } from 'react';

function LoginForm({ onSubmit, username, setUsername }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleValidation(e) {
    e.preventDefault();

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    setError('');
    onSubmit?.({ username, password }); // ✅ let parent handle what happens next
    setPassword('');
  }

  return (
    <div className="flex items-center justify-center bg-white">
      <form
        onSubmit={handleValidation}
        className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg border border-gray-200 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-teal-500 text-center">
          Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
        />

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          disabled={!username.trim() || !password.trim()}
          className={`w-full py-2 rounded-md font-bold text-white transition
            ${username && password
              ? 'bg-teal-500 hover:bg-teal-600'
              : 'bg-gray-300 cursor-not-allowed'
            }`}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
