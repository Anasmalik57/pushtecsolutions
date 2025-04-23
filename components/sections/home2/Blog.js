import Link from "next/link"
export default function Blog() {
    return (
        <>
            {/*Start Blog One Section */}
            <section className="blog-one-section">
                <div className="container">
                <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Blog</h4>
                        <h2>Our Latest News</h2>
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
                                        <h3><Link href="#">Manufacturer might have a financing</Link></h3>
                                    </div>
                                    <div className="blog-one-text">
                                        <p>Factory is a group of companies that are related based on their primary business activities. ...</p>
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
                                        <h3><Link href="#">Factories are at the heart of manufacturing.</Link></h3>
                                    </div>
                                    <div className="blog-one-text">
                                        <p>Factory is a group of companies that are related based on their primary business activities. ...</p>
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
                                        <h3><Link href="#">Factory Solutions offers to all production companies</Link></h3>
                                    </div>
                                    <div className="blog-one-text">
                                        <p>Factory is a group of companies that are related based on their primary business activities. ...</p>
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
