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
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Service Details">
                <div>
                    {/*Start Service Details Section*/}
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
                                                <li>
                                                    <div className="icon">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                    <div className="text">
                                                        <Link href="#">Mechanical Engineering</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                    <div className="text">
                                                        <Link href="#">Material Engineering</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                    <div className="text">
                                                        <Link href="#">Agricultural Processing</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                    <div className="text">
                                                        <Link href="#">Petrolium & Gas</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                    <div className="text">
                                                        <Link href="#">Chemical Engineering</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fa fa-angle-right"></i>
                                                    </div>
                                                    <div className="text">
                                                        <Link href="#">Power & Energy</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="service-details-sidebar-single about-our-factory">
                                            <div className="broucher-box">
                                                <div className="icon">
                                                    <i className="flaticon-diploma"></i>
                                                </div>
                                                <div className="content">
                                                    <p>About Our factory</p>
                                                    <Link href="#"><i className="fa fa-download"></i>download.PDF</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="service-details-sidebar-single need-any-help" style={{ backgroundImage: 'url(assets/images/service/need-any-help-img-bg.jpg)' }} >
                                            <div className="icon-box">
                                                <span className="flaticon-team"></span>
                                            </div>
                                            <div className="text-box">
                                                <h3>Need any help?</h3>
                                                <Link href="tel:+812 555 33 44">+812 555 33 44</Link>
                                                <Link href="mailto:info@example.com">info@example.com</Link>
                                            </div>
                                            <div className="need-help-get-quote-btn">
                                                <Link className="theme-btn" href="#">Get a quote</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8">
                                    <div className="service-details-right-content">
                                        <div className="service-details-right-image">
                                            <img src="assets/images/service/service-details-img-1.jpg" alt=""/>
                                        </div>
                                        <div className="service-details-right-text">
                                            <h3>Material Engineering</h3>
                                            <p className="first-text">Materials science is important for the development of technology and has been or thousands of years. Different materials have different strengths and weaknesses and are better for different purposes. Since technology is the process of using our scientific knowledge to create devices and objects that benefit humans, understanding materials is an important step in this process.</p>
                                            <p className="last-text">The more you understand the materials that you have choose from, the better choices you will make. Materials studied in materials science can be anything from simple materials like wood, to modern man-made materials like plastic, to the very latest materials</p>
                                        </div>
                                        <div className="why-choose-our-factory">
                                            <div className="why-choose-our-factory-image">
                                                <img src="assets/images/service/service-details-img-2.jpg" alt=""/>
                                            </div>
                                            <div className="why-choose-our-factory-text">
                                                <h3>Why People Choose Our factory</h3>
                                                <p>Trade in services can improve economic performance and provide a range of traditional and new export opportunities.</p>
                                                <ul>
                                                    <li><i className="fa fa-angle-right"></i>Delivery on Time</li>
                                                    <li><i className="fa fa-angle-right"></i>Professional Engineerr</li>
                                                    <li><i className="fa fa-angle-right"></i>Quality Products</li>
                                                    <li><i className="fa fa-angle-right"></i>Strategy Maintains</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <ul className="features-list">
                                            <li>
                                                <div className="icon">
                                                    <span className="flaticon-robotic"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Smart <br/> Technology</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="flaticon-paint-roller"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Quality <br/> Materials</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="flaticon-team"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Great <br/> Support</h4>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul className="accordion-box">
                                            <li className="accordion block">
                                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                    <div className="icon-outer"><i className="fa fa-plus"></i></div>
                                                    <h4>How do I get started with Booking Factory?</h4>
                                                </div>
                                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Lorem Ipsum has been the factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                    <div className="icon-outer"><i className="fa fa-plus"></i></div>
                                                    <h4>Can Booking Factory help us make more revenue?</h4>
                                                </div>
                                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Lorem Ipsum has been the factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                                    <div className="icon-outer"><i className="fa fa-plus"></i></div>
                                                    <h4>Where in the world is Booking Factory available?</h4>
                                                </div>
                                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Lorem Ipsum has been the factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*End Service Details Section*/}
                    
                    
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
                </div>

            </Layout>
        </>
    )
}