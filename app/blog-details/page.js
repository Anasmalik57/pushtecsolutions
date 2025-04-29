"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  // Comments data array
  const comments = [
    {
      name: "Ricardo Gomez",
      date: "05 May 2020",
      image: "assets/images/Blog/comment-1-1.png",
      text: "The focus on customizable machinery has transformed our factory operations—highly recommend Pushtec!",
    },
    {
      name: "Peter Sandler",
      date: "05 May 2020",
      image: "assets/images/Blog/comment-1-2.png",
      text: "Pushtec’s expertise in precision engineering has boosted our productivity significantly.",
    },
  ];

  // Instagram images data array
  const instagramImages = [
    "assets/images/Blog/instagram-img-1.jpg",
    "assets/images/Blog/instagram-img-2.jpg",
    "assets/images/Blog/instagram-img-3.jpg",
    "assets/images/Blog/instagram-img-4.jpg",
    "assets/images/Blog/instagram-img-5.jpg",
    "assets/images/Blog/instagram-img-6.jpg",
  ];

  // Latest posts data array
  const latestPosts = [
    {
      image: "assets/images/blog/ln-1.jpg",
      title: "Manufacturer might have a financing",
      date: "02 May, 2020",
    },
    {
      image: "assets/images/blog/ln-2.jpg",
      title: "Manufacturer might have a financing",
      date: "02 May, 2020",
    },
    {
      image: "assets/images/blog/ln-3.jpg",
      title: "Manufacturer might have a financing",
      date: "02 May, 2020",
    },
  ];

  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Details">
        {/* Start Blog Classic Section */}
        <section className="blog-details-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details-content">
                  <div className="blog-details-inner">
                    <div className="blog-details-image">
                      <img
                        src="assets/images/Blog/blog-classic-img-1.jpg"
                        alt=""
                      />
                      <div className="blog-details-date">
                        <Link href="#">02 May, 2020</Link>
                      </div>
                    </div>
                    <div className="blog-details-content-box">
                      <ul className="blog-details-meta">
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
                      <div className="blog-details-title">
                        <h3>
                          <Link href="#">
                            Manufacturer might have <br /> a financing advantage
                          </Link>
                        </h3>
                      </div>
                      <div className="blog-details-text">
                        <p className="first-text">
                          Manufacturing industries are those that engage in the
                          transformation of goods, materials or substances into
                          new products. The transformational process can be
                          physical, chemical or mechanical. Manufacturers often
                          have plants, mills or factories that produce goods for
                          public consumption.
                        </p>
                        <p className="second-text">
                          Pushtec Solutions leverages advanced manufacturing
                          techniques to deliver innovative machinery tailored
                          for the FMCG sector, enhancing efficiency and
                          adaptability worldwide.
                        </p>
                      </div>
                      <div className="blog-details-two-image">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className="blog-details-two-img-box">
                              <div className="blog-details-two-img-box-single mar-30">
                                <img
                                  src="assets/images/Blog/blog-details-two-img-box-1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="blog-details-two-img-box">
                              <div className="blog-details-two-img-box-single">
                                <img
                                  src="assets/images/Blog/blog-details-two-img-box-2.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="blog-details-bottom-text">
                        <p className="bottom-text">
                          Now you know what dummy text is, let’s learn about its
                          usefulness. Some people say that they don’t need to
                          use a dummy text generator to deliver a web design
                          project to the customer. Even though this might be
                          true, the effect that the final project will produce
                          on the client won’t be as satisfactory as in the case
                          of one with included filler content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details-bottom">
                    <p className="blog-detail-tags">
                      <span>Tags</span>
                      <Link href="#">Factory</Link>
                      <Link href="#">Manufacturing</Link>
                    </p>
                    <div className="blog-detail-social-list">
                      <Link href="#">
                        <i className="fab fa-facebook-square"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="#">
                        <i className="fab fa-dribbble"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="author-one">
                    <div className="author-one-image">
                      <img src="assets/images/Blog/author-1-1.jpg" alt="" />
                    </div>
                    <div className="author-one-content">
                      <h3>David Parker</h3>
                      <p>
                        As a manufacturing expert, I appreciate how Pushtec’s
                        solutions streamline production processes with
                        cutting-edge technology.
                      </p>
                    </div>
                  </div>
                  <div className="comment-one">
                    <h3 className="comment-one-title">Comments</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="comment-one-single">
                        <div className="comment-one-image">
                          <img src={comment.image} alt={comment.name} />
                        </div>
                        <div className="comment-one-content">
                          <h3>
                            {comment.name} <span>{comment.date}</span>
                          </h3>
                          <p>{comment.text}</p>
                          <Link href="#" className="comment-one-btn">
                            <i className="fa fa-reply-all"></i> Reply
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="comment-form">
                    <h3 className="comment-form-title">Leave a Comment</h3>
                    <form
                      action="inc/sendemail.php"
                      className="comment-one-form"
                    >
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="comment-input-box">
                            <input
                              type="text"
                              placeholder="Your name"
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="comment-input-box">
                            <input
                              type="email"
                              placeholder="Email address"
                              name="email"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="comment-input-box">
                            <textarea
                              name="message"
                              placeholder="Write message"
                            ></textarea>
                          </div>
                          <button type="submit" className="comment-form-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
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
                      {latestPosts.map((post, index) => (
                        <li key={index}>
                          <div className="sidebar-latest-news-image">
                            <img src={post.image} alt="" />
                          </div>
                          <div className="sidebar-latest-news-content">
                            <h3>
                              <Link href="#">{post.title}</Link>
                            </h3>
                            <p>{post.date}</p>
                          </div>
                        </li>
                      ))}
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
                      {instagramImages.map((image, index) => (
                        <li key={index}>
                          <div className="instagram-img">
                            <img src={image} alt="" />
                            <div className="sidebar-instagram-img-hover">
                              <i className="fa fa-link"></i>
                            </div>
                          </div>
                        </li>
                      ))}
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
          </div>
        </section>
        {/* End Blog Classic Section */}

        {/* Start Newsletter One Section */}
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
                    <input type="Email" placeholder="Email Address" />
                    <button type="submit" className="button">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Newsletter One Section */}
      </Layout>
    </>
  );
}