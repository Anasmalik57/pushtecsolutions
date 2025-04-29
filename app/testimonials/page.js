import Layout from "@/components/layout/Layout";
import { testimonials } from "@/components/PushTechData";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Testimonials">
        <div>
          {/*Start Testimonials One Section */}
          <section className="testimonials-one-section three">
            <div className="container">
              <div className="row">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                    {/*Testimonials One*/}
                    <div className="testimonials-one-single">
                      <div className="client-info">
                        <div className="client-img">
                          <img
                            src={testimonial.image}
                            alt=""
                            style={{ borderRadius: "50%" }}
                          />
                        </div>
                        {/* <a href="https://github.com/Anasmalik57/" target="_blank" ></a> */}
                        <div className="client-content">
                          <h3>{testimonial.name}</h3>
                          <h6>{testimonial.role}</h6>
                        </div>
                      </div>
                      <div
                        className="text-box"
                        style={{ textAlign: "justify" }}
                      >
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="testimonials-quote">
                        <i className="fa fa-quote-left"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*End Testimonials One Section */}

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
