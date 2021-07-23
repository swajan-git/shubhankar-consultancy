import MergersCard from "../../components/Cards/MergersCard";
import SEOLayout from "../../components/shared/SEOLayout";
import { mergersCapabilities, mergersHow } from "../../shared/data/service-data/mergers-acquisitions";


const ServicePage = () => {
    return (
        <>
            <SEOLayout title="Mergers & Acquisitions | Shubhankar Consulting" />
            <main className="mergers">
                <section className="section-one pt-5">
                    <div className="container-fluid mt-5 pb-4 white-bottom">
                        <div className="row">
                            <div className="col-md-5 offset-md-2">
                                <h1 className="display-4 text-white font-weight-900 pb-3 ">
                                    Mergers & <br />Acquisitions <span className="orangered-dot">.</span>
                                </h1>
                                <p className="mt-1 text-white font-18">
                                    Mergers & Acquisition deals allow you to turn quickly, but it's still an unexplored area in terms of strategizing in Bangladesh. We can assist you in staying on track to get strategic value from your endeavors.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid py-5 white-bottom">
                        <div className="row mb-4">
                            <div className="col-md-6 offset-md-2">
                                <h3 className="font-36 text-white mb-3 font-weight-900">
                                    Indulge in Relevant M&A Deals and Creating Impact
                                </h3>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-2 orange-right-top-bottom"></div>
                            <div className="col-md-5 pl-md-4 text-white">
                                <p className="font-18">
                                    Increasing the value of your firm for a merger and acquisition could be a solution for many businesses suffering from the effects of the pandemic.
                                </p>
                                <p className="font-18 mt-4">
                                    Completing effective M&As, on the other hand, is difficult and fraught with difficulties. Chief executives and C-suite executives are being encouraged to consider hidden solvency difficulties and potential liabilities, which may be concealed by present government financial assistance and policies aimed at encouraging enterprises to trade. However, insolvency law and directors' duties may indicate a different approach.
                                </p>
                                <p className="font-18 mt-4">
                                    Your M&A decisions must be aligned with your business objectives and promise significant value. It appears simple, but mastering it is challenging. We help firms develop swift and cost-effective strategies and reach their stakeholders with our significant experience in planning and implementing such deals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capabilities bg-dark py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 offset-md-2">
                                <h3 className="font-36 text-white mb-3 font-weight-900">
                                    Capabilities
                                </h3>
                                <div className="orange-left pl-4 py-4">
                                    <p className="mb-0 text-white pl-2">
                                        We can encounter any point in the process to analyze your project from planning to implementation with our diverse and cross-cutting experiences.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="row no-gutters mt-5">
                            <div className="col-md-2 bg-white"></div>
                            <div className="col-md-3 mod pr-md-4">
                                <MergersCard data={mergersCapabilities[0]} />
                            </div>
                            <div className="col-md-3  pr-md-4">
                                <MergersCard data={mergersCapabilities[1]} />
                            </div>
                            <div className="col-md-3  pr-md-4">
                                <MergersCard data={mergersCapabilities[2]} />
                            </div>
                        </div>
                        <div className="row no-gutters mt-5">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-3  pr-md-4">
                                <MergersCard data={mergersCapabilities[1]} />
                            </div>
                            <div className="col-md-3 mod2">
                                <MergersCard data={mergersCapabilities[2]} />
                            </div>
                            <div className="col-md-3 bg-white"></div>

                        </div>
                    </div>
                </section>
                <section className="we-work py-5">
              
                    <div className="container">
                    <div className="d-flex">
                                    <h3 className="font-36 mb-3 orange-bottom font-weight-900">
                                        How We Work
                                    </h3>
                                </div>
                        <div className="row mt-5 mb-5">
                            <div className="col-md-4">
                                <MergersCard data={mergersHow[0]} />
                            </div>
                            <div className="col-md-4">
                                <MergersCard data={mergersHow[1]} />
                            </div>
                            <div className="col-md-4">
                                <MergersCard data={mergersHow[2]} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ServicePage;