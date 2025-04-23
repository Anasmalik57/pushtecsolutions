
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home2/About"
import Banner from "@/components/sections/home2/Banner"
import Brand from "@/components/sections/home2/Brand"
import Factory from "@/components/sections/home2/Factory"
import Features from "@/components/sections/home2/Features"
import Funfacts from "@/components/sections/home2/Funfacts"
import Blog from "@/components/sections/home2/Blog"
import Portfolio from "@/components/sections/home2/Portfolio"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
import Video from "@/components/sections/home2/Video"
import Whychoose from "@/components/sections/home2/Whychoose"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <About />
                <Features />
                <Video />
                <Funfacts />
                <Portfolio />
                <Testimonial />
                <Factory />
                <Whychoose />
                <Team />
                <Blog />
                <Brand />

            </Layout>
        </>
    )
}