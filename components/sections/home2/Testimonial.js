
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-next',
        prevEl: '.owl-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }



}
export default function Testimonial() {
    return (
        <>

            {/*Start Testimonials One Section */} 
            <section className="testimonials-one-section">
                <div className="container">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Testimonials</h4>
                    <h2>What Clients Say About Us</h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <Swiper {...swiperOptions} className="testimonials-one-carousel owl-theme owl-carousel">
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-1.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>Jack Farnes</h3>
                                        <h6>Developer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-2.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>John Pedlock</h3>
                                        <h6>Designer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-3.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>Mark Joseph</h3>
                                        <h6>Developer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-1.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>Jack Farnes</h3>
                                        <h6>Developer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-2.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>John Pedlock</h3>
                                        <h6>Designer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-3.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>Mark Joseph</h3>
                                        <h6>Developer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-1.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>Jack Farnes</h3>
                                        <h6>Developer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-2.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>John Pedlock</h3>
                                        <h6>Designer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                                {/*Testimonials One Single*/}
                            <SwiperSlide>
                            <div className="testimonials-one-single">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="assets/images/testimonial/testi-img-3.png" alt=""/>
                                    </div>
                                    <div className="client-content">
                                        <h3>Mark Joseph</h3>
                                        <h6>Developer</h6>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices </p>
                                </div>
                                <div className="testimonials-quote">
                                    <i className="fa fa-quote-left"></i>
                                </div>
                            </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                </div>
            </section>
            {/*End Testimonials One Section */} 
        </>
    )
}
