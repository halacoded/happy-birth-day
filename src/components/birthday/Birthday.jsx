import React, { useState, useEffect } from "react";
import Photo1 from "../../assests/35 Funny Doodles By Nadia Tolstoy That Might Change The Way You Look At Some Words (New Pics).jpg";
import Photo2 from "../../assests/image (1).png";
import Photo3 from "../../assests/download (1).jpg";
import sound from "../../assests/أغنية عيد ميلاد سعيد 4 بدون موسيقى _ birthday song vocals only.mp3";
import "./birthday.css";

const Birthday = () => {
  const [toggle, setToggle] = useState(false);
  const [showFinalImage, setShowFinalImage] = useState(false);
  const [age, setAge] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prevToggle) => !prevToggle);
      calculateAge();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const calculateAge = () => {
    const birthDate = new Date(2004, 11, 5);
    const now = new Date();
    const diff = now - birthDate;
    const ageDate = new Date(diff);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = ageDate.getUTCHours();
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();

    setAge({ years, months, days, hours, minutes, seconds });
  };

  const handleAudioEnd = () => {
    setShowFinalImage(true);
  };

  return (
    <div className="birthday">
      {showFinalImage ? (
        <>
          <h1>Happy Birthday Gaurav</h1>
          <img
            src={Photo3}
            alt="Happy Birthday Gaurav"
            className="dance-image"
          />
          <div className="age-counter">
            <p>
              you are now : {age.years} years, {age.months} months, {age.days}{" "}
              days, {age.hours} hours, {age.minutes} minutes, {age.seconds}{" "}
              seconds
            </p>
          </div>
        </>
      ) : (
        <div className="dance-container">
          <img
            src={toggle ? Photo1 : Photo2}
            alt="Dancing Character"
            className="dance-image"
          />

          <audio src={sound} autoPlay onEnded={handleAudioEnd} />
        </div>
      )}
    </div>
  );
};

export default Birthday;
