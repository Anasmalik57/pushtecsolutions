"use client";
import { testimonials } from "@/components/PushTechData";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  spaceBetween: 30,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".srn",
    prevEl: ".srp",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 3,
    },
    1350: {
      slidesPerView: 3,
    },
  },
};

export default function Testimonial() {
  

  return (
    <>
      {/*Start Testimonials One Section */}
      <section
        className="testimonials-one-section two"
        style={{
          backgroundImage: "url(assets/images/background/video-sec-two-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="thm-section-title text-center">
            <h4 className="sub-title-shape-left section_title-subheading">
              Testimonials
            </h4>
            <h2>
              We are Trusted <br />
              25 Countries Worldwide
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                {...swiperOptions}
                className="testimonials-one-carousel owl-theme owl-carousel"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="testimonials-one-single">
                      <div className="client-info">
                        <div className="client-img">
                          <img src={testimonial.image} alt="" style={{borderRadius: "50%"}} />
                        </div>
                        <div className="client-content">
                          <h3>{testimonial.name}</h3>
                          <h6>{testimonial.role}</h6>
                        </div>
                      </div>
                      <div className="text-box" style={{textAlign: "justify"}}>
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="testimonials-quote">
                        <i className="fa fa-quote-left"></i>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/*End Testimonials One Section */}
    </>
  );
}