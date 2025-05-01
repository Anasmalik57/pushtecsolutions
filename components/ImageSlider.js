"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    "/assets/brandslogo/brand1.webp",
    "/assets/brandslogo/brand2.webp",
    "/assets/brandslogo/brand3.webp",
    "/assets/brandslogo/brand4.webp",
    "/assets/brandslogo/brand5.webp",
    "/assets/brandslogo/brand6.webp",
    "/assets/brandslogo/brand7.webp",
    "/assets/brandslogo/brand8.webp",
    "/assets/brandslogo/brand9.webp",
    "/assets/brandslogo/brand10.webp",
    "/assets/brandslogo/brand11.webp",
  ];

  const scrollRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-container">
      {/* Navigation Buttons */}
      <button onClick={scrollLeft} className="nav-button nav-button-left">
        <svg
          className="arrow-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button onClick={scrollRight} className="nav-button nav-button-right">
        <svg
          className="arrow-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Scrollable Container */}
      <div ref={scrollRef} className="scroll-container">
        {images.map((src, index) => (
          <div
            key={index}
            className="image-wrapper"
            style={{ cursor: "pointer" }}
          >
            <Image
              src={src}
              width={150}
              height={150}
              className="brand-image"
              style={{ objectFit: "contain" }}
              alt={`Brand logo ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
