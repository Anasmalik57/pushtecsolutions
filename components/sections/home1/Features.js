
export default function Features() {
    return (
        <>
            {/* Start Features Two Section */}    
            <section className="features-two-section">
                <div className="container">
                    <h1 style={{padding: "0px 0px 20px 0px", fontWeight:"600"}}>About Us</h1>
                    <div className="row">
                        <div className="col-lg-3 col-md-6" style={{cursor: "pointer"}}>
                            {/*Features One Sec Single*/}
                            <div className="features-two-sec-single wow fadeInUp" data-wow-delay="300ms">
                                <div className="features-two-sec-icon">
                                    <span className="flaticon-robotic"></span>
                                </div>
                                <h3>15+ <br /> Years of experience</h3>
                                {/* <p className="">Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{cursor: "pointer"}}>
                            {/*Features One Sec Single*/}
                            <div className="features-two-sec-single active wow fadeInUp" data-wow-delay="600ms">
                                <div className="features-two-sec-icon">
                                    <span className="flaticon-development"></span>
                                </div>
                                <h3>100% <br /> Quality components</h3>
                                {/* <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{cursor: "pointer"}}>
                            {/*Features One Sec Single*/}
                            <div className="features-two-sec-single wow fadeInUp" data-wow-delay="900ms">
                                <div className="features-two-sec-icon">
                                    <span className="flaticon-paint-roller"></span>
                                </div>
                                <h3>Hassle free <br />  experience</h3>
                                {/* <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor.</p> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" style={{cursor: "pointer"}}>
                            {/*Features One Sec Single*/}
                            <div className="features-two-sec-single wow fadeInUp" data-wow-delay="900ms">
                                <div className="features-two-sec-icon">
                                    <span className="flaticon-team"></span>
                                </div>
                                <h3>Provide Timely <br/> Responses</h3>
                                {/* <p>Lorem ipsum dolor amet consectetur adipisicing elit sed eiusmod tempor.</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Features Two Section */} 
        </>
    )
}
