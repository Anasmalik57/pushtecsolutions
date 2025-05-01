"use client";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { teamMembers } from "@/components/PushTechData";
import ImageSlider from "@/components/ImageSlider";
import Newsletter from "@/components/Newsletter";

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
    {/* Brands SLider */}
    <div style={{ marginTop: "80px", marginBottom: "80px" }}>
            <ImageSlider />
          </div>
          {/* Start Newsletter One Section */}
          <Newsletter />
          {/* End Newsletter One Section */}
        </div>
      </Layout>
    </>
  );
}
