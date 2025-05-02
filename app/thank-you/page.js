import React from "react";
import Link from "next/link";
import "./ThankYou.css";
import Footer1 from "@/components/layout/footer/Footer1";
import Header1 from "@/components/layout/header/Header1";

const ThankYou = () => {
  return (
    <>
      <Header1 />
      <div className="thank-you-container">
        <div className="thank-you-card">
          <div className="check-circle">
            <svg viewBox="0 0 24 24" className="check-icon">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
            </svg>
          </div>
          <h1 className="thank-you-title">Thank You!</h1>
          <p className="thank-you-message">
            Your form has been successfully submitted. We'll get back to you
            soon!
          </p>
          <Link href="/" className="back-home-button">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default ThankYou;
