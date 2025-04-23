'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'


export default function Video() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        {/*Start video One Section */} 
        <section className="video-one-section" style={{ backgroundImage: 'url(assets/images/background/video-sec-one-bg.jpg' }} >
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="video-one-sec-content">
                            <div className="video-one-sec-inner">
                                <h2>Explore Our Factory</h2>
                                <p>Manufacturing Technology Supports Factories around the World. Factories are at the heart of manufacturing.</p>
                                <a onClick={() => setOpen(true)} className="video-one-sec-btn video-popup"><i className="fa fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*End video One Section */} 
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />

        
        </>
    )
}
