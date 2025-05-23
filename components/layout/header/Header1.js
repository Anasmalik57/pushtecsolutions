import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { FaWhatsapp } from "react-icons/fa";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  handlePopup,
}) {
  return (
    <>
      {/* Main Header*/}
      <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
        <div className="header_top">
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-12">
                <div className="header_top_inner clearfix">
                  <div className="header_top_one_box pull-left">
                    <ul>
                      <li>
                        <span className="flaticon-placeholder"></span>
                        <a
                          href="https://maps.app.goo.gl/WLbVuQPjZXRNowmq9"
                          target="_blank"
                        >
                          {" "}
                          NIGERIA, AFRICA
                        </a>
                      </li>
                      <li>
                        <span className="flaticon-phone-call-1"></span>
                        <Link href="tel:7466903135">+91 7466903135</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header_top_two_box pull-right">
                    <div className="opening_hour">
                      <p>
                        <span className="flaticon-clock-1"></span>Mon - Fri:
                        9:00 - 19:00
                      </p>
                    </div>
                    <div className="social_links_1">
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
              </div>
            </div>
          </div>
        </div>

        {/* Header Upper */}
        <div className="header_upper">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header_upper_inner clearfix">
                  <div className="header_upper_one_box pull-left">
                    <div className="logo">
                      <Link href="/">
                        <img src="assets/images/logo.png" alt="" title="" />
                      </Link>
                    </div>
                  </div>
                  <div className="header_upper_two_box one pull-right">
                    <div className="nav-outer">
                      {/*Mobile Navigation Toggler*/}
                      <div
                        className="mobile-nav-toggler"
                        onClick={handleMobileMenu}
                      >
                        <span className="icon flaticon-menu"></span>
                      </div>
                      <div className="nav-inner">
                        {/* Main Menu */}
                        <nav className="main-menu navbar-expand-xl navbar-dark">
                          <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                          >
                            <Menu />
                          </div>
                        </nav>
                        {/* Main Menu End*/}
                      </div>
                    </div>
                    <div className="icon-search-box">
                      <a
                        className="btn"
                        href="https://api.whatsapp.com/send?phone=917466903135&text=Hello%20Pushtec,%20Team%20,%20I%20am%20interested"
                        target="_blank"
                      >
                        <FaWhatsapp size={20} />
                        Whatsapp Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}

        {/*End Header Upper*/}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="auto-container">
            <div className="outer-container">
              <div className="header-column">
                <div className="logo-box">
                  <div className="logo">
                    <Link href="/">
                      <img src="assets/images/logo.png" alt="" title="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-column">
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div
                    className="mobile-nav-toggler"
                    onClick={handleMobileMenu}
                  >
                    <span className="icon flaticon-menu"></span>
                  </div>

                  <div className="nav-inner">
                    {/* Main Menu */}
                    <nav className="main-menu navbar-expand-xl navbar-dark">
                      <div className="collapse navbar-collapse">
                        <Menu />
                      </div>
                    </nav>
                    {/* Main Menu End*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
      {/* End Main Header */}
    </>
  );
}
