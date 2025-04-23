'use client'
import Link from "next/link"
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
export default function Brand() {
    return (
        <>
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
            
        </>
    )
}
