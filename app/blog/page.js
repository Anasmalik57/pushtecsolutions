import ImageSlider from "@/components/ImageSlider";
import Layout from "@/components/layout/Layout";
import Newsletter from "@/components/Newsletter";
import { blogPosts } from "@/components/PushTechData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog Grid">
        {/*Start Blog One Section */}
        <section className="blog-one-section blog-page">
          <div className="container">
            <div className="row">
              {blogPosts.map((post, index) => (
                <div key={index} className="col-xl-4 col-lg-4">
                  {/*Blog One Single*/}
                  <div
                    className="blog-one-single wow fadeInUp"
                    data-wow-delay={post.delay}
                  >
                    <div className="blog-one-img">
                      <img src={post.image} alt="" />
                    </div>
                    <div className="blog-one-content">
                      <ul className="blog-classNameic-meta">
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
                      <div className="blog-one-title">
                        <h3>
                          <Link href="/blog-classic">{post.title}</Link>
                        </h3>
                      </div>
                      <div className="blog-one-text">
                        <p>{post.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </section>
        {/*End Blog One Section */}

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
