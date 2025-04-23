import Link from "next/link"
export default function Process() {
    return (
        <>
            {/*Start Latest Projects One Section */}
            <section className="latest-projects-one-section">
            <div className="latest-projects-one-bg" style={{ backgroundImage: 'url(assets/images/background/project-1-bg.png)' }} ></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="latest-pro-one-title">
                                <h4 className="sub-title-shape-left section_title-subheading">Industrial Sector</h4>
                                <h2>Our Industry Competence</h2>
                                <p>Manufacturing Technology Supports Factories around the World. Factories are at the heart of manufacturing.</p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="latest-pro-one-single">
                                <div className="latest-pro-one-img-box">
                                    <img src="assets/images/project/project-1-img-1.jpg" alt=""/>
                                    <div className="latest-pro-one-img-title">
                                        <div className="content"><h5><Link href="#">Metal & Materials</Link></h5></div>
                                        <div className="icon"><Link className="img-popup" href="assets/images/project/project-1-img-1.jpg"><span className="flaticon-plus"></span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="latest-pro-one-single">
                                <div className="latest-pro-one-img-box">
                                    <img src="assets/images/project/project-1-img-2.jpg" alt=""/>
                                    <div className="latest-pro-one-img-title">
                                        <div className="content"><h5><Link href="#">Welding Industry</Link></h5></div>
                                        <div className="icon"><Link className="img-popup" href="assets/images/project/project-1-img-1.jpg"><span className="flaticon-plus"></span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Start Latest Projects One Section */}
        </>
    )
}
