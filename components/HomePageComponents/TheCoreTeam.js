import React from 'react';

const TheCoreTeam = () => {
    const ceoImg = `https://firebasestorage.googleapis.com/v0/b/creative-agency-live.appspot.com/o/videos%2Fdownload.jpeg?alt=media&token=3dd27f1b-423f-4eae-93ee-afa58fd1e13b`
    return (
        <>
            <section className="py-5 bg-dark core-team">
                <div className="container py-5 ">
                    <div className="row d-flex align-items-center ceo">
                        <div className="col-md-4 offset-md-2">
                            <div className=" px-5">
                                <img src={ceoImg} alt="" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-md-5 pl-md-4">
                            <h3 className="font-36 text-white font-weight-900">
                                Shubhankar Shil
                            </h3>
                            <h3 className="font-36 text-white font-weight-600">
                                CEO
                            </h3>
                            <div className="ceo-text">
                                <p className="mb-0 pl-4 text-white font-18 py-4">
                                    Shubhankar Shil. Shubhankar is the founder of the firm and heads the consulting team. The firm has a unique way of life and character which, ..
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container mt-5 py-5 text-white">
                    <h1 className="font-weight-700 text-center mb-4">
                        Team
                    </h1>
                    <div className="row mt-5">
                        <div className="col-md-8 offset-md-2">
                            <div className="row no-gutters">
                                <div className="col-md-4 member">
                                    <div className="one">
                                        {/* <img src={ceoImg} alt="" /> */}
                                        <div className="img-placeholder"></div>

                                        <div className="details mt-4">
                                            <h4 className="font-weight-bold">Zahirul Quayum</h4>
                                            <p>Director - Strategy Advisory</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 member z-5">
                                    <div className="two">
                                        <div className="img-placeholder"></div>
                                        {/* <img src={ceoImg} alt="" /> */}
                                        <div className="details mt-4">
                                            <h4 className="font-weight-bold">Shubhankar Shil</h4>
                                            <p>Founder/CEO</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 member">
                                    <div className="three">
                                    <div className="img-placeholder"></div>

                                        {/* <img src={ceoImg} alt="" /> */}
                                        <div className="details mt-4">
                                            <h4 className="font-weight-bold">Tapan Fouzder</h4>
                                            <p>Director - Strategy Advisory</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TheCoreTeam;