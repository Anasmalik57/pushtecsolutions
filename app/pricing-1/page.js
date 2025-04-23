'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Home() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Affordable Pricing">
                <div>
                    <section className="pricing-section">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Flexible Plans for <br /> Small to Fast-Growing Company</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="pricing-btn">
                                    <ul className="nav nav-tabs tab-btn-style-one" role="tablist">
                                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>Monthly
                                            </a>
                                        </li>
                                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                                Annually
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-content">
                                {/* Tab panes */}
                                <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <h3>Switch to annual plan and get 25% offer.</h3>
                                        <div className="wrapper-box">
                                            <div className="row m-0">
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Basic Pack</div>
                                                                <div className="price"><span>$</span>24.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Most Recommended</h5>
                                                            <h4>Power of choice is untrammelled and <br />do what we like best.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />4-5 Weeks from to finish</li>
                                                                <li><span><i className="flaticon-right-arrow" />Data sprint</span></li>
                                                                <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />20 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block active animated fadeInLeft" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Standard Pack</div>
                                                                <div className="price"><span>$</span>45.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>for Large Business</h5>
                                                            <h4>Matters to  principle of selection our <br />pleasures to secure.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />3-4 Weeks from to finish</li>
                                                                <li><i className="flaticon-tick" />Data sprint</li>
                                                                <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />30 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Advanced Pack</div>
                                                                <div className="price"><span>$</span>60.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Most Recommended</h5>
                                                            <h4>These cases are perfectly simple <br />&amp; easy to distinguish.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />2 Weeks from to finish</li>
                                                                <li><i className="flaticon-tick" />Data sprint</li>
                                                                <li><i className="flaticon-tick" />Results revision</li>
                                                                <li><i className="flaticon-tick" />20 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                                        <h3>Switch to annual plan and get 25% offer.</h3>
                                        <div className="wrapper-box">
                                            <div className="row m-0">
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Basic Pack</div>
                                                                <div className="price"><span>$</span>24.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Most Recommended</h5>
                                                            <h4>Power of choice is untrammelled and <br />do what we like best.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />4-5 Weeks from to finish</li>
                                                                <li><span><i className="flaticon-right-arrow" />Data sprint</span></li>
                                                                <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />20 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block active animated fadeInRight" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Standard Pack</div>
                                                                <div className="price"><span>$</span>45.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>for Large Business</h5>
                                                            <h4>Matters to  principle of selection our <br />pleasures to secure.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />3-4 Weeks from to finish</li>
                                                                <li><i className="flaticon-tick" />Data sprint</li>
                                                                <li><span><i className="flaticon-right-arrow" />Results revision</span></li>
                                                                <li><i className="flaticon-tick" />30 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 pricing-block animated fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                                    <div className="inner-box">
                                                        <div className="top-content">
                                                            <div className="row m-0 justify-content-between">
                                                                <div className="category">Advanced Pack</div>
                                                                <div className="price"><span>$</span>60.00 <sub>/mo</sub></div>
                                                            </div>
                                                        </div>
                                                        <div className="lower-content">
                                                            <h5>Most Recommended</h5>
                                                            <h4>These cases are perfectly simple <br />&amp; easy to distinguish.</h4>
                                                            <ul>
                                                                <li><i className="flaticon-tick" />2 Weeks from to finish</li>
                                                                <li><i className="flaticon-tick" />Data sprint</li>
                                                                <li><i className="flaticon-tick" />Results revision</li>
                                                                <li><i className="flaticon-tick" />20 Days of support</li>
                                                            </ul>
                                                            <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Get Started a Free Trail</span></Link></div>
                                                            <div className="hint"><span>*</span> No credit card required</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Feature Section Two */}
                    <section className="feature-section-two style-two">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Envolve</h4>
                                            <div className="text">To take a trivial example, which of us undertakes <br />laborious physical exercise.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Envolve</h4>
                                            <div className="text">Who chooses to enjoy a pleasure that has no one <br />annoying consequences.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}