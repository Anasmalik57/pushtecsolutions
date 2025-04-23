
'use client'
// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), {
    ssr: false,
})
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            {/*Start Portfolio One Section */} 
            <section className="portfolio-one-section">
                <div className="container">
                    <div className="thm-section-title text-center">
                        <h4 className="sub-title-shape-left section_title-subheading">Projects</h4>
                    <h2>Our Latest Works</h2>
                </div>
                <div className="portfolio-one-content">
                    <div className="sortable-masonry"> 
                        {/*Filter*/}
                        <PortfolioFilter2/>    
                    </div>
                </div>
                </div>
            </section>
            {/*End Portfolio One Section */} 
        </>
    )
}
