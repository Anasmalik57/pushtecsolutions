import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home1/About"
import Banner from "@/components/sections/home1/Banner"
import Cta from "@/components/sections/home1/CTA"
import Clients from "@/components/sections/home1/Clients"
import Features from "@/components/sections/home1/Features"
import Funfacts from "@/components/sections/home1/Funfacts"
import News from "@/components/sections/home1/News"
import Testimonial from "@/components/sections/home1/Testimonial"
import WhyChooseUs from "@/components/sections/home1/WhyChooseUs"
import Projects from "@/components/sections/home1/Projects"
import Services from "@/components/sections/home1/Services"
import Team from "@/components/sections/home1/Team"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <Features />
                <About />
                <Funfacts />
                <Services />
                <Team />
                <WhyChooseUs />
                <Cta />
                <Projects />
                <Testimonial />
                <News />
                <Clients />
            </Layout>
        </>
    )
}