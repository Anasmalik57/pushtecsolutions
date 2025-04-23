'use client'
import Link from "next/link";
import { useState } from "react";

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
      <div className="nav-menu-close" onClick={handleMobileMenu}><span className="fa fa-times" />
      </div>  
        <nav className="menu-box">            
        <ul className="navigation">
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/about/">About</Link></li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="testimonials">Testimonial</Link></li>
                        <li><Link href="project">Project</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="error">Error</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                        <li><Link href="services"> Services</Link></li>
                        <li><Link href="service-details"> Services Details</Link></li>
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                    <li><Link href="blog">Blog Grid</Link></li>
                        <li><Link href="blog-classic">Blog classic</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </div>

    <div className="nav-overlay" onClick={handleMobileMenu}>
    </div>



          
    </>
    )
}
export default MobileMenu;