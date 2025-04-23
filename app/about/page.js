'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CounterUp from "@/components/elements/CounterUp"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

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
    }



}
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
            {/* Start About Two Section */} 
            <section className="about-tow-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two-left-content wow slideInLeft" data-wow-delay="100ms">
                                <div className="about-two-sec-image">
                                <div className="about-two-sec-image-bg-1" style={{ backgroundImage: 'url(assets/images/about/about-2--pattern-1.png' }} ></div>
                                <div className="about-two-sec-image-bg-2" style={{ backgroundImage: 'url(assets/images/about/about-2--pattern-2.png' }} ></div>
                                    <img src="assets/images/about/about-2-img-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two-right-content">
                                <div className="about-two-title">
                                    <h4 className="sub-title-shape-left section_title-subheading">About Us</h4>
                                    <h2>Introduction to factory</h2>
                                    <p className="about-two-title-text">Panasonic's Manufacturing Technology Supports Factories around the World. Factories are at the heart</p>
                                </div>
                                <div className="about-tow-experience-years style-two">
                                    <div className="about-tow-experience-years-icon">
                                        <span className="flaticon-medal"></span>
                                    </div>
                                    <div className="about-tow-experience-years-text">
                                        <h2>25</h2>
                                        <p>Years of Experience</p>
                                    </div>
                                </div>
                                <div className="about-two-bottom-content">
                                    <p className="about-two-bottom-text">primary business activities. ... For example, while an automobile manufacturer might have a financing division  that contributes 10% to the firm's overall revenues,</p>
                                    <h3>John Franclin - <span>CEO & Founder</span></h3>
                                </div>
                                <div className="about-two-btn">
                                    <Link href="" className="theme-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
            {/* End About Two Section */} 
            
            {/*Start Funfacts One Section */} 
            <section className="funfacts-one-section" style={{ backgroundImage: 'url(assets/images/background/funfact-1-bg.jpg' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Funfacts One Single*/}
                            <div className="funfacts-one-single wow fadeInUp" data-wow-delay="100ms">
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
                            {/*Funfacts One Single*/}
                            <div className="funfacts-one-single wow fadeInUp" data-wow-delay="200ms">
                                <div className="icon">
                                    <span className="flaticon-architect"></span>
                                </div>
                                <div className="content count-box">
                                    <h2>
                                    <CounterUp end={780} />
                                    </h2>
                                    <p>Expeart Engeneers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Funfacts One Single*/}
                            <div className="funfacts-one-single wow fadeInUp" data-wow-delay="300ms">
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
                            {/*Funfacts One Single*/}
                            <div className="funfacts-one-single wow fadeInUp" data-wow-delay="400ms">
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
            {/*End Funfacts One Section */} 
                
            {/*Start Team One Section */}   
            <section className="team-one-section">
                <div className="container">
                <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Our Team</h4>
                    <h2>Experts Engineer</h2>
                </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="100ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-1.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>DAVID PARKER</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="200ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-2.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>RICARDO GOMEZ</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="300ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-3.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>PETER SANDLER</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="400ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-4.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>JAMES SMITH</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Team One Section */}
                
            {/*Start video Two Section */} 
            <section className="video-two-section" style={{ backgroundImage: 'url(assets/images/background/video-sec-two-bg.jpg' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="video-two-sec-inner">
                                <div className="video-two-sec-icon">
                                    <a onClick={() => setOpen(true)} className="video-two-sec-btn video-popup"><i className="fa fa-play"></i></a>
                                </div>
                                <div className="video-two-sec-content">
                                    <h2>We offer best <span>industrial services.</span> <br/> 25+ years of experience</h2>
                                    <p>Manufacturing Technology Supports Factories around </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End video Two Section */} 
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
            
            {/*Start History One Section */}     
            <section className="history-one-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="history-one-sec-content">
                                <div className="history-one-sec-title">
                                    <h4 className="sub-title-shape-left section_title-subheading">Company History</h4>
                                    <h2>Opportunities & <br/> Importance of factory History</h2>
                                </div>
                                <div className="history-one-sec-date">
                                    <h3>1938 - 2020</h3>
                                </div>
                                <div className="history-one-text">
                                    <p>primary business activities. ... For example, while an automobile manufacturer might have a financing division that contributes 10% to the firm's overall revenues,</p>
                                </div>
                                <div className="history-one-btn">
                                    <Link href="#" className="theme-btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="history-one-video-sec wow slideInRight" data-wow-delay="100ms">
                                <div className="history-one-video-img">
                                <div className="history-one-video-img-bg" style={{ backgroundImage: 'url(assets/images/resource/history-1-video-img-2.jpg' }} ></div>
                                <div className="history-one-video-img-shape"></div>
                                    <img src="assets/images/resource/history-1-video-img-1.jpg" alt=""/>
                                    <div className="history-one-video-btn-box">
                                        <a onClick={() => setOpen(true)} className="history-one-video-btn video-popup"><i className="fa fa-play"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End History One Section */}
            -
            
            {/*Start Brand One Section */}     
            <div className="brand-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <Swiper {...swiperOptions} className="brand-one-carousel owl-carousel">
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-1.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-2.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-3.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-4.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-5.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-1.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-2.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-3.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-4.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="single_brand_item">
                                        <Link href="#"><img src="assets/images/brand/brand-1-5.jpg" alt="brand"/></Link>
                                    </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            {/*End Brand One Section */}  
            
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
                                    <input type="Email" placeholder="Email Address"/>
                                    <button type="submit" className="button"><i className="fa fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Newsletter One Section */}
            </Layout>
        </>
    )
}


