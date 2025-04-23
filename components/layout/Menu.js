import Link from "next/link"
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
                <li className="dropdown"><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home 01</Link></li>
                        <li><Link href="/index-2">Home 02</Link></li>
                    </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li><Link href="team">Team</Link></li>
                        <li><Link href="testimonials">Testimonial</Link></li>
                        <li><Link href="project">Project</Link></li>
                        <li><Link href="project-details">Project Details</Link></li>
                        <li><Link href="faq">Faq</Link></li>
                        <li><Link href="error">Error</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                    <li><Link href="services"> Services</Link></li>
                    <li><Link href="service-details"> Services Details</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="blog">Blog Grid</Link></li>
                        <li><Link href="blog-classic">Blog classic</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="contact">Contact</Link></li>
            </ul>
        </>
    )
}
