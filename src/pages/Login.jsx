import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token); // JWT를 로컬 스토리지에 저장
        setMessage("로그인에 성공했습니다.");
        console.log("Token:", data.token);
      } else {
        const errorData = await response.json();
        setMessage(`로그인에 실패했습니다: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
