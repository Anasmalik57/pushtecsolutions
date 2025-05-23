"use client";
import ImageSlider from "@/components/ImageSlider";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/Newsletter";
import { sidebarServices } from "@/components/PushTechData";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};

export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });
  const [isOpen, setOpen] = useState(false);

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service Details">
        <div>
          {/* Start Service Details Section */}
          <section className="service-details-section">
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="service-details-sidebar">
                    <div className="service-details-sidebar-single view-all-services">
                      <div className="title">
                        <h3>View all Services</h3>
                      </div>
                      <ul>
                        {sidebarServices.map((service, index) => (
                          <li key={index}>
                            <div className="icon">
                              <i className="fa fa-angle-right"></i>
                            </div>
                            <div className="text">
                              <Link href={service.href}>{service.title}</Link>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-details-sidebar-single about-our-factory">
                      <div className="broucher-box">
                        <div className="icon">
                          <i className="flaticon-diploma"></i>
                        </div>
                        <div className="content">
                          <p>About Our factory</p>
                          <Link href="#">
                            <i className="fa fa-download"></i>download.PDF
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div
                      className="service-details-sidebar-single need-any-help"
                      style={{
                        backgroundImage:
                          "url(assets/images/service/need-any-help-img-bg.jpg)",
                      }}
                    >
                      <div className="icon-box">
                        <span className="flaticon-team"></span>
                      </div>
                      <div className="text-box">
                        <h3>Need any help?</h3>
                        <Link href="tel:7466903135">+91 7466903135</Link>
                        <Link
                          target="_blank"
                          href="mailto:Puranranakumar@gmail.com"
                        >
                          Puranranakumar@gmail.com
                        </Link>
                        <Link
                          target="_blank"
                          href="mailto:Pushtecsolutions@gmail.com"
                        >
                          Pushtecsolutions@gmail.com
                        </Link>
                      </div>
                      <div className="need-help-get-quote-btn">
                        <Link className="theme-btn" href="#">
                          Get a quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="service-details-right-content">
                    <div className="service-details-right-image">
                      <img
                        src="assets/images/service/service-details-img-1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="service-details-right-text">
                      <h3>Custom Machinery Solutions</h3>
                      <p className="first-text">
                        At Pushtec Solutions, we provide specialized machinery
                        and equipment for the pharmaceutical, cosmetic,
                        toothpaste, and liquid product industries. Our offerings
                        include advanced filling and packing machines, box
                        taping systems, and nylon shlive machines.
                      </p>
                      <p className="last-text">
                        With over 15 years of industry expertise, we also
                        manufacture storage tanks under the VISSAL brand and
                        offer comprehensive spare parts and installation
                        services across Nigeria. Our solutions are designed to
                        maximize efficiency, precision, and reliability in your
                        production processes.
                      </p>
                    </div>
                    <div className="why-choose-our-factory">
                      <div className="why-choose-our-factory-image">
                        <img
                          src="assets/images/service/service-details-img-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="why-choose-our-factory-text">
                        <h3 style={{ textTransform: "capitalize" }}>
                          WHY PEOPLE CHOOSE PUSHTEC
                        </h3>
                        <p>
                          Our innovative machinery solutions empower FMCG
                          businesses with cutting-edge technology and
                          exceptional service.
                        </p>
                        <ul>
                          <li>
                            <i className="fa fa-angle-right"></i>Tailored
                            Solutions
                          </li>
                          <li>
                            <i className="fa fa-angle-right"></i>Precision
                            Engineering
                          </li>
                          <li>
                            <i className="fa fa-angle-right"></i>Quality
                            Products
                          </li>
                          <li>
                            <i className="fa fa-angle-right"></i>Reliable
                            Support
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="features-list">
                      <li>
                        <div className="icon">
                          <span className="flaticon-robotic"></span>
                        </div>
                        <div className="text">
                          <h4>
                            Smart <br /> Technology
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="flaticon-paint-roller"></span>
                        </div>
                        <div className="text">
                          <h4>
                            Quality <br /> Materials
                          </h4>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <span className="flaticon-team"></span>
                        </div>
                        <div className="text">
                          <h4>
                            Great <br /> Support
                          </h4>
                        </div>
                      </li>
                    </ul>
                    <ul className="accordion-box">
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 1 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>How do I get started with Pushtec Solutions?</h4>
                        </div>
                        <div
                          className={
                            isActive.key == 1
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              To get started, simply contact us at +91
                              7466903135 or email
                              puranankumar@pushtecsolutions.com. Our team will
                              guide you through an assessment of your FMCG
                              production needs and provide a customized
                              machinery solution tailored to your requirements.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 2 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>
                            Can Pushtec Solutions help us make more revenue?
                          </h4>
                        </div>
                        <div
                          className={
                            isActive.key == 2
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Yes, Pushtec Solutions can significantly boost
                              your revenue by enhancing efficiency, precision,
                              and adaptability in your FMCG production
                              processes. Our customized machinery reduces
                              downtime and optimizes output, leading to
                              increased profitability.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 3 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>
                            Where in the world is Pushtec Solutions available?
                          </h4>
                        </div>
                        <div
                          className={
                            isActive.key == 3
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Pushtec Solutions is available in 25 countries
                              worldwide, supporting FMCG industries with
                              cutting-edge machinery solutions. Contact us to
                              confirm availability in your region and learn how
                              we can assist your operations.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Service Details Section */}

          {/* Start Video Two Section */}
          <section
            className="video-two-section"
            style={{
              backgroundImage:
                "url(assets/images/background/video-sec-two-bg.jpg)",
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
                        We offer best <span>industrial services.</span> <br />{" "}
                        15+ years of experience
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

          {/* Brands SLider */}
          <div style={{ marginTop: "80px", marginBottom: "80px" }}>
            <ImageSlider />
          </div>

          {/* Start Newsletter One Section */}
          <Newsletter />
          {/* End Newsletter One Section */}
        </div>
      </Layout>
    </>
  );
}
