import { useState } from "react";

function LoginForm({ onSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !password) {
      setError("Fill all fields");
      return;
    }

    setError("");
    onSubmit({ username });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm p-6 shadow rounded flex flex-col gap-4"
    >
      <h2 className="text-xl font-bold text-center">Login</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button className="bg-teal-500 text-white p-2 rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
