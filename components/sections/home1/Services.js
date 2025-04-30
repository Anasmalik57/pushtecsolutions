import { machines } from "@/components/PushTechData";

export default function Feature() {


  return (
    <>
      {/*Start Main Service Two Section */}
      <section className="main-service-one-section two">
        <div className="container">
          <div className="thm-section-title text-center">
            <h4 className="sub-title-shape-left section_title-subheading">
              WHAT WE OFFER
            </h4>
            <h2>
              We Are Dedicated To <br /> Serve You All Time.
            </h2>
          </div>
          <div className="row">
            {machines.map((service, index) => (
              <div key={index} className="col-xl-4 col-lg-4">
                {/*Main Service One Sec Single*/}
                <div
                  className="main-service-one-sec-single wow fadeInUp"
                  data-wow-delay={service.delay}
                >
                  <div className="main-service-one-sec-img">
                    <img src={service.image} alt="" />
                  </div>
                  <div className="main-service-one-sec-content">
                    <div className="main-service-one-count">{service.count}</div>
                    <div className="main-service-one-icon">
                      <i className={service.icon}></i>
                    </div>
                    <h3 style={{ textTransform: "capitalize" }}>
                      {service.title}
                    </h3>
                    <p style={{ textAlign: "justify" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*End Main Service Two Section */}
    </>
  );
}