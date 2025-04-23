
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact">
                <div>
                    {/*Start Contact One Section*/}
                    <section className="contact-one-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="contact-one-image">
                                        <img src="assets/images/resource/contact-one-img-1.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <form action="inc/sendemail.php" className="contact-one-form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="input-box">
                                                    <input type="text" name="name" placeholder="Your name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="input-box">
                                                    <input type="email" name="email" placeholder="Your E-mail" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="input-box">
                                                    <input type="text" name="Subject" placeholder="Subject" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="input-box">
                                                    <textarea name="message" placeholder="Your Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="contact__btn">
                                                    <button type="submit" className="theme-btn">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*End Contact One Section*/}
                    
                    <section className="google_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" className="google-map__contact"></iframe>

                    </section>
                    
                    {/*Start ContactinfoSection */}   
                    <section className="contactinfo">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4">
                                    {/*Contactinfo Single*/}
                                    <div className="contactinfo-single">
                                        <div className="contactinfo-icon">
                                            <span className="far fa-envelope-open"></span>
                                        </div>
                                        <div className="contactinfo-content">
                                            <h4>Mail Address</h4>
                                            <Link href="mailto:info@example.com">info@example.com</Link><br/>
                                            <Link href="mailto:info@example.com">info@example.com</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    {/*Contactinfo Single*/}
                                    <div className="contactinfo-single">
                                        <div className="contactinfo-icon">
                                            <span className="far fa-phone"></span>
                                        </div>
                                        <div className="contactinfo-content">
                                            <h4>Call Us</h4>
                                            <Link href="tel:+812 555 33 44">+812 555 33 44</Link><br/>
                                            <Link href="tel:+812 555 33 44">+812 555 33 44</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4">
                                    {/*Contactinfo Single*/}
                                    <div className="contactinfo-single">
                                        <div className="contactinfo-icon">
                                            <span className="far fa-map-pin"></span>
                                        </div>
                                        <div className="contactinfo-content">
                                            <h4>Visit us</h4>
                                            <p>41 Flatbush Ave., Brooklyn,<br/>New York 11217, USA.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*End ContactinfoSection */} 
                    
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