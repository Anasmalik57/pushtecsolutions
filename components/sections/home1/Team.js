import Link from "next/link"
export default function Cases() {
    return (
        <>
            {/*Start Team One Section */}   
            <section className="team-one-section two">
                <div className="container">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Meet Our Team</h4>
                        <h2>Experience Team Members</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="100ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-1.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>David Parker</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="200ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-2.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>Ricardo Gomez</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="300ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-3.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>Peter Sandler</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            {/*Team One Single*/}
                            <div className="team-one-single wow fadeInLeft" data-wow-delay="400ms">
                                <div className="team-one-img">
                                    <img src="assets/images/team/team-1-img-4.jpg" alt=""/>
                                    <div className="team-one-hover">
                                        <div className="team-one-social">
                                            <Link href="#"><i className="fab fa-facebook-square"></i></Link>
                                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                                            <Link href="#"><i className="fab fa-dribbble"></i></Link>
                                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-one-content">
                                    <h3>James Smith</h3>
                                    <p>Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Team One Section */}

        </>
    )
}
