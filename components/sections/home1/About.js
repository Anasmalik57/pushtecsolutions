
export default function About() {
    return (
        <>
            {/* Start About Two Section */} 
            <section className="about-tow-section about-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="about-two-left-content wow slideInLeft" data-wow-delay="100ms">
                                <div className="about-two-sec-image">
                                <div className="about-two-sec-image-bg-1" style={{ backgroundImage: 'url(assets/images/about/about-2--pattern-1.png)' }} ></div>
                                <div className="about-two-sec-image-bg-2" style={{ backgroundImage: 'url(assets/images/about/about-2--pattern-2.png)' }} ></div>
                                    <img src="assets/images/about/about-page-img-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-two-right-content">
                                <div className="about-two-title">
                                    <h4 className="sub-title-shape-left section_title-subheading">About Our Company</h4>
                                    <h2>Welcome to Hactora a leading manufacturer </h2>
                                    <p className="about-two-title-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque abillo inventore veritatis quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem quia.</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="about-tow-experience-years">
                                            <div className="about-tow-experience-years-icon">
                                                <span className="flaticon-check"></span>
                                            </div>
                                            <div className="about-tow-experience-years-text">
                                                <h2>100% Client <br/> Satisfaction </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="about-tow-experience-years">
                                            <div className="about-tow-experience-years-icon">
                                                <span className="flaticon-check"></span>
                                            </div>
                                            <div className="about-tow-experience-years-text">
                                                <h2>World className <br/> Worker</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="about-two-bottom-content">
                                    <h3>John Franclin - <span>CEO & Founder</span></h3>
                                    <div className="signature">
                                        <img src="assets/images/about/signature-1.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
            {/* End About Two Section */} 
        </>
    )
}
