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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
            {/*Start Project Details Section */} 
                <section className="project-details-image-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-details-img">
                                    <img src="assets/images/project/project-details-img-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                {/*End Project Details Section */}
                
                {/*Start Project Details content Section */} 
                <section className="project-details-content-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="project-details-left-content">
                                    <div className="title"><h2>Project Details</h2></div>
                                    <div className="text">
                                        <p className="first-text">Materials science is important for the development of technology and has been or thousands of years. Different materials have different strengths and weaknesses and are better for different purposes. Since technology is the process of using our scientific knowledge to create devices and objects that benefit humans, understanding materials is an important step in this process.</p>
                                        <p className="second-text">The more you understand the materials that you have choose from, the better choices you will make. Materials studied in materials science can be anything from simple materials like wood, to modern man-made materials like plastic, to the very latest materials</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="project-details-right">
                                    <ul>
                                        <li>
                                            <h4>Client</h4>
                                            <p>Jack Farnes</p>
                                        </li>
                                        <li>
                                            <h4>Client</h4>
                                            <p>Jack Farnes</p>
                                        </li>
                                        <li>
                                            <h4>Client</h4>
                                            <p>Jack Farnes</p>
                                        </li>
                                        <li>
                                            <h4>Client</h4>
                                            <p>Jack Farnes</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> 
                {/*End Project Details content Section */} 
                
                <section className="project-details-benifits-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="project-details-benifits-single">
                                    <div className="project-details-benifits-image">
                                        <img src="assets/images/project/project-details-benifits-img-1.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="project-details-benifits-single">
                                    <div className="project-details-benifits-image">
                                        <img src="assets/images/project/project-details-benifits-img-2.jpg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
                                <div className="project-details-benifits">
                                <h3>Project Benifits</h3>
                                    <div className="text">
                                        <p>Learn how to optimize manufacturing systems performance and control cos Design and Fabrication of External Pipe Climbing Robot.</p>
                                    </div>
                                    <ul>
                                        <li><i className="fa fa-angle-right"></i>Delivery on Time</li>
                                        <li><i className="fa fa-angle-right"></i>Professional Engineerr</li>
                                        <li><i className="fa fa-angle-right"></i>Quality Products</li>
                                        <li><i className="fa fa-angle-right"></i>Strategy Maintains</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
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