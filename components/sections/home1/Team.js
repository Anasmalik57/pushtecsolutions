import { teamMembers } from "@/components/PushTechData";
import Link from "next/link";

export default function Cases() {
  teamMembers 
  return (
    <>
      {/*Start Team One Section */}
      <section className="team-one-section two">
        <div className="container">
          <div className="thm-section-title text-center">
            <h4 className="sub-title-shape-left section_title-subheading">
              Meet Our Team
            </h4>
            <h2>Experience Team Members</h2>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6">
                {/*Team One Single*/}
                <div
                  className="team-one-single wow fadeInLeft"
                  data-wow-delay={member.delay}
                >
                  <div className="team-one-img">
                    <img src={member.image} alt="" />
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
      {/*End Team One Section */}
    </>
  );
}