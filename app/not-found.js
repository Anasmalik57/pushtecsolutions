import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Error404() {
    return (
        <>
         <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Page Not Found">
            {/*Start Error Section*/}
            <section className="error-section">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="error-section-content">
                                <div className="error-title">
                                    <h3>Sorry Page Is Not Available</h3>
                                </div>
                                <h1>404</h1>
                                <div className="error-btn">
                                    <Link href="" className="theme-btn">Go Back Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Error Section*/}
            
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
        </Layout>

        </>
    )
}
