import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"; // Import your CSS

const Home = () => {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount + 1 >= 10) {
      navigate("/Happybirthday");
    } else {
      const newTop = Math.random() * (window.innerHeight - 50) + "px";
      const newLeft = Math.random() * (window.innerWidth - 100) + "px";
      setPosition({ top: newTop, left: newLeft });
    }
  };

  return (
    <div className="home">
      <button
        onClick={handleButtonClick}
        className="click-me-button"
        style={{ top: position.top, left: position.left, position: "absolute" }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Home;
