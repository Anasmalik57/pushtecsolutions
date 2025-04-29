"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { teamMembers } from "@/components/PushTechData";

export default function TeamMembers() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Members">
        <div>
          {/* Start Team One Section */}
          <section className="team-one-section">
            <div className="container">
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div key={index} className="col-xl-3 col-lg-3 col-md-6">
                    {/* Team One Single */}
                    <div
                      className="team-one-single wow fadeInLeft"
                      data-wow-delay={member.delay}
                    >
                      <div className="team-one-img">
                        <img src={member.image} alt={member.name} />
                        <div className="team-one-hover">
                          <div className="team-one-social">
                            <Link href="#">
                              <i className="fab fa-facebook-square"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-twitter"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-dribbble"></i>
                            </Link>
                            <Link href="#">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="team-one-content">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* End Team One Section */}

          {/* Start Newsletter One Section */}
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
                      <input type="Email" placeholder="Email Address" />
                      <button type="submit" className="button">
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsletter One Section */}
        </div>
      </Layout>
    </>
  );
}
