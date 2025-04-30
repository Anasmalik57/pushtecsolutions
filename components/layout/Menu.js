import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      <ul className="navigation clearfix">
        <li className="dropdown">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="dropdown">
          <Link href="#">Pages</Link>
          <ul>
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
        </li>
        <li className="dropdown">
          <Link href="services">Services</Link>
        </li>
        <li className="dropdown">
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
