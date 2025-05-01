import ImageSlider from "@/components/ImageSlider";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Classic">
        {/*Start Blog Classic Section*/}
        <section className="blog-classic-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-classic-content">
                  {/*Blog Classic Single*/}
                  <div className="blog-classic-single">
                    <div className="blog-classic-image">
                      <img
                        src="assets/images/Blog/blog-classic-img-1.jpg"
                        alt=""
                      />
                      <div className="blog-classic-date">
                        <Link href="#">02 May, 2020</Link>
                      </div>
                    </div>
                    <div className="blog-classic-content-box">
                      <ul className="blog-classic-meta">
                        <li>
                          <Link href="#">
                            <i className="far fa-user-circle"></i> Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-comments"></i> 2 Comments
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-classic-title">
                        <h3>
                          <Link href="#">
                            Manufacturer might have <br /> a financing advantage
                          </Link>
                        </h3>
                      </div>
                      <div className="blog-classic-text">
                        <p>
                          Manufacturing industries are those that engage in the
                          transformation of goods, materials or substances into
                          new products. The transformational process can be
                          physical, chemical or mechanical. Manufacturers often
                          have plants, mills or factories that produce goods for
                          public consumption.
                        </p>
                      </div>
                      <div className="blog-classic-btn">
                        <Link href="/blog-details">
                          Read More <i className="fa fa-arrow-circle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*Blog Classic Single*/}
                  <div className="blog-classic-single">
                    <div className="blog-classic-image">
                      <img
                        src="assets/images/Blog/blog-classic-img-2.jpg"
                        alt=""
                      />
                      <div className="blog-classic-date">
                        <Link href="/blog-classic">02 May, 2020</Link>
                      </div>
                    </div>
                    <div className="blog-classic-content-box">
                      <ul className="blog-classic-meta">
                        <li>
                          <Link href="/blog-classic">
                            <i className="far fa-user-circle"></i> Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="/blog-classic">
                            <i className="far fa-comments"></i> 2 Comments
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-classic-title">
                        <h3>
                          <Link href="/blog-classic">
                            Pushtec Solutions Drives FMCG <br /> Innovation
                            Worldwide.
                          </Link>
                        </h3>
                      </div>
                      <div className="blog-classic-text">
                        <p>
                          Factories are at the heart of manufacturing. <br />{" "}
                          Pushtec Solutions specializes in creating customizable
                          machinery for the FMCG industry, transforming goods,
                          materials, or substances into high-quality products.
                          Our process—whether physical, chemical, or
                          mechanical—ensures precision and efficiency. We
                          empower factories, plants, and mills to produce goods
                          that meet global consumer demands with unmatched
                          adaptability.
                        </p>
                      </div>
                      <div className="blog-classic-btn">
                        <Link href="#">
                          Read More <i className="fa fa-arrow-circle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*Blog Classic Single*/}
                  <div className="blog-classic-single">
                    <div className="blog-classic-image">
                      <img
                        src="assets/images/Blog/blog-classic-img-3.jpg"
                        alt=""
                      />
                      <div className="blog-classic-date">
                        <Link href="#">02 May, 2020</Link>
                      </div>
                    </div>
                    <div className="blog-classic-content-box">
                      <ul className="blog-classic-meta">
                        <li>
                          <Link href="#">
                            <i className="far fa-user-circle"></i> Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-comments"></i> 2 Comments
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-classic-title">
                        <h3>
                          <Link href="#">
                            Pushtec Solutions Empowers FMCG <br /> Production
                            Globally.
                          </Link>
                        </h3>
                      </div>
                      <div className="blog-classic-text">
                        <p>
                          Factories are at the heart of manufacturing. <br /> At
                          Pushtec Solutions, we redefine manufacturing for the
                          FMCG sector by crafting tailored machinery that
                          transforms goods, materials, or substances into
                          innovative products. Our processes—spanning physical,
                          chemical, or mechanical methods—deliver precision and
                          scalability, enabling factories, plants, and mills to
                          meet public demand with exceptional efficiency.
                        </p>
                      </div>
                      <div className="blog-classic-btn">
                        <Link href="#">
                          Read More <i className="fa fa-arrow-circle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*Blog Classic Single*/}
                  <div className="blog-classic-single">
                    <div className="blog-classic-image">
                      <img
                        src="assets/images/Blog/blog-classic-img-4.jpg"
                        alt=""
                      />
                      <div className="blog-classic-date">
                        <Link href="#">02 May, 2020</Link>
                      </div>
                    </div>
                    <div className="blog-classic-content-box">
                      <ul className="blog-classic-meta">
                        <li>
                          <Link href="#">
                            <i className="far fa-user-circle"></i> Admin
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="far fa-comments"></i> 2 Comments
                          </Link>
                        </li>
                      </ul>
                      <div className="blog-classic-title">
                        <h3>
                          <Link href="#">
                            Pushtec might have a <br /> financing edge
                          </Link>
                        </h3>
                      </div>
                      <div className="blog-classic-text">
                        <p>
                          Pushtec Solutions excels in the FMCG industry by
                          transforming goods, materials, or substances into
                          cutting-edge products using physical, chemical, or
                          mechanical processes. Our tailored machinery supports
                          plants, mills, and factories in delivering
                          high-quality goods for public consumption with
                          enhanced efficiency and adaptability.
                        </p>
                      </div>
                      <div className="blog-classic-btn">
                        <Link href="#">
                          Read More <i className="fa fa-arrow-circle-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="sidebar">
                  <div className="sidebar-single sidebar-search">
                    <h3 className="sidebar-title">Search</h3>
                    <form action="#" className="sidebar-search-form">
                      <input type="search" placeholder="Search" />
                      <button type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="sidebar-single sidebar-category">
                    <h3 className="sidebar-title">Categories</h3>
                    <ul className="sidebar-category-list">
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Construcation{" "}
                          <span>(15)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> factory{" "}
                          <span>(10)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Electrical{" "}
                          <span>(12)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Mechanical{" "}
                          <span>(14)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Welding{" "}
                          <span>(15)</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Eco & Bio Power{" "}
                          <span>(08)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-single sidebar-latest-news">
                    <h3 className="sidebar-title">Latest Posts</h3>
                    <ul className="sidebar-latest-news-list">
                      <li>
                        <div className="sidebar-latest-news-image">
                          <img src="assets/images/blog/ln-1.jpg" alt="" />
                        </div>
                        <div className="sidebar-latest-news-content">
                          <h3>
                            <Link href="#">
                              Manufacturer might have a financing advantage
                            </Link>
                          </h3>
                          <p>02 May, 2020</p>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-latest-news-image">
                          <img src="assets/images/blog/ln-2.jpg" alt="" />
                        </div>
                        <div className="sidebar-latest-news-content">
                          <h3>
                            <Link href="#">
                              Pushtec Solutions Drives FMCG Innovation
                              Worldwide.
                            </Link>
                          </h3>
                          <p>02 May, 2020</p>
                        </div>
                      </li>
                      <li>
                        <div className="sidebar-latest-news-image">
                          <img src="assets/images/blog/ln-3.jpg" alt="" />
                        </div>
                        <div className="sidebar-latest-news-content">
                          <h3>
                            <Link href="#">
                              Pushtec Solutions Empowers FMCG Production
                              Globally.
                            </Link>
                          </h3>
                          <p>02 May, 2020</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-single sidebar-archive">
                    <h3 className="sidebar-title">Archive</h3>
                    <ul className="sidebar-archive-list">
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Construcation
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> factory
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Electrical
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fa fa-angle-right"></i> Electrical
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-single sidebar-instagram">
                    <h3 className="sidebar-title">Instagram</h3>
                    <ul className="sidebar-instagram-list">
                      <li>
                        <div className="instagram-img">
                          <img
                            src="assets/images/Blog/instagram-img-1.jpg"
                            alt=""
                          />
                          <div className="sidebar-instagram-img-hover">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="instagram-img">
                          <img
                            src="assets/images/Blog/instagram-img-2.jpg"
                            alt=""
                          />
                          <div className="sidebar-instagram-img-hover">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="instagram-img">
                          <img
                            src="assets/images/Blog/instagram-img-3.jpg"
                            alt=""
                          />
                          <div className="sidebar-instagram-img-hover">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="instagram-img">
                          <img
                            src="assets/images/Blog/instagram-img-4.jpg"
                            alt=""
                          />
                          <div className="sidebar-instagram-img-hover">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="instagram-img">
                          <img
                            src="assets/images/Blog/instagram-img-5.jpg"
                            alt=""
                          />
                          <div className="sidebar-instagram-img-hover">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="instagram-img">
                          <img
                            src="assets/images/Blog/instagram-img-6.jpg"
                            alt=""
                          />
                          <div className="sidebar-instagram-img-hover">
                            <i className="fa fa-link"></i>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebar-single sidebar-tag">
                    <h3 className="sidebar-title">Product Tags</h3>
                    <div className="sidebar-tags-list">
                      <Link href="#">factory</Link>
                      <Link href="#">Metal</Link>
                      <Link href="#">Engine</Link>
                      <Link href="#">Construction</Link>
                      <Link href="#">Agriculture</Link>
                      <Link href="#">Mechanical</Link>
                      <Link href="#">Energy</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="blog-pg-pagination blog-pg-classic">
                  <ul className="pg-pagination">
                    <li className="previous">
                      <Link href="#" aria-label="Previous">
                        <i className="fa fa-arrow-circle-left"></i>
                      </Link>
                    </li>
                    <li className="count">
                      <Link href="#">01</Link>
                    </li>
                    <li className="count">
                      <Link href="#">02</Link>
                    </li>
                    <li className="count">
                      <Link href="#">03</Link>
                    </li>
                    <li className="next">
                      <Link href="#" aria-label="Next">
                        <i className="fa fa-arrow-circle-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Blog Classic Section*/}
        {/* Brands SLider */}
        <div style={{ marginTop: "80px", marginBottom: "80px" }}>
          <ImageSlider />
        </div>
        {/*Start Newsletter One Section */}
       <Newsletter />
        {/*End Newsletter One Section */}
      </Layout>
    </>
  );
}
