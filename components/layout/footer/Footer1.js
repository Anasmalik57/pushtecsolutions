import Link from "next/link"
export default function Footer1() {
    return (
        <>
        {/*Start Footer Section */}
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="footer-widget-single footer-widget-about">
                            <div className="footer-widget-title">
                                <h3>About Us</h3>
                            </div>
                            <div className="footer-widget-about-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                            <div className="footer-widget-about-social">
                                <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                <Link href="#"><i className="fab fa-twitter"></i></Link>
                                <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                <Link href="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="footer-widget-single footer-widget-useful-links">
                        <div className="footer-widget-title">
                                <h3>Usefull Links</h3>
                            </div>
                            <ul className="footer-widget-useful-links-list list-unstyled">
                                <li><Link href="#">About Us</Link></li>
                                <li><Link href="#">Team</Link></li>
                                <li><Link href="a">Testimoials</Link></li>
                                <li><Link href="#">Faq’s</Link></li>
                                <li><Link href="#">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="footer-widget-single footer-widget-contact">
                        <div className="footer-widget-title">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="footer-widget_contact-info">
                                <p>Flat 20, Reynolds USA</p>
                                <Link href="tel:666-888-0000">+812 555 33 44</Link>
                                <Link href="mailto:info@example.com">info@example.com</Link><br/>  
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="footer-widget-single footer-widget-gallery">
                        <div className="footer-widget-title">
                                <h3>Gallery</h3>
                            </div>
                            <ul className="footer-widget-gallery-list list-unstyled">
                                <li>
                                    <div className="gallery-img">
                                        <img src="assets/images/footer/footer-gallery-img-1.jpg" alt=""/>
                                        <div className="gallery-img-hover">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gallery-img">
                                        <img src="assets/images/footer/footer-gallery-img-2.jpg" alt=""/>
                                        <div className="gallery-img-hover">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gallery-img">
                                        <img src="assets/images/footer/footer-gallery-img-3.jpg" alt=""/>
                                        <div className="gallery-img-hover">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gallery-img">
                                        <img src="assets/images/footer/footer-gallery-img-4.jpg" alt=""/>
                                        <div className="gallery-img-hover">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gallery-img">
                                        <img src="assets/images/footer/footer-gallery-img-5.jpg" alt=""/>
                                        <div className="gallery-img-hover">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gallery-img">
                                        <img src="assets/images/footer/footer-gallery-img-6.jpg" alt=""/>
                                        <div className="gallery-img-hover">
                                            <i className="fa fa-link"></i>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-bottom">
                            <p>© 2024, All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>   
        {/*End Footer Section */}   

        </>
    )
}
