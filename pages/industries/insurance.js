import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Insurance | Shubhankar Consulting" />
            <main className="insurance">
                <section className="bg-section">
                    <div className="py-5"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-top orange-right"></div>
                            <div className="col-md-5 ">
                                <h1 className="display-4 text-white mb-5  mt-md-5 font-weight-900 pb-3 ">
                                    Insurance <span className="orangered-dot">.</span>
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 bg-transparent-blue orange-right"></div>
                            <div className="col-md-5 pt-5 bg-transparent-blue text-white">
                                <h3 className="font-weight-900 mb-5 mt-5">Insurance Reimagined</h3>
                                <p className="font-18 font-weight-600">
                                    Insurance facilitates loss mitigation, financial stability, and trade and commerce operations, all of which contribute to economic growth and development. As a result, insurance is critical to our nation’s long-term growth.                                </p>

                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-5 py-5">
                                <h3 className="font-36 mb-4 text-dark font-weight-900">
                                    Capabilities
                                </h3>
                            </div>
                            <div className="col-md-4 bg-transparent-blue"></div>
                        </div>
                        <div className="row capabilities">
                            <div className="col-md-3 "></div>
                            <div className="col-md-1 orange-right orange-top"></div>
                            <div className="col-md-4">
                                <h3>Compliance and Risk</h3>
                                <p>
                                    We assist compliance and risk officers in meeting the demands of increasingly complicated legislation while also assisting their businesses in growing and prospering. Through our significant expertise in mergers and acquisitions and private equity, we provide vital help to carriers during due diligence and merger integration. We also assist businesses in developing plans to achieve their environmental, social, and governance (ESG) objectives.
                                </p>


                                <h3 className="mb-4 mt-4">Marketing Operations</h3>
                                <p>
                                    Our insurance professionals can assist you comprehend changing customer preferences and difficult market situations so you can take advantage of opportunities before others do.
                                </p>
                            </div>
                            {/* <div className="col-md-3 orange-bottom orange-top orange-left mt-5"></div> */}
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-4 orange-top"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;