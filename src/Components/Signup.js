import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from '../../src/assets/image.png';
import logo from '../../src/assets/image copy.png';


const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'projectID': 'bng7dtu7whwk',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          appType: 'music'
        })
      });

      const result = await res.json();
      if (result.status === "success") {
        localStorage.setItem('user', JSON.stringify(result));
        alert('Sign up successful');
        navigate('/login');
      } else {
        setError(result.message || 'Sign up failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-background bg-cover p-8">
        <div className="flex justify-center mt-4">
          <img height={40} width={60} src={logo} alt="logo" />
        </div>
        <br />
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="flex justify-center text-white text-lg md:text-2xl">Listen to Gaana Non-Stop</h1>
            <br />
            <h2 className="flex justify-center text-red-500 text-base md:text-xl">Create your Account</h2>
            <br />
            {error && (
              <div className="flex justify-center text-red-600 text-sm md:text-base">
                <p>{error}</p>
              </div>
            )}
            <div className="flex justify-center">
              <input
                className="bg-black border-2 border-red-600 text-white p-2 w-64 md:w-80"
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <br />
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
                Sign Up
              </button>
            </div>
            <br />
            <div className="flex">
              <h3 className="m-4 p-2 text-white">Already have an account?</h3>
              <a href="/login" className="ml-0 mt-6 text-red-600 underline">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
