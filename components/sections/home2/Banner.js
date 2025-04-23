
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },




}


export default function Banner() {
    return (
        <>
            

            {/* Bnner Section */}
            <section className="banner-section two wow fadeIn">
                <div className="swiper-container banner-slider">
                    <Swiper {...swiperOptions} className="swiper-wrapper">

                        {/* Slide Item */}
                        <SwiperSlide>
                        <div className="swiper-slide" style={{ backgroundImage: 'url(assets/images/main-slider/1.jpg)' }} >
                            <div className="content-outer">
                                <div className="content-box">
                                    <div className="inner">
                                        <h4>Welcome To Factory</h4>
                                        <h1>Perfect Solution <br/>for Factory</h1>
                                        <div className="text">Manufacturing Technology Supports Factories around the World.</div>
                                        <div className="link-box">
                                            <Link href="#" className="theme-btn btn-style-one"><span>More About Us</span></Link>
                                            <Link href="#" className="theme-btn btn-style-one right-btn"><span>Contact us</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                        {/* Slide Item */}
                        <SwiperSlide>
                        <div className="swiper-slide" style={{ backgroundImage: 'url(assets/images/main-slider/2.jpg)' }} >
                            <div className="content-outer">
                                <div className="content-box">
                                    <div className="inner">
                                        <h4>Welcome To Factory</h4>
                                        <h1>Provide Industries <br/> Services</h1>
                                        <div className="text">Manufacturing Technology Supports Factories around the World.</div>
                                        <div className="link-box">
                                            <Link href="#" className="theme-btn btn-style-one"><span>More About Us</span></Link>
                                            <Link href="#" className="theme-btn btn-style-one right-btn"><span>Contact us</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="banner-slider-nav">
                    <div className="banner-slider-control banner-slider-button-prev h1p"><span><i className="far fa-angle-left"></i></span></div>
                    <div className="banner-slider-control banner-slider-button-next h1n"><span><i className="far fa-angle-right"></i></span> </div>
                </div>

            </section>
            {/* End Bnner Section */}
        </>
    )
}
