import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Pharmaceuticals & Chemicals | Shubhankar Consulting" />
            <main className="pharma">
                <section className="bg-section">
                    <div className="py-5"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-top orange-right"></div>
                            <div className="col-md-6 text-white">
                                <h1 className="display-4  mt-md-5 font-weight-900 pb-3 ">
                                    Capital Market & Wealth <br />Management <span className="orangered-dot">.</span>
                                </h1>
                                <p className="font-fold font-20 py-4">The future is now</p>
                                <p className="font-18">We help investment banks, asset and wealth managers, and exchanges prepare for the digital future.</p>
                                <p className="font-18">We help investment banks, asset and wealth managers, and exchanges prepare for the digital future.</p>
                            </div>
                            <div className="col-md-3 bg-transparent-blue"></div>
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
                        <div className="row ">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-6 offset-md-1 pb-5">
                                <h3>Production & Operations </h3>
                                <p>
                                    To thrive in a world of increasing economic, environmental, and regulatory challenges,
                                    they must increase efficiency, adaptability, and safety. They must go beyond single-site “Industry 4.0” digitization efforts to optimize their whole production, personnel, and supply chain networks in order to obtain the visibility and control they require.
                                </p>

                                <h3 className="mb-4">Supply Chain & Operations</h3>
                                <p>
                                construct a customer-centric supply chain that works more quickly and with greater agility To improve efficiency by using a zero-based optimization strategy. Greater resilience, sustainability, openness, and trust will be used to power future growth. And to use the transformative potential of data and digital technology to empower people to operate differently and better.
                                </p>
                                <p>
                                The intelligent supply chain is what we call it: an engine of development through novel consumer experiences, a generator of profitability in difficult economic times, and a responsible source of stakeholder trust in the post-COVID world, allowing competitiveness.
                                </p>
                                <h3 className="my-4">
                                    Sustainability
                                </h3>
                                <p>
                                Organizations must now demonstrate that they are purposeful about sustainability, hold strong ethical standards, and operate responsibly in everything they do as stakeholders demand more environmental, social, and governance (ESG) efforts, regulations tighten, and consumers increasingly expect brands to take action.

                                </p>
                                <p className="pb-5">
                                Companies and brands are increasingly looking to their partners—as well as technology and innovation—to help them incorporate sustainability and make substantial changes that benefit business, society, and the environment. Our industry-experienced teams develop and implement strategies, operating models, procedures, and technology to assist organizations in achieving their sustainable objectives.
                                </p>
                            </div>
                            <div className="col-md-2 orange-top orange-left mt-5"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;