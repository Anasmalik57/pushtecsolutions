'use client'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'


export default function Cta() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            {/*Start video Two Section */} 
            <section className="video-two-section" style={{ backgroundImage: 'url(assets/images/background/video-sec-two-bg.jpg)' }} >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="video-two-sec-inner">
                                <div className="video-two-sec-icon">
                                    <Link href={'/project'}  className="video-two-sec-btn video-popup"><i className="fa fa-play"></i></Link>
                                </div>
                                <div className="video-two-sec-content">
                                    <h2>We offer the best <span>industrial services.</span> <br/> 15+ years of experience</h2>
                                    <p>Pushtec Solutions Empowers FMCG Factories with Cutting-Edge Technology. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End video Two Section */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </>
    )
}
