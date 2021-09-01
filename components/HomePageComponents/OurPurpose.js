import {  videoFour } from "../../shared/data/videos";

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
                    <source src={videoFour} type="video/mp4" ></source>
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