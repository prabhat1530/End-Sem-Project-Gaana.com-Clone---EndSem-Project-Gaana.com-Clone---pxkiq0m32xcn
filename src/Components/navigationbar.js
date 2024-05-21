import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl">
          <img src='https://s3-alpha-sig.figma.com/img/6c55/bdfe/9baf1d5ad3359c7d7b0a0cfbf165b123?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iL9tjB4ZlBWvnifDmx0ybMAoVPj13CypF3HYZQIExj8xP7A6YfEtT939hGI3Z6c-tzEuyDy8qkyDHH64P5yH4t5NLv8JE6ruU66k4SR6a8dixv2~FyY61rxvY1kOHrK2lWqF-7SkcmvO4095rn8lBAjxi6au83kjx86urW10UpUWwEoKAl2CpKiwjJf-uCLTDxKZNEEuGV8SCjng~4~4Zpk-mwztNod47ik552H06WJwMs0zwbg5Q6amUJB3IBJsurwkYqqwJJYf1AaOMfLKq3oD92aA8JC8hcwxRhRg0WGV3sWJm838LCbiklNMiNiqpXqV0UTzddORUTntB7WsUA__' alt=""></img>
          <img src="https://s3-alpha-sig.figma.com/img/7af1/edd9/f31efc59006689b88f898ef230e53538?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U3tDgRPCmXqrp7L0DlCnhXAAzoNInYLOoPXY9rd8BFpM2pKAJeS8AF0dRCa9PJC2gUuKUK2pJL~9rjY96~szCB~0Ljdi-QqFuIJo2UNj~vrmd7zbf7jHJNheP~onud-iNyyjbqlBESG-~cVY9GwV7bd9dv1nSHKcH~92qiAa69C~cDO0IqiNTYkdp~-3UvG5ZbVAfDr-PRYDwa47xA8e5rSZKgS0WOfg6BdbjneKmIPsLuJFfrAJwJ4nfjM7v2ez3yFGhE3Q3MlUMMDydbEh4gF~A-582atOtCiLFhG7lrjABVdddunV-ONIYRwwniqRNgBvbBzJKHWOoBoDHvvdeQ__" alt="Brand Logo" className="inline-block h-8 mr-2" />
          
        </Link>
        <button
          onClick={() => {
            if (isAuthenticated) {
              handleLogout();
              alert('You have been signed out.');
            } else {
              navigate('/login');
            }
          }}
          className="text-white"
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
