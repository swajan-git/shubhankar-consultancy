import SimpleCardOne from "../../components/Cards/SimpleCardOne";
import SEOLayout from "../../components/shared/SEOLayout";
import { dataAnalyticsCapabilities } from "../../shared/data/service-data/data-analytics";


const ServicePage = () => {
    return (
        <>
            <SEOLayout title="Data Analytics | Shubhankar Consulting" />
            <main className="data-analytics">
                <section className="hero">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 orange-right">

                            </div>
                            <div className="col-md-8 text-center py-5">
                                <img src="/img/services/data-analytics/analytics.png" alt="" className="data-search my-4" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 orange-right">

                            </div>
                            <div className="col-md-4 py-5 pr-md-5">
                                <p className="font-18">
                                    Unlocking Business Value, through Data-driven Reinvention- Create Meaningful Business Impact through Data and AI
                                    Data, analytics, and AI are paving the way for new ways for businesses to expand and differentiate themselves from the competition at a faster rate. All paths to value share a common denominator as the C-suite searches for methods to enhance utilization and efficiency, unlock new revenue sources, and have the flexibility (and agility) to establish new business models... data.
                                </p>
                            </div>
                            <div className="col-md-6 title-section d-flex align-items-end">
                                <div className="orange-botto pb-5">
                                    <h1 className="display-4 text-white font-weight-900 pb-3 orange-bottom">
                                        Data & Analytics <span className="orangered-dot">.</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ai-impact">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 orange-right"></div>
                            <div className="col-md-8 pt-5">
                                <h1 className=" text-white font-weight-700 mt-5 pt-5">The AI Impact</h1>
                            </div>
                            <div className="col-md-2 pt-4 text-center">
                                <img src="/img/services/data-analytics/analytics.png" alt="" className="data-search my-4" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-2 orange-right-top"></div>
                            <div className="col-md-6 pt-4 pb-5 px-md-5">
                                <p className="font-16 text-white mr-md-5 pr-md-5 pb-5 mb-5">
                                    By rethinking how data and AI efforts are implemented in line with business strategy, an organization may quickly realize a return on investment and, in turn, create the case for moving from AI pilots to enterprise-wide business transformation. Data becomes the ultimate competitive asset and differentiator with Data-driven Reinvention, and enterprises can reposition their offers, extend capabilities, and improve data and AI maturity to create new sources of value and sustainable development by scaling AI with cloud.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="capabilities">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 orange-right-bottom py-5"></div>
                        </div>
                        <div className="py-5 text-center">
                            <h1 className="display-4 text-dark font-weight-900">
                                Our Capabilities
                            </h1>
                        </div>
                        <div className="row pb-5">
                            <div className="col-md-6 px-md-5 offset-md-2">
                                <p className="text-md-right font-18">
                                    With Data-driven Reinvention, data becomes the ultimate competitive asset and differentiator, allowing businesses to reposition their offerings, extend capabilities, and improve data and AI maturity to create new sources of value and long-term development.
                                </p>
                                <div className="row mt-5">
                                    <div className="col-md-6 mb-4">
                                        <SimpleCardOne data={dataAnalyticsCapabilities[0]} />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <SimpleCardOne data={dataAnalyticsCapabilities[1]} />
                                    </div>
                                    <div className="offset-md-6 col-md-6">
                                        <SimpleCardOne data={dataAnalyticsCapabilities[2]} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 orange-left-top-bottom"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ServicePage;


