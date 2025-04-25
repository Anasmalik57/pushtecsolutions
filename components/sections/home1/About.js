export default function About() {
  return (
    <>
      {/* Start About Two Section */}
      <section className="about-tow-section about-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div
                className="about-two-left-content wow slideInLeft"
                data-wow-delay="100ms"
              >
                <div className="about-two-sec-image">
                  <div
                    className="about-two-sec-image-bg-1"
                    style={{
                      backgroundImage:
                        "url(assets/images/about/about-2--pattern-1.png)",
                    }}
                  ></div>
                  <div
                    className="about-two-sec-image-bg-2"
                    style={{
                      backgroundImage:
                        "url(assets/images/about/about-2--pattern-2.png)",
                    }}
                  ></div>
                  <img
                    src="/assets/images/about/about-page-img-l.webp"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    width={600}
                    height={400}
                    alt="about page img"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-two-right-content">
                <div className="about-two-title">
                  <h4 className="sub-title-shape-left section_title-subheading">
                    About Our Company
                  </h4>
                  <h2>Welcome to PushTech Solutions </h2>
                  <p className="about-two-title-text">
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
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-tow-experience-years">
                      <div className="about-tow-experience-years-icon">
                        <span className="flaticon-check"></span>
                      </div>
                      <div className="about-tow-experience-years-text">
                        <h2>
                          100% Client <br /> Satisfaction{" "}
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-tow-experience-years">
                      <div className="about-tow-experience-years-icon">
                        <span className="flaticon-check"></span>
                      </div>
                      <div className="about-tow-experience-years-text">
                        <h2>
                          World className <br /> Worker
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="about-two-bottom-content">
                                    <h3>John Franclin - <span>CEO & Founder</span></h3>
                                    <div className="signature">
                                        <img src="assets/images/about/signature-1.png" alt=""/>
                                    </div>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Two Section */}
    </>
  );
}
