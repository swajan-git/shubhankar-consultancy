import React from 'react';

const ReimagineYourCareer = () => {
    return (
        <>
            {/* <video src="">
            <source src="https://firebasestorage.googleapis.com/v0/b/shubhankar-consulting.appspot.com/o/videos%2F6)%20Reimagine%20your%20career.mp4?alt=media&token=53e56a65-e011-4614-a67c-908a2a3964e8" type="video/mp4"></source>
        </video> */}
            <section className="reimagine-career py-5 bg-secondary d-flex align-items-center text-white">
                <video loop muted autoPlay="autoplay" >
                    <source src="https://firebasestorage.googleapis.com/v0/b/creative-agency-live.appspot.com/o/videos%2F6)%20Reimagine%20your%20career.mp4?alt=media&token=e866db5e-fdea-447e-81fb-4430a640a37b" type="video/mp4" ></source>
                </video>
                <div className="overlay"></div>
                <div className="container content">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="section-title mb-5">
                                <h1 className="font-weight-900">
                                    Reimagine your Career
                                </h1>
                            </div>
                            <div className="text-center">
                                <p className="font-20 mb-4">
                                    It's all about who your want to be and what you want to be in your profession. It's all about putting your abilities, interest, and authentic self to your work.
                                </p>
                                <p className="font-20 mb-4">
                                    Here, you'll combine your creativity with cutting-edge technology to create astonishing things.
                                </p>
                                <p className="font-20 mb-4">
                                    Let's work together to produce positive, long-term value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ReimagineYourCareer;