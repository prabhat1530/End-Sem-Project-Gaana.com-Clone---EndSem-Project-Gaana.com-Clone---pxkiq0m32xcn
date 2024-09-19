import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import image from '../../src/assets/image.png';
import logo from '../../src/assets/image copy.png'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth(); // Use the custom hook to get the setAuth function
  const projectId = 'bng7dtu7whwk';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://academics.newtonschool.co/api/v1/user/login', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'projectId': projectId,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          appType: 'music'
        })
      });

      const data = await response.json();
      if (data.status === "success") {
        localStorage.setItem('user', JSON.stringify(data)); // Save user data to local storage
        setAuth(data.token); // Set the token in the context
        navigate("/");
        alert('Sign in successful');
      } else {
        setError(data.message || 'Sign in failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black opacity-95" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-background bg-cover p-8">
        <div className="flex justify-center mt-4">
          <img height={30} width={90} src={logo} alt="logo" />
        </div>
        <br />
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="flex justify-center text-white text-lg md:text-2xl">Listen to Gaana Non-Stop</h1>
            <br />
            <h2 className="flex justify-center text-red-500 text-base md:text-xl">Login</h2>
            <br />
            {error && (
              <div className="flex justify-center text-red-600 text-sm md:text-base">
                <p>{error}</p>
              </div>
            )}
            <div className="flex justify-center">
              <input
                type="email"
                className="bg-black border-2 border-red-600 text-white p-2 w-64 md:w-80"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="flex justify-center">
              <input
                type="password"
                className="bg-black border-2 border-red-600 text-white p-2 w-64 md:w-80"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="flex justify-center">
              <button className="w-24 m-2.5 p-2.5 bg-red-700 text-white" type="submit">
                Log In
              </button>
            </div>
            <br />
            <div className="flex flex-col items-center md:flex-row md:justify-center">
              <h3 className="p-2 text-white">Don't have an account?</h3>
              <a href="/signup" className="ml-0 md:ml-3 mt-2 text-red-600 underline">Create One</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
