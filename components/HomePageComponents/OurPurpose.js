
const OurPurpose = () => {
    return (
        <>
            <section className="our-purpose py-5">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-8 text-center offset-md-2">
                            <h1 className="font-weight-900 mb-4">
                                Our Purpose
                            </h1>
                            <p className="font-18">
                                Shubhankar Consulting assists clients in growing and transforming their organizations by designing diverse and personalized business policies and procedures, and then integrating them with technology, strategy, and operational excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* video section */}
            <section className="logo-video-bg py-5 bg-secondary d-flex align-items-center text-white">
                <video loop muted autoPlay="autoplay" >
                    <source src="https://firebasestorage.googleapis.com/v0/b/copy-now.appspot.com/o/videos%2F4)%20Behind%20Shubhankar%20Logo.mp4?alt=media&token=32d543b5-cad2-4c74-afc6-92acad0b2812" type="video/mp4" ></source>
                </video>
                <div className="overlay"></div>
                <div className="container content">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/creative-agency-live.appspot.com/o/videos%2Flogo-white.png?alt=media&token=328c2682-5780-4742-81ab-a9fee3fa8a90" alt="" className="logo-white" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurPurpose;