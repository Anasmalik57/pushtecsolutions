import Link from "next/link"
export default function News() {
    return (
        <>
            {/*Start Blog One Section */}
            <section className="blog-one-section">
                <div className="container">
                <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Recent Post</h4>
                    <h2>Latest From our blog</h2>
                </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4">
                            {/*Blog One Single*/}
                            <div className="blog-one-single wow fadeInUp" data-wow-delay="100ms">
                                <div className="blog-one-img">
                                    <img src="assets/images/Blog/blog-1-img-1.jpg" alt=""/>
                                </div>
                                <div className="blog-one-content">
                                    <ul className="blog-classNameic-meta">
                                        <li><Link href="#"><i className="far fa-user-circle"></i> Admin</Link></li>
                                        <li><Link href="#"><i className="far fa-comments"></i> 2 Comments</Link>
                                        </li>
                                    </ul>
                                    <div className="blog-one-title">
                                        <h3><Link href="#">How Custom Machinery Boosts FMCG Efficiency</Link></h3>
                                    </div>
                                    <div className="blog-one-text">
                                        <p>Discover how Pushtec’s tailored machinery solutions can streamline your FMCG production, reduce downtime, and improve overall efficiency in your operations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            {/*Blog One Single*/}
                            <div className="blog-one-single wow fadeInUp" data-wow-delay="200ms">
                                <div className="blog-one-img">
                                    <img src="assets/images/Blog/blog-1-img-2.jpg" alt=""/>
                                </div>
                                <div className="blog-one-content">
                                    <ul className="blog-classNameic-meta">
                                        <li><Link href="#"><i className="far fa-user-circle"></i> Admin</Link></li>
                                        <li><Link href="#"><i className="far fa-comments"></i> 2 Comments</Link>
                                        </li>
                                    </ul>
                                    <div className="blog-one-title">
                                        <h3><Link href="#">The Role of Precision in Modern Manufacturing</Link></h3>
                                    </div>
                                    <div className="blog-one-text">
                                        <p>Learn how precision-engineered machinery from Pushtec enhances product quality and consistency for FMCG businesses, ensuring top-tier performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4">
                            {/*Blog One Single*/}
                            <div className="blog-one-single wow fadeInUp" data-wow-delay="300ms">
                                <div className="blog-one-img">
                                    <img src="assets/images/Blog/blog-1-img-3.jpg" alt=""/>
                                </div>
                                <div className="blog-one-content">
                                    <ul className="blog-classNameic-meta">
                                        <li><Link href="#"><i className="far fa-user-circle"></i> Admin</Link></li>
                                        <li><Link href="#"><i className="far fa-comments"></i> 2 Comments</Link>
                                        </li>
                                    </ul>
                                    <div className="blog-one-title">
                                        <h3><Link href="#">Adapting Machinery for FMCG Innovation</Link></h3>
                                    </div>
                                    <div className="blog-one-text">
                                        <p>Explore how Pushtec’s adaptable machinery solutions help FMCG companies innovate, scale, and stay ahead in a competitive market.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            {/*End Blog One Section */}
        </>
    )
}
