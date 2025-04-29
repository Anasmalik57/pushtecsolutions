"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CounterUp from "@/components/elements/CounterUp";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { teamMembers } from "@/components/PushTechData";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 2, spaceBetween: 30 },
    767: { slidesPerView: 3, spaceBetween: 30 },
    991: { slidesPerView: 3, spaceBetween: 30 },
    1199: { slidesPerView: 4, spaceBetween: 30 },
    1350: { slidesPerView: 5, spaceBetween: 30 },
  },
};

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        {/* Start About Two Section */}
        <section className="about-tow-section">
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
                          "url(assets/images/about/about-2--pattern-1.png",
                      }}
                    ></div>
                    <div
                      className="about-two-sec-image-bg-2"
                      style={{
                        backgroundImage:
                          "url(assets/images/about/about-2--pattern-2.png",
                      }}
                    ></div>
                    <img src="assets/images/about/about-2-img-1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-two-right-content">
                  <div className="about-two-title">
                    <h4 className="sub-title-shape-left section_title-subheading">
                      About Us
                    </h4>
                    <h2>Introduction to factory</h2>
                    <p className="about-two-title-text">
                      With 15 years of experience, 100% quality components, and
                      an assured hassle-free experience, Pushtec Solutions
                      delivers an Assured & Proven Quality Guarantee along with
                      the most user-friendly machines. Pushtec Solutions also
                      offers an array of services to support its wide base of
                      installed equipment in India and abroad. To date, the
                      company has successfully installed over 14,500 machines
                      and manages all installations efficiently through a strong
                      internal service team.
                    </p>
                  </div>
                  <div className="about-tow-experience-years style-two">
                    <div className="about-tow-experience-years-icon">
                      <span className="flaticon-medal"></span>
                    </div>
                    <div className="about-tow-experience-years-text">
                      <h2>15+</h2>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                  <div className="about-two-btn">
                    <Link href="/contact" className="theme-btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Two Section */}
        {/* Start Funfacts One Section */}
        <section
          className="funfacts-one-section"
          style={{
            backgroundImage: "url(assets/images/background/funfact-1-bg.jpg",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div
                  className="funfacts-one-single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="icon">
                    <span className="flaticon-like"></span>
                  </div>
                  <div className="content count-box">
                    <h2>
                      <CounterUp end={378} />
                    </h2>
                    <p>Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div
                  className="funfacts-one-single wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="icon">
                    <span className="flaticon-architect"></span>
                  </div>
                  <div className="content count-box">
                    <h2>
                      <CounterUp end={780} />
                    </h2>
                    <p>Expert Engineers</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div
                  className="funfacts-one-single wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="icon">
                    <span className="flaticon-medal"></span>
                  </div>
                  <div className="content count-box">
                    <h2>
                      <CounterUp end={189} />
                    </h2>
                    <p>Awards Win</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div
                  className="funfacts-one-single wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="icon">
                    <span className="flaticon-carbon"></span>
                  </div>
                  <div className="content count-box">
                    <h2>
                      <CounterUp end={64} />
                    </h2>
                    <p>World Wide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Funfacts One Section */}
        {/* Start Team One Section */}
        <section className="team-one-section">
          <div className="container">
            <div className="thm-section-title text-center">
              <h4 className="sub-title-shape-left section_title-subheading">
                Our Team
              </h4>
              <h2>Experts Engineer</h2>
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="col-xl-3 col-lg-3 col-md-6"
                >
                  <div
                    className="team-one-single wow fadeInLeft"
                    data-wow-delay={member.delay}
                  >
                    <div className="team-one-img">
                      <img src={member.image} alt={member.name} />
                      <div className="team-one-hover">
                        <div className="team-one-social">
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
                    <div className="team-one-content">
                      <h3>{member.name}</h3>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End Team One Section */}
        {/* Start Video Two Section */}
        <section
          className="video-two-section"
          style={{
            backgroundImage:
              "url(assets/images/background/video-sec-two-bg.jpg",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="video-two-sec-inner">
                  <div className="video-two-sec-icon">
                    <a
                      onClick={() => setOpen(true)}
                      className="video-two-sec-btn video-popup"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                  <div className="video-two-sec-content">
                    <h2>
                      We offer best <span>industrial services.</span> <br /> 15+
                      years of experience
                    </h2>
                    <p>Manufacturing Technology Supports Factories around </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Video Two Section */}
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
        {/* Start History One Section */}
        <section className="history-one-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="history-one-sec-content">
                  <div className="history-one-sec-title">
                    <h4 className="sub-title-shape-left section_title-subheading">
                      Company History
                    </h4>
                    <h2>
                      Pushtec’s Journey in <br /> Custom Machinery
                    </h2>
                  </div>
                  <div className="history-one-sec-date">
                    <h3>2010 - {currentYear}</h3>
                  </div>
                  <div className="history-one-text">
                    <p>
                      primary business activities. ... For example, while an
                      automobile manufacturer might have a financing division
                      that contributes 10% to the firm's overall revenues,
                    </p>
                  </div>
                  <div className="history-one-btn">
                    <Link href="#" className="theme-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div
                  className="history-one-video-sec wow slideInRight"
                  data-wow-delay="100ms"
                >
                  <div className="history-one-video-img">
                    <div
                      className="history-one-video-img-bg"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/history-1-video-img-2.jpg",
                      }}
                    ></div>
                    <div className="history-one-video-img-shape"></div>
                    <img
                      src="assets/images/resource/history-1-video-img-1.jpg"
                      alt=""
                    />
                    <div className="history-one-video-btn-box">
                      <a
                        onClick={() => setOpen(true)}
                        className="history-one-video-btn video-popup"
                      >
                        <i className="fa fa-play"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End History One Section */}
        {/* Start Newsletter One Section */}
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
        {/* End Newsletter One Section */}
      </Layout>
    </>
  );
}