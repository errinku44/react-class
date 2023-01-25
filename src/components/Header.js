import { useState } from "react";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://img.freepik.com/free-vector/hand-drawn-healthy-food-logo-template_23-2149641244.jpg?w=2000"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
