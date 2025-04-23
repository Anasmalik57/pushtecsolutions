
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter2() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <div className="portfolio-one-content">
                <ul className="filter-tabs filter-btns text-center clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">View All</span></li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}><span className="filter-text">Mechanical</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}><span className="filter-text">Chemical</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}><span className="filter-text">Agriculture</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}><span className="filter-text">Material</span></li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all cat-1 cat-2">
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
                {/* Case Block */}
                <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all cat-3 cat-4">
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
                {/* Case Block */}
                <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all cat-4 cat-3">
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
                {/* Case Block */}
                <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all cat-2 cat-1">
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
                {/* Case Block */}
                <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all cat-4 cat-1">
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
                {/* Case Block */}
                <div className="col-xl-4 col-lg-4 col-md-6 masonry-item all cat-3 cat-2">
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
            </div>

        </>
    )
}
