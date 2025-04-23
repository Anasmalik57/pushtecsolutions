'use client'
export default function About() {
    
    return (
        <>
        
    {/* Start About Us One Section */}
    <section className="about-us-one-section">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6">
                    <div className="about-us-left wow slideInLeft" data-wow-delay="100ms">
                        <div className="about-us-img">
                            <img src="assets/images/about/about-1-img-1.jpg" alt=""/>
                            <div className="experience-years">
                               <div className="year"><h3>25</h3></div>
                                <div className="text"><p>Years of Experience</p></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="about-us-right">
                        <div className="title">
                            <h4 className="sub-title-shape-left section_title-subheading">About Our Company</h4>
                            <h2>Leading Solution for all Indutrial Business</h2>
                            <p>Panasonic's Manufacturing Technology Supports Factories around the World. Factories are at the heart of manufacturing.</p>
                        </div>
                        <div className="description">
                            <h5>Smart Factory Solution</h5>
                            <p>An factory is a group of companies that are related based on their primary business activities. ... For example, while an automobile manufacturer might have a financing division that contributes 10% to the firm's overall revenues,</p>
                        </div>
                        <div className="ceo-founder-details">
                            <div className="ceo-founder-img">
                                <img src="assets/images/about/ceo-founder-img-1.png" alt=""/>
                            </div>
                            <div className="ceo-founder-content">
                                <h3>John Franclin -<span>CEO & Founder</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* End About Us One Section */}

        </>
    )
}
