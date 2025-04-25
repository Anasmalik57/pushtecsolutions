import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  // LOCATION MAP HERE

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
        <div>
          {/*Start Contact One Section*/}
          <section className="contact-one-section">
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="contact-one-image">
                    <img
                      src="assets/images/resource/contact-one-img-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-6">
                  <form action="inc/sendemail.php" className="contact-one-form">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your E-mail"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="input-box">
                          <input
                            type="text"
                            name="Subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="input-box">
                          <textarea
                            name="message"
                            placeholder="Your Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="contact__btn">
                          <button type="submit" className="theme-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/*End Contact One Section*/}

          <section className="google_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.5088957975004!2d3.2392978747598216!3d6.707572520997382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9839c2350189%3A0x689dbcb0df197c45!2sKm-38%20Lagos-Abeokuta%20Expy%2C%20Ota%20112104%2C%20Ogun%20State%2C%20Nigeria!5e0!3m2!1sen!2sin!4v1745581173047!5m2!1sen!2sin"
              className="google-map__contact"
            ></iframe>
          </section>

          {/*Start ContactinfoSection */}
          <section className="contactinfo">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4">
                  {/*Contactinfo Single*/}
                  <div className="contactinfo-single">
                    <div className="contactinfo-icon">
                      <span className="far fa-envelope-open"></span>
                    </div>
                    <div className="contactinfo-content">
                      <h4>Mail Address</h4>
                      <Link href="mailto:Pushtecsolutions@gmail.com">
                        Pushtecsolutions@gmail.com
                      </Link>
                      <br />
                      <Link href="mailto:Puranranakumar@gmail.com">
                        Puranranakumar@gmail.com
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  {/*Contactinfo Single*/}
                  <div className="contactinfo-single">
                    <div className="contactinfo-icon">
                      <span className="flaticon-phone-call-1"></span>
                    </div>
                    <div className="contactinfo-content">
                      <h4>Call Us</h4>
                      <Link href="tel:+917466903135">+91 7466903135</Link>
                      <br />
                      <Link href="tel:+2349045246370">+23 49045246370</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  {/*Contactinfo Single*/}
                  <div
                    className="contactinfo-single"
                    style={{ border: "1px solid", width: "27rem" }}
                  >
                    <div className="contactinfo-icon">
                      <span className="far fa-map-pin"></span>
                    </div>
                    <div className="contactinfo-content">
                      <h4>Visit us</h4>
                      <p>
                        KM 38, LAGOS/ABEOKUTA EXPRESSWAY, <br />
                        SANGO-OTA, OGUN STATE, NIGERIA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End ContactinfoSection */}

          {/*Start Newsletter One Section */}
          <section className="newsletter-one-section">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="newsletter-one-sec-inner">
                    <div className="title">
                      <h2>Newsletter Signup</h2>
                      <p>Sign up for our newsletter to get Updte</p>
                    </div>
                    <div className="newsletter-one-input-box">
                      <input type="Email" placeholder="Email Address" />
                      <button type="submit" className="button">
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End Newsletter One Section */}
        </div>
      </Layout>
    </>
  );
}
