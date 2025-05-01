import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Newsletter from "@/components/Newsletter"
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
            <Newsletter />
            {/*End Newsletter One Section */}
        </Layout>

        </>
    )
}
