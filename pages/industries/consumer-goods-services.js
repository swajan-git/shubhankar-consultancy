import MergersCard from "../../components/Cards/MergersCard";
import SEOLayout from "../../components/shared/SEOLayout";
import { consumerGoodsCapabilities } from "../../shared/data/industry-data/consumerGoods";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Consumer Goods & Services | Industries"  activeNav="industries" />
            <main className="consumer-goods">
                <section className="bg-section">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-md-3  orange-right bg-transparent-blue"></div>
                            <div className="col-md-2  bg-transparent-blue"></div>
                            <div className="col-md-2  bg-transparent-blue">
                                <div className=" py-5">
                                    <img className="img-fluid" src="/img/industries/consumer-goods/icon-one.png" alt="" />
                                </div>
                            </div>
                            <div className="col md-5 py-5  bg-transparent-blue"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 bg-white orange-right"></div>
                            <div className="col-md-4 pt-md-5 bg-white pb-md-5">
                                <p className="font-20 font-weight-600 mt-md-5 pt-5">
                                The consumer products industry is made up of stocks and companies that sell goods to individuals and households rather than to manufacturers and industries. These businesses create and sell things that are designed for the purchasers' personal use and delight. Food manufacturing, packaged goods, apparel, beverages, autos, and electronics are all part of this industry.
                                </p>
                            </div>
                            <div className="col-md-5 p-md-5 p-4">
                                <h1 className="display-4 text-white  mt-md-5 font-weight-900 pb-3 ">
                                    Consumer <br /> Goods &  <br /> Services <span className="orangered-dot">.</span>
                                </h1>
                                <div className="bottom-bar"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="how-help text-white">
                    <div className="container-fluid">
                        <div className="row d-">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-6 pt-5 mt-5">
                                <h3 className="font-36 mb-4 font-weight-900">
                                    How we help
                                </h3>
                            </div>
                            <div className="col-md-1 offset-md-2 pt-5">
                                <div className="p-5 p-md-0">
                                    <img src="/img/industries/consumer-goods/icon-two.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-1 orange-top orange-right"></div>
                            <div className="col-md-5 py-5">
                                <p className="font-18 font-weight-600 my-5">
                                With the pandemic imposing massive changes in the consumer goods and services industry, we help our clients achieve consumer relevance at the right size units and at the right pace with services encompassing growth strategy and execution, sales and trade promotion management, marketing, supply chain, and intelligent enterprise enablement. 
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4 orange-right orange-bottom"></div>
                            <div className="col-md-5 pt-5">
                                <h3 className="font-36  font-weight-900">
                                    Our Capabilities
                                </h3>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-md-3"></div>
                            <div className="col-md-3">
                                <MergersCard data={consumerGoodsCapabilities[0]}/>
                            </div>
                            <div className="col-md-3">
                                <MergersCard data={consumerGoodsCapabilities[1]}/>
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