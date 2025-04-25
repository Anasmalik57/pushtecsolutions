import Link from "next/link";
export default function Footer1() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/*Start Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="footer-widget-single footer-widget-about">
                <div className="footer-widget-title">
                  <h3>About Us</h3>
                </div>
                <div className="footer-widget-about-text">
                  <p
                    style={{
                      fontSize: "14px",
                      textAlign: "justify",
                      lineHeight: "1.5rem",
                    }}
                  >
                    With 15 years of experience, 100% quality components, and an
                    assured hassle-free experience, Pushtec Solutions delivers
                    an Assured & Proven Quality Guarantee along with the most
                    user-friendly machines. Pushtec Solutions also offers an
                    array of services to support its wide base of installed
                    equipment in India and abroad. To date, the company has
                    successfully installed over 14,500 machines and manages all
                    installations efficiently through a strong internal service
                    team.
                  </p>
                </div>
                <div className="footer-widget-about-social">
                  <Link href="#">
                    <i className="fab fa-facebook-square"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-dribbble"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget-single footer-widget-useful-links">
                <div className="footer-widget-title">
                  <h3>Usefull Links</h3>
                </div>
                <ul className="footer-widget-useful-links-list list-unstyled">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="team">Team</Link>
                  </li>
                  <li>
                    <Link href="testimonials">Testimoials</Link>
                  </li>
                  <li>
                    <Link href="faq">Faq’s</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="footer-widget-single footer-widget-contact">
                <div className="footer-widget-title">
                  <h3>Contact Us</h3>
                </div>
                <div
                  className="footer-widget_contact-info"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <a href="/" target="_blank" style={{ width: "18rem" }}>
                    Pushtec Solutions Limited - 8254565
                  </a>
                  <Link href="tel:+91 7466903135">+91 7466903135</Link>
                  <Link href="tel:+2349045246370">+23 49045246370</Link>
                  <Link href="mailto:Puranranakumar@gmail.com">
                    Puranranakumar@gmail.com
                  </Link>
                  <Link href="mailto:Pushtecsolutions@gmail.com">
                    Pushtecsolutions@gmail.com
                  </Link>
                  <a
                    href="https://maps.app.goo.gl/WLbVuQPjZXRNowmq9"
                    target="_blank"
                    style={{
                      color: "#ffff",
                      fontSize: "15px",
                      width: "18rem",
                      textTransform: "capitalize",
                    }}
                  >
                    Km 38, Lagos/Abeokuta Expressway, <br />
                    Sango-Ota, Ogun State, Nigeria
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget-single footer-widget-gallery">
                <div className="footer-widget-title">
                  <h3>Gallery</h3>
                </div>
                <ul className="footer-widget-gallery-list list-unstyled">
                  <li>
                    <div className="gallery-img">
                      <img
                        src="assets/images/footer/footer-gallery-img-1.jpg"
                        alt=""
                      />
                      <div className="gallery-img-hover">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="gallery-img">
                      <img
                        src="assets/images/footer/footer-gallery-img-2.jpg"
                        alt=""
                      />
                      <div className="gallery-img-hover">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="gallery-img">
                      <img
                        src="assets/images/footer/footer-gallery-img-3.jpg"
                        alt=""
                      />
                      <div className="gallery-img-hover">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="gallery-img">
                      <img
                        src="assets/images/footer/footer-gallery-img-4.jpg"
                        alt=""
                      />
                      <div className="gallery-img-hover">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="gallery-img">
                      <img
                        src="assets/images/footer/footer-gallery-img-5.jpg"
                        alt=""
                      />
                      <div className="gallery-img-hover">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="gallery-img">
                      <img
                        src="assets/images/footer/footer-gallery-img-6.jpg"
                        alt=""
                      />
                      <div className="gallery-img-hover">
                        <i className="fa fa-link"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="footer-bottom">
                <p> &copy; {currentYear} Pushtec | All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*End Footer Section */}
    </>
  );
}
