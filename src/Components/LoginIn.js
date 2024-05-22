import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
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
      if (response.ok) {
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
    <div className="flex justify-center items-center w-fu min-h-screen bg-black">
      <div className="ml-16 mt-20 w-5/6 h-[600px] bg-background bg-cover p-8">
        <div className="flex justify-center mt-16">
          <img
            src="https://s3-alpha-sig.figma.com/img/e033/f421/1fedf1b427e06d6f538b0af651bea421?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FIo~mwAo2yCOOIeY5h5qDpZ0JdpH0EINpbA-vcZziHr0gxlhXHxpkjqxcNvdO9PpBiTwSf3HDVuuKCKgt2QBY-3EFD5PqlV4YDjeQFlb23z7jmZLOKk1Yixjg7dBmz1mWesTVeQefE407UWpZFyoENQemdvH~3Lb1ibv8EhiRq2iKLqomVV~KXWBYFJbsx~hgbHSlMBPMZHdESgUoXZ9s13QoEZAs45tOem7UrzMCyQk1g~h~XpyrKhEsj404nKjq1oSRKbKhH52FLWUiHUczQCedS6SYf5Nu49dZ1vYGo~ZVxRXAOF1TBO~U12YA9zmTpulAVsmWdybsM9twzyW1g__"
            alt="logo"
          />
        </div>
        <br />

        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="flex justify-center text-white">Listen to Gaana Non-Stop</h1>
            <br />
            <h2 className="flex justify-center text-red-500">Login</h2>
            <br />
            {error && <p className="flex justify-center text-red-500">{error}</p>}
            <div className="flex justify-center">
              <input
                type="email"
                className="bg-black border-2 border-red-600 text-white"
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
                className="bg-black border-2 border-red-600 text-white"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <div className="flex justify-center">
              <button
                className="w-24 m-2.5 p-2.5 bg-red-700 text-white"
                type="submit"
              >
                Log In
              </button>
            </div>
            <br />
            <div className="flex">
              <h3 className="p-2 text-white">Don't have an account?</h3>
              <a href="/signup" className="ml-3 mt-2 text-red-600 underline">Create In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
