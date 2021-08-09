import MergersCard from "../../components/Cards/MergersCard";
import SEOLayout from "../../components/shared/SEOLayout";
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
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, laudantium dolor expedita minima nemo reiciendis non in, ex fugiat deserunt est velit.
                                </p>
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nesciunt maxime aut veniam sit temporibus voluptatem alias excepturi corrupti eius hic nihil inventore, perferendis eaque asperiores animi molestias nemo voluptatibus obcaecati, libero a ducimus! Pariatur assumenda nesciunt veritatis delectus.
                                </p>
                                <p className="font-20 mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nesciunt maxime aut veniam sit temporibus voluptatem alias excepturi corrupti eius hic nihil inventore, perferendis eaque asperiores animi molestias nemo voluptatibus obcaecati, libero a ducimus! Pariatur assumenda nesciunt veritatis delectus.
                                </p>
                                <p className="font-20 mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis nesciunt maxime aut veniam sit temporibus voluptatem alias excepturi corrupti eius hic nihil inventore, perferendis eaque asperiores animi molestias nemo voluptatibus obcaecati, libero a ducimus! Pariatur assumenda nesciunt veritatis delectus.
                                </p>
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
                                <MergersCard data={mergersCapabilities[0]} />
                            </div>
                            <div className="col-md-4  pr-md-4">
                                <MergersCard data={mergersCapabilities[1]} />
                            </div>
                        </div>
                        <div className="row no-gutters mt-5 pb-5">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-4  pr-md-4">
                                <MergersCard data={mergersCapabilities[1]} />
                            </div>
                            <div className="col-md-4 mod2">
                                <MergersCard data={mergersCapabilities[2]} />
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
                                    How we work
                                </h3>
                                <div className="orange-left pl-4 py-4">
                                    <p className="mb-0 pl-2">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt dicta nam, quo eveniet rerum quis totam sit perspiciatis corrupti? Excepturi placeat amet tenetur saepe sunt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-5 mb-5">
                            <div className="col-md-2"></div>
                            <div className="col-md-3">
                                <MergersCard text="Forward-thinking market research and industry-specific thought leadership." alter={true} />
                            </div>
                            <div className="col-md-3">
                                <MergersCard text="Forward-thinking market research and industry-specific thought leadership." alter={true} />
                            </div>
                            <div className="col-md-3">
                                <MergersCard text="Forward-thinking market research and industry-specific thought leadership." alter={true} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;