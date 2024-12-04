import React, { useState, useEffect } from "react";
import Photo1 from "../../assests/35 Funny Doodles By Nadia Tolstoy That Might Change The Way You Look At Some Words (New Pics).jpg";
import Photo2 from "../../assests/image (1).png";
import sound from "../../assests/أغنية عيد ميلاد سعيد 4 بدون موسيقى _ birthday song vocals only.mp3";
import "./birthday.css"; // Import your CSS

const Birthday = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prevToggle) => !prevToggle);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="birthday">
      <img
        src={toggle ? Photo1 : Photo2}
        alt="Dancing Character"
        className="dance-image"
      />
      <audio src={sound} autoPlay />
    </div>
  );
};

export default Birthday;
