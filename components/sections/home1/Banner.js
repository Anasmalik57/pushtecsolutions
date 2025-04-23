
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
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

            <section className="banner-section wow fadeIn">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    <SwiperSlide className="slide-item" style={{ backgroundImage: 'url(assets/images/main-slider/1.jpg)' }} >
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h1>Factory is <br/> equipped with  the <br/>latest  <span>technology</span></h1>
                                    <div className="text">Manufacturing Technology Supports Factories around the World. <br/>Factories are at the heart of manufacturing.</div>
                                    <div className="link-box">
                                        <Link href="about" className="theme-btn btn-style-one"><span>About Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item" style={{ backgroundImage: 'url(assets/images/main-slider/2.jpg)' }} >
                        <div className="content-outer">
                            <div className="content-box">
                                <div className="inner">
                                    <h1>Provide <br/> Industries <br/> Services</h1>
                                    <div className="text">Manufacturing Technology Supports Factories around the World. <br/>Factories are at the heart of manufacturing.</div>
                                    <div className="link-box">
                                        <Link href="about" className="theme-btn btn-style-one"><span>About Us</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                    <div className="banner-slider-nav">
                        <div className="banner-slider-control banner-slider-button-prev h1p"><span><i className="far fa-angle-left"></i></span></div>
                        <div className="banner-slider-control banner-slider-button-next h1n"><span><i className="far fa-angle-right"></i></span> </div>
                    </div>
                    <div className="banner-shape__left_1"></div>
                    <div className="banner-shape__left_2"></div>
                    <div className="banner-big-title" data-parallax='{"x": 200}'>Factory</div>

            </section>
        </>
    )
}
