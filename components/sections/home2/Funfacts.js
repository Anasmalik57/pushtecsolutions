import CounterUp from "@/components/elements/CounterUp"
export default function Funfacts() {
    return (
        <>
            {/*Start Funfacts One Section */} 
            <section className="funfacts-one-section" style={{ backgroundImage: 'url(assets/images/background/funfact-1-bg.jpg)' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            {/*Funfacts One Single*/}
                            <div className="funfacts-one-single wow fadeInUp" data-wow-delay="100ms">
                                <div className="icon">
                                    <span className="flaticon-like"></span>
                                </div>
                                <div className="content count-box">
                                    <h2>
                                        <CounterUp end={378} />
                                    </h2>
                                    <p>Projects Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/*Funfacts One Single*/}
                            <div className="funfacts-one-single wow fadeInUp" data-wow-delay="200ms">
                                <div className="icon">
                                    <span className="flaticon-architect"></span>
                                </div>
                                <div className="content count-box">
                                    <h2>
                                        <CounterUp end={780} />
                                    </h2>
                                    <p>Expeart Engeneers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            {/*Funfacts One Single*/}
                            <div className="funfacts-one-single wow fadeInUp" data-wow-delay="300ms">
                                <div className="icon">
                                    <span className="flaticon-medal"></span>
                                </div>
                                <div className="content count-box">
                                    <h2>
                                        <CounterUp end={189} />
                                    </h2>
                                    <p>Total Awards Win</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Funfacts One Section */}
        </>
    )
}
