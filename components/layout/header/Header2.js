import Menu from "../Menu";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

export default function Header2({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      {/* Main Header*/}
      <header className={`main-header two ${scroll ? "fixed-header" : ""}`}>
        <div className="header_top">
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-12">
                <div className="header_top_inner clearfix">
                  <div className="header_top_one_box pull-left">
                    <h4>Welcome To Our Company</h4>
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
        <div className="header_upper-two">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header_upper-two_inner clearfix">
                  <div className="header_upper_two_box pull-left">
                    <div className="logo">
                      <Link href="index">
                        <img src="assets/images/logo.png" alt="" title="" />
                      </Link>
                    </div>
                  </div>
                  <div className="header_upper_two-right_box pull-right">
                    <ul className="clearfix">
                      <li>
                        <div className="address_icon">
                          <span className="flaticon-placeholder"></span>
                        </div>
                        <div className="address_title">
                          <h6>Address</h6>
                          <p>Flat 20, Reynolds USA</p>
                        </div>
                      </li>
                      <li>
                        <div className="address_icon">
                          <span className="flaticon-phone-call-1"></span>
                        </div>
                        <div className="address_title">
                          <h6>Phone</h6>
                          <p>
                            <Link href="tel:+917466903135">+91 7466903135</Link>
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="header_upper_two_box-btn">
                      <Link href="#">Get a Quote</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}

        <div className="main-header-two-nav-box clearfix">
          <div className="auto-container">
            <div className="main-header-two-nav-box-inner clearfix">
              <div className="nav-outer">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <span className="icon flaticon-menu"></span>
                </div>

                <div className="nav-inner">
                  {/* Main Menu */}
                  <nav className="main-menu two navbar-expand-xl navbar-dark">
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
                  href="https://api.whatsapp.com/send?phone=2348129917833&text=Hello%20i%20am%20intrested"
                  target="_blank"
                >
                  <FaWhatsapp size={20} />
                  Whatsapp Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*End Header Upper*/}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <div className="auto-container">
            <div className="outer-container">
              <div className="header-column">
                <div className="logo-box">
                  <div className="logo">
                    <Link href="index">
                      <img src="assets/images/logo.png" alt="" title="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-column">
                <div className="nav-outer">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
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
      </header>
      {/* End Main Header */}
      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
