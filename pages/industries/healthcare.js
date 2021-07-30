import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Healthcare | Shubhankar Consulting" />
            <main className="healthcare">
                <section className="bg-section">
                    <div className="py-5 bg-blue">
                        <div className="my-5 py-5"></div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 bg-blue orange-top orange-right"></div>
                            <div className="col-md-5 bg-blue text-white">
                                <h1 className="display-4  mt-md-5 font-weight-900 pb-3 ">
                                    Healthcare <span className="orangered-dot">.</span>
                                </h1>
                                <p className="font-18 font-weight-600">
                                    With Insight Driven Health, we help clients offer more effective, efficient, and affordable healthcare from the back office to the doctor's office.
                                </p>
                                <p className="font-18 font-weight-600">
                                    Cloud was all about aspiration the day before yesterday. It's all about scale these days.
                                </p>
                                <p className="font-18 font-weight-600">
                                    Cloud is a disruptive force in the industry, driving innovation. Cloud-based healthtech companies continue to gain clout as industry influencers. Furthermore, the main three cloud hyperscalers in the North American market—Microsoft, Amazon, and Google—have healthcare in mind and are investing in research and development.
                                </p>
                            </div>
                            <div className="col-md-4 bg-transparent-blue"></div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-6 py-5">
                                <h3 className="font-36 mb-4 text-dark font-weight-900">
                                    Capabilities
                                </h3>
                            </div>
                            <div className="col-md-3 bg-transparent-blue"></div>
                        </div>
                        <div className="row capabilities ">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-5 offset-md-1 pb-5">
                                <h3>Digital Health</h3>
                                <p>
                                    Innovative digital health methods are being implemented by health organizations. Leading firms can fundamentally transform the way healthcare is delivered and the health consumer experience by focusing on cloud, EHRs, machine learning, AI, cybersecurity, and other technologies.
                                </p>


                                <h3 className="mt-5 pb-4">Customer Experience</h3>
                                <p>
                                    The human perspective is becoming increasingly important as the need for virtual care, home health solutions, retail care, self-service, and patient transparency grows. The organizations that concentrate on providing meaningful experiences on an individual's terms will be the ones to lead. This is not an easy task. To deliver care, you must discover the correct operating model, technology, data, and culture.
                                </p>
                                <p>
                                    We blend technology and human ingenuity to help consumers better understand their needs and take advantage of technology-based customisation. Our talented team combines deep data with healthcare marketing, customer service, omnichannel patient access, and goods.
                                </p>


                                <h3 className="mt-5 py-4">
                                    Operational Transformation
                                </h3>
                                <p>
                                    Every change in the market affects how a company operates and performs, often dramatically. Operations transformation (OT) can help your business or organization deal with expanding markets, increasing global competition, rising customer expectations, advanced technologies, and increasing digitization. You'll be equipped to deal with any potential hurdles if you adapt your operations.
                                </p>

                            </div>
                            <div className="col-md-3 orange-top orange-left mt-5"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;