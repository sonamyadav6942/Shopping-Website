import React, { useState, useEffect } from "react";
import "./Slider.css";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    "image1.webp",
    "image2.webp",
    "image3.webp",
    "image4.webp",
    "image5.webp",
  ];

  const nextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2500); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <img key={index} src={slide} alt={`Slide ${index + 1}`} />
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
