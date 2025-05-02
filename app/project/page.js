"use client";
import ImageSlider from "@/components/ImageSlider";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/Newsletter";
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

  // Navigation
  navigation: {
    nextEl: ".owl-next",
    prevEl: ".owl-prev",
  },

  // Pagination
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
  const [isOpen, setOpen] = useState(false);

  const portfolioItems = [
    {
      video:
        "https://res.cloudinary.com/dozvbxpje/video/upload/v1746186128/WhatsApp_Video_2025-04-25_at_12.24.18_8160fa9c_djcj18.mp4",
    },
    {
      video:
        "https://res.cloudinary.com/dozvbxpje/video/upload/v1746186320/WhatsApp_Video_2025-04-25_at_12.29.38_0c8901bf_y9chaz.mp4",
    },
    {
      video:
        "https://res.cloudinary.com/dozvbxpje/video/upload/v1746186169/WhatsApp_Video_2025-04-25_at_12.26.29_32edfd73_g1cbci.mp4",
    },
    {
      video:
        "https://res.cloudinary.com/dozvbxpje/video/upload/v1746186154/WhatsApp_Video_2025-04-25_at_12.27.15_0d31200c_n2mbme.mp4",
    },
    {
      video:
        "https://res.cloudinary.com/dozvbxpje/video/upload/v1746186143/WhatsApp_Video_2025-04-25_at_12.26.18_b9bb7ed5_fbbhty.mp4",
    },
    {
      video:
        "https://res.cloudinary.com/dozvbxpje/video/upload/v1746186134/WhatsApp_Video_2025-04-25_at_12.26.23_facb0a01_bbkx5z.mp4",
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
        {/*Start Portfolio One Section */}
        <section className="portfolio-one-section">
          <div className="container">
            <div className="portfolio-one-content">
              <div className="sortable-masonry">
                <div className="row items-container">
                  {portfolioItems.map((item, index) => (
                    <div
                      key={index}
                      className={`col-xl-4 col-lg-4 col-md-6 masonry-item all ${item.categories}`}
                    >
                      <div className="" style={{ cursor: "pointer" }}>
                        <video
                          src={item.video}
                          controls
                          style={{ width: "100%", height: "300px" }}
                          onError={(e) =>
                            console.error("Video failed to load:", item.video)
                          }
                        >
                          <p>Video not supported or failed to load.</p>
                        </video>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Portfolio One Section */}

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
      </Layout>
    </>
  );
}
