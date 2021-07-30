import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Capital Markets & Wealth management | Shubhankar Consulting" />

            <main className="capital-market">
                <section className="bg-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 py-5 offset-md-3 bg-white">
                                <h1 className="display-4 font-dark mt-md-5 font-weight-900 pb-3 ">
                                    Capital Market & Wealth Management <span className="orangered-dot">.</span>
                                </h1>
                                <p className="font-18">We help investment banks, asset and wealth managers, and exchanges prepare for the digital future.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 orange-top orange-right bg-transparent-blue "></div>
                            <div className="col-md-6 bg-transparent-blue py-5">
                                <h3 className="font-36 text-white mb-3 font-weight-900">
                                    Ready for digital enabled capital Markets
                                </h3>
                                <p className="mt-4 text-white">
                                    In the stock markets, we're approaching a new era: In the years ahead, every capital markets firm's business and operating models will be challenged by a shifting industry core, technology-led innovation, and evolving digital value chains.
                                </p>
                                <p className="mt-4 text-white">
                                    Our capital markets consulting group helps companies rethink their business model, manage risk, reimagine workplace initiatives, increase operational efficiency, and more by leveraging global strategies and data-driven insights. Learn how we can assist you in preparing for the digital future.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 bg-white orange-right"></div>
                            <div className="col-md-6 bg-white pt-5">
                                <h3 className="font-36 mb-4 text-dark font-weight-900">
                                    Capabilities
                                </h3>
                            </div>
                        </div>
                        <div className="row capabilities">
                            <div className="col-md-3 orange-bottom bg-white"></div>
                            <div className="col-md-1 orange-bottom bg-white orange-top orange-right"></div>
                            <div className="col-md-5 bg-white">
                                <h3 className="py-4 mt-5">Asset Management</h3>
                                <p>
                                    Reinvigorated. Transformed. Asset managers now confront a variety of challenges and opportunities, including bending the cost curve, identifying new sources of alpha, reinventing operating models, and boosting returns. Optimal capital spending, data-driven analytics, AI-enhanced insights, and agile, adaptable real-time operations are now required for success.
                                </p>
                                <p>
                                    We work with asset managers, institutional investors, and asset servicers to help them improve their business models and expand faster. We help businesses prosper in today's markets by streamlining and integrating front, middle, and back office activities and specialized platforms, boosting risk posture and data delivery, and using disruptive breakthroughs like AI, predictive analytics, and distributed ledgers.
                                </p>
                                <h3 className="py-4 mt-5">Wealth Management</h3>
                                <p>
                                    Clients today want a whole new level of service that is more educated, personalized, and transparent than ever before, and they expect it faster than ever before. Companies that rise to the digital challenge use industry data to restructure their businesses from the ground up and aim for operational excellence—and many won't go it alone.
                                    We create end-to-end solutions for premier wealth management firms by using our deep industry experience, broad range of capabilities, and synergies across our whole organization.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white py-5">
                    <div className="container-fluid">
                        <div className="row capabilities">
                            <div className="col-md-6 offset-md-3">
                                <h3 className="py-4 mt-5">Investment Management</h3>
                                <p>
                                    Regardless of your strategy approach, any future-ready organization will need a digitally connected operating model to keep costs low while providing better experiences for customers and staff.
                                </p>
                                <p>
                                    Using our market-relevant skills, we develop services and solutions that can assist investment banks in transforming and seeking competitive advantages.
                                </p>
                                <h3 className="py-4 mt-5">Market Infrastructure</h3>
                                <p>
                                    We work with exchanges, clearing houses, central securities depositories, and custodians to build long-term strategies, technology, and operations.                                </p>
                            </div>
                            <div className="col-md-3 orange-top orange-left orange-bottom"></div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
};

export default IndustriesPage;