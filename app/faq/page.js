'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
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
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ’S">
                <div>
                    {/*Start Faq One Section*/}
                    <section className="faq-one-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4">
                                    <div className="faq-one-left">
                                        <h3>frequently asked questions</h3>
                                        <p>Not all people can afford to pay for content immediately after creating their website, so that’s not a condition you can demand from your clients.</p>
                                        <div className="faq-one-left-btn">
                                            <Link href="" className="theme-btn">Contact us</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8">
                                    <div className="faq-one-right">
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
                                            <li className="accordion block">
                                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                                    <div className="icon-outer"><i className="fa fa-plus"></i></div>
                                                    <h4>What are the three main types of industries?</h4>
                                                </div>
                                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                                    <div className="content">
                                                        <div className="text">Lorem Ipsum has been the factory's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="accordion block">
                                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                                    <div className="icon-outer"><i className="fa fa-plus"></i></div>
                                                    <h4>What is factory analysis and why is it important?</h4>
                                                </div>
                                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
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
                    {/*End Faq One Section*/}
                    
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