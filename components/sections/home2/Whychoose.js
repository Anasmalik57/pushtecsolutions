
export default function Whychoose() {
    return (
        <>

    {/*Start Why Choose Two Section */} 
    <section className="why-choose-two-section one">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="why-choose-two-image">
                        <img src="assets/images/resource/why-choose-2-img-1.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="why-choose-right-content">
                        <div className="most-trusted-skill">
                            <div className="most-trusted-skill-icon">
                                <span className="flaticon-badge"></span>
                            </div>
                            <div className="most-trusted-text">
                                <h3>Most Trusted <br/> & Certified Skills</h3>
                                <p>Lorem ipsum dolor amet <br/> consectetur adipisicing elit <br/> sed eiusmod tempor.</p>
                            </div>
                        </div>
                        <div className="progress-levels">
                            {/*Skill Box*/}
                            <div className="progress-box">
                                <div className="inner count-box">
                                    <div className="text">Mechanical</div>
                                    <div className="bar">
                                        <div className="bar-innner">
                                            <div className="skill-percent">
                                                <span className="count-text" data-speed="3000" data-stop="90" >90</span>
                                                <span className="percent">%</span>
                                            </div>
                                            <div className="bar-fill" data-percent="90" style={{ width: '90%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Skill Box*/}
                            <div className="progress-box">
                                <div className="inner count-box">
                                    <div className="text">Agriculture</div>
                                    <div className="bar">
                                        <div className="bar-innner">
                                            <div className="skill-percent">
                                                <span className="count-text" data-speed="3000" data-stop="80" >80</span>
                                                <span className="percent">%</span>
                                            </div>
                                            <div className="bar-fill" data-percent="80" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Skill Box*/}
                            <div className="progress-box">
                                <div className="inner count-box">
                                    <div className="text">Chemical</div>
                                    <div className="bar">
                                        <div className="bar-innner">
                                            <div className="skill-percent">
                                                <span className="count-text" data-speed="3000" data-stop="85" >85</span>
                                                <span className="percent">%</span>
                                            </div>
                                            <div className="bar-fill" data-percent="85" style={{ width: '85%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/*End Why Choose Two Section */} 
        </>
    )
}
