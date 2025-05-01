"use client";
import ImageSlider from "@/components/ImageSlider";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/Newsletter";
import { services } from "@/components/PushTechData";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our services">
        <div>
          {/*Start Main Service Two Section */}
          <section className="main-service-one-section two">
            <div className="container">
              <div className="row">
                {services.map((service, index) => (
                  <div key={index} className="col-xl-4 col-lg-4">
                    {/*Main Service One Sec Single*/}
                    <Link
                      href={"/service-details"}
                      className="main-service-one-sec-single wow fadeInUp"
                      data-wow-delay={service.delay}
                    >
                      <div className="main-service-one-sec-img">
                        <img src={service.image} alt="" />
                      </div>
                      <div className="main-service-one-sec-content">
                        <h4>{service.category}</h4>
                        <h3>{service.title}</h3>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*End Main Service Two Section */}

          {/*Start video Two Section */}
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
                      <p>
                        Manufacturing Technology Supports Factories around...{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End video Two Section */}
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

          {/*Start Newsletter One Section */}
          <Newsletter />
          {/*End Newsletter One Section */}
        </div>
      </Layout>
    </>
  );
}
