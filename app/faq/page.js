"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="FAQ’S">
        <div>
          {/*Start Faq One Section*/}
          <section className="faq-one-section">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4">
                  <div className="faq-one-left">
                    <h3>frequently asked questions</h3>
                    <p>
                      Not all people can afford to pay for content immediately
                      after creating their website, so that’s not a condition
                      you can demand from your clients.
                    </p>
                    <div className="faq-one-left-btn">
                      <Link href="" className="theme-btn">
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="faq-one-right">
                    <ul className="accordion-box">
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 1 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(1)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>How do I get started with Pushtec Solutions?</h4>
                        </div>
                        <div
                          className={
                            isActive.key == 1
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              To get started, contact us at{" "}
                              <strong>+917466903135</strong> or email
                              <strong> Puranranakumar@gmail.com</strong> . Our
                              team will assess your FMCG production needs and
                              guide you through the process of implementing our
                              customized machinery solutions.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 2 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(2)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>
                            Can Pushtec Solutions help us make more revenue?
                          </h4>
                        </div>
                        <div
                          className={
                            isActive.key == 2
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Yes, Pushtec Solutions can increase your revenue
                              by optimizing your FMCG production with efficient,
                              precision-engineered machinery. This reduces costs
                              and boosts output, directly enhancing
                              profitability.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 3 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(3)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>
                            Where in the world is Pushtec Solutions available?
                          </h4>
                        </div>
                        <div
                          className={
                            isActive.key == 3
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Pushtec Solutions operates in 25 countries
                              worldwide, supporting FMCG industries with
                              innovative machinery solutions. Reach out to us to
                              confirm availability in your region.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 4 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(4)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>What are the three main types of industries?</h4>
                        </div>
                        <div
                          className={
                            isActive.key == 4
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              The three main types of industries are primary
                              (e.g., agriculture), secondary (e.g.,
                              manufacturing, where Pushtec excels with FMCG
                              machinery), and tertiary (e.g., services). Pushtec
                              focuses on enhancing secondary industries.
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="accordion block">
                        <div
                          className={
                            isActive.key == 5 ? "acc-btn active" : "acc-btn"
                          }
                          onClick={() => handleToggle(5)}
                        >
                          <div className="icon-outer">
                            <i className="fa fa-plus"></i>
                          </div>
                          <h4>
                            What is factory analysis and why is it important?
                          </h4>
                        </div>
                        <div
                          className={
                            isActive.key == 5
                              ? "acc-content current"
                              : "acc-content"
                          }
                        >
                          <div className="content">
                            <div className="text">
                              Factory analysis is the evaluation of production
                              processes and resources to identify improvement
                              areas. It’s crucial for Pushtec to ensure our
                              machinery solutions maximize efficiency and
                              adaptability, helping clients achieve optimal
                              performance.
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*End Faq One Section*/}

          {/*Start Newsletter One Section */}
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
          {/*End Newsletter One Section */}
        </div>
      </Layout>
    </>
  );
}
