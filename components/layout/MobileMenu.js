"use client";
import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const MobileMenu = ({ isSidebar, handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
  return (
    <>
      {/*Start Mobile Menu  */}
      <div className="mobile-menu close-menu">
        <div className="nav-menu-close" onClick={handleMobileMenu}>
          <span className="fa fa-times" />
        </div>
        <nav
          className="menu-box"
          onBlur={() => {
            !isActive;
          }}
        >
          <ul className="navigation">
            <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}>
              <Link href="/#">Pages</Link>
              <ul
                style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}
              >
                <li>
                  <Link href="team">Team</Link>
                </li>
                <li>
                  <Link href="testimonials">Testimonial</Link>
                </li>
                <li>
                  <Link href="project">Project</Link>
                </li>
                <li>
                  <Link href="faq">Faq</Link>
                </li>
                {/* <li><Link href="error">Error</Link></li> */}
              </ul>
              <div
                className={
                  isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                }
                onClick={() => handleToggle(2)}
              >
                <span className="fa fa-angle-right" />
              </div>
            </li>
            <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}>
              <Link href="/services">Services</Link>
            </li>
            <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <div className="mobileli">
              <a
                className="mobile-btn"
                href="https://api.whatsapp.com/send?phone=2348129917833&text=Hello%20i%20am%20intrested"
                target="_blank"
              >
                <span className="btn">
                  <FaWhatsapp size={20} />
                  Whatsapp Us
                </span>
              </a>
            </div>
          </ul>
        </nav>
      </div>

      <div className="nav-overlay" onClick={handleMobileMenu}></div>
    </>
  );
};
export default MobileMenu;
