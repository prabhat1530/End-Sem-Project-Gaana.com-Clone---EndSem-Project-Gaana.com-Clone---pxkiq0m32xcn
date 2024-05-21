import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);
  const nav = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      password: password,
      appType: "music"
    };

    try {
      const res = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'projectID': 'bng7dtu7whwk',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      if (result.status === "success"){
          nav("/login");
      }
    } catch (error) {
      console.error('Error:', error);
      setResponse({ error: 'Failed to sign up. Please try again.' });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
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
            <h2 className="flex justify-center text-red-500">Create your Account</h2>
            <br />
            <div className="flex justify-center">
              <input 
                className="bg-black border-2 border-red-600 text-white"
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
              <button className="w-24 m-2.5 p-2.5 bg-red-700 text-white" type="submit">Sign Up</button>
            </div>
            <br />
            <div className="flex">
              <h3 className="m-4 p-2 text-white">Already have an account?</h3>
              <a href="/login" className="ml-0 mt-6 text-red-600 underline">Login In</a>
            </div>
          </form>
        </div>
        {response && <div className="text-white">{JSON.stringify(response)}</div>}
      </div>
    </div>
  );
};

export default Signup;