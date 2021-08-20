import MergersCard from "../../components/Cards/MergersCard";
import SEOLayout from "../../components/shared/SEOLayout";
import { makeTravelHappen } from "../../shared/data/industry-data/travelData";
import { mergersCapabilities, mergersHow } from "../../shared/data/service-data/mergers-acquisitions";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Travel | Industries" />
            <main className="travel">
                <section className="bg-white">
                    <div className="container-fluid mt-5 pb-4 ">
                        <div className="row">
                            <div className="col-md-4 offset-md-2">
                                <h1 className="display-4 font-weight-900 pb-3 mt-md-5 ">
                                    Travel <span className="orangered-dot">.</span>
                                </h1>
                                <p className="mt-1  font-18">
                                How can travel firms navigate uncertainty in a new era of travel at a time when the industry's future is uncertain?                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-two pt-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-2 orange-top orange-right"></div>
                            <div className="col-md-5 pb-5 text-white">
                                <p className="font-20 mb-4">
                                Travel has long been one of the most important economic contributors in the globe. COVID-19, on the other hand, experienced a significant drop in worldwide travel demand. The way we used to travel is no longer available. However, it has the potential to improve even further. Leaders must make key decisions in order to re-establish growth.                                </p>
                                <p className="font-20 mb-4">
                                You must run your firm on a daily basis, manage costs with accuracy, develop demand, and invest in the correct assets during these hard times. These are actions that must be taken in order to survive. However, travel businesses can take further steps to respond to the crisis and prepare for any situation.
                                </p>
                                <p className="font-20 mb-4">
                                A shaky future doesn't have to be a bad thing. Making decisions and prioritizing activities can assist leaders in emerging from this crisis with a brighter future, not just a different one. Accenture's World ID for Travel, for example, is a safety-first approach to resuming travel.                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-dark">
                    <div className="container-fluid pb-5">
                        <div className="row">
                            <div className="col-md-2 orange-right orange-bottom"></div>
                            <div className="col-md-6">
                                <h3 className="font-36 text-white pt-5 font-weight-900 mt-5">
                                    Making it happen
                                </h3>
                            </div>
                            <div className="col-md-1 offset-md-2 text-right pt-5">
                                <img src="/img/industries/travel/plane.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="row no-gutters mt-5">
                            <div className="col-md-2 bg-white"></div>
                            <div className="col-md-4 mod pr-md-4">
                                <MergersCard data={makeTravelHappen[0]} />
                            </div>
                            <div className="col-md-4  pr-md-4">
                                <MergersCard data={makeTravelHappen[1]} />
                            </div>
                        </div>
                        <div className="row no-gutters mt-5 pb-5">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-4  pr-md-4">
                                <MergersCard data={makeTravelHappen[2]} />
                            </div>
                            <div className="col-md-4 mod2">
                                <MergersCard data={makeTravelHappen[3]} />
                            </div>
                            <div className="col-md-1 bg-white"></div>

                        </div>
                    </div>
                </section>
                <section className="we-work py-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 offset-md-2">
                                <h3 className="font-36 mb-3 font-weight-900">
                                    How we help
                                </h3>
                                <div className="orange-left pl-4 py-4">
                                    <p className="mb-0 pl-2">
                                    Travel as we know it may not be returning, but a new era is just beginning, and we're assisting the industry in making a better comeback than ever before.                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mb-5">
                            <div className="col-md-2"></div>
                            <div className="col-md-3">
                                <MergersCard text="Forward-thinking market research and industry-specific thought leadership." alter={true} />
                            </div>
                            <div className="col-md-3">
                                <MergersCard text="Ventures and partnerships with critical ecosystem players." alter={true} />
                            </div>
                            <div className="col-md-3">
                                <MergersCard text="In major markets, there are industry-specific Innovation Centers, Digital Hubs, and Delivery Centers." alter={true} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;