'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
           
                {/*Start Portfolio One Section */}  
                <section className="portfolio-one-section">
                    <div className="container">
                    <div className="portfolio-one-content">
                        <div className="sortable-masonry"> 
                                <div className="row items-container">
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all mechanical chemical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-1.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-1.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all agriculture chemical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-2.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-2.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all agriculture mechanical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-3.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-3.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all mechanical chemical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-4.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-4.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all agriculture chemical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-5.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-5.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all agriculture mechanical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-6.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-6.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all agriculture mechanical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-7.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-7.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all agriculture mechanical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-8.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-8.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*Single Case One*/} 
                                    <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all agriculture mechanical material">
                                        <div className="portfolio-one-single">
                                            <div className="portfolio-one-img-box">
                                                <img src="assets/images/portfolio/port-1-img-9.jpg" alt=""/>
                                                <div className="portfolio-two-icon-box">
                                                    <Link href="assets/images/portfolio/port-1-img-9.jpg" className="img-popup"><i className="fa fa-search"></i></Link>
                                                    <Link href="project"><i className="fa fa-link"></i></Link>
                                                </div>
                                                <div className="portfolio-text">
                                                    <h4>Mechanical Engineering</h4>
                                                    <p>Mechanical</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>    
                            </div>
                    </div>
                    </div>
                </section>
                {/*End Portfolio One Section */}   
                
                {/*Start video Two Section */}  
                <section className="video-two-section" style={{ backgroundImage: 'url(assets/images/background/video-sec-two-bg.jpg)' }} >
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