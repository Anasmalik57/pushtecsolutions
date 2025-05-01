import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter-one-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="newsletter-one-sec-inner">
              <div className="title">
                <h2>Newsletter Signup</h2>
                <p>Sign up for our newsletter to get Update</p>
              </div>
              <div className="newsletter-one-input-box">
                <input type="email" placeholder="Email Address" />
                <button type="submit" className="button">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
