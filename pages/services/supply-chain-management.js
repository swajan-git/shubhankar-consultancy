import { data } from 'jquery';
import React from 'react';
import SEOLayout from '../../components/shared/SEOLayout';
import { supplyChainData, supplyHowWeWork } from '../../shared/data/service-data/supplyChain';

const SupplyChainManagement = () => {
    return (
        <>
            <SEOLayout title="Supply Chain Management | Shubhankar Consulting" />
            <main className="supply-chain-management">
                <div className="total-hero">
                    <section className="py-5 hero">
                        <div className="container-fluid py-5">
                            <div className="row">
                                <div className="col-md-4 offset-md-2">
                                    <h1 className="display-4 text-white font-weight-900">
                                        Supply Chain<br /> Management <span className="orangered-dot">.</span>
                                    </h1>

                                </div>
                                <div className="col-md-6 border-minus-right"></div>
                                <div className="col-md-5 mt-4 offset-md-2">
                                    <p className="text-white mb-0 font-18">
                                        We assist businesses in reimagining and transforming their supply chains for the future, with a positive impact on the business, society, and environment.                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="pt-5 hero2">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 offset-md-2">
                                    <h1 className="font-36 text-white mb-3 font-weight-700">
                                        Develop Futuristic Supply Chains with Clarity
                                    </h1>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-3 border-top-right"></div>
                                <div className="text-white font-16 col-md-6 mb-5 pb-5 pl-md-4">
                                    <p>
                                        Supply chains today are facing immense hurdles than ever before in any business setting. They need to meet more complex demands from customers and the business. They need to adapt to the global disruption caused by COVID-19. And they need to be responsible and responsive to outmaneuver uncertainty in a world that brings fresh challenges and opportunities every day.
                                    </p>
                                    <p>
                                        So what is the solution? To build a customer-centric supply chain that is speedier and more agile. To improve efficiency by using a zero-based optimization strategy. Greater resilience, sustainability, openness, and trust will be used to power future growth. And finally to use the transformative potential of data and digital technology to empower people to operate differently and better.
                                    </p>
                                    <p>
                                        This is exactly what we define as futuristic supply chains: setting long-term goals to emerge from the myopic vision and streamlining operations through clarity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <section className="bg-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-border-right">
                            </div>
                            <div className="col-md-6 text-white text-center py-5">
                                <h1 className="font-36  mb-4 font-weight-700">
                                    Adapting to outmaneuver uncertainty
                                </h1>
                                <p className="font-">
                                    In an ever-changing, ever-challenging world, clarity in futuristic supply chains allow Chief Supply Chain Officers continuously innovate, establish competitive advantage, and improve business, consumer, and societal results.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-4 offset-md-2">
                                <SupplyCard data={supplyChainData[0]} />
                            </div>
                            <div className="col-md-3 mb-4">
                                <SupplyCard data={supplyChainData[1]} />
                            </div>
                            <div className="col-md-3 mb-4">
                                <SupplyCard data={supplyChainData[2]} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-4 offset-md-2 pb-5">
                                <SupplyCard data={supplyChainData[3]} />
                            </div>
                            <div className="col-md-3 mb-4 pb-5">
                                <SupplyCard data={supplyChainData[4]} />
                            </div>
                            <div className="col-md-4 orange-left-top">
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white pb-4">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 offset-md-2 py-5">
                                <h1 className="font-36  mb-4 font-weight-700">
                                    How We Work
                                </h1>
                                <p className="font-">
                                We analyze the past, present and future of supply chains to provide you with an approach best suited to your supply chain management and business objectives. By streamlining the process through unique and creative models, we help you unleash and conquer the world of efficiency and profitability.                                </p>
                            </div>
                            <div className="col-md-4 offset-md-1 orange-left-bottom"></div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3 offset-md-2 mb-4">
                                <SupplyCard data={supplyHowWeWork[0]} />
                            </div>
                            <div className="col-md-3 mb-4">
                                <SupplyCard data={supplyHowWeWork[1]} />
                            </div>
                            <div className="col-md-3 mb-4">
                                <SupplyCard data={supplyHowWeWork[2]} />
                            </div>
                        </div>

                    </div>
                </section>
                <section className="we-work2 pb-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 d-flex align-items-center justify-content-end capabilities">
                            <h1 className="font-44 text-white mt-5 mr-5 font-weight-700">
                                    Capabilities <span className="orangered-dot">.</span>
                                </h1>
                            </div>
                            <div className="col-md-7  pb-4">
                                <div className="row bg-white">
                                    <div className="col-md-5 mb-4">
                                        <SupplyCard data={supplyHowWeWork[3]} />
                                    </div>
                                    <div className="col-md-5 mb-4">
                                        <SupplyCard data={supplyHowWeWork[4]} />
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-5">
                                        <SupplyCard data={supplyHowWeWork[5]} />
                                    </div>
                                    <div className="col-md-5">
                                        <SupplyCard data={supplyHowWeWork[6]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-4 pb-5 mb-5">
                        <div className="row">
                            <div className="col-md-3 offset-md-2">
                                <SupplyCard data={supplyHowWeWork[7]} />
                            </div>
                            <div className="col-md-3">
                                <SupplyCard data={supplyHowWeWork[8]} />
                            </div>
                            <div className="col-md-3">
                                <SupplyCard data={supplyHowWeWork[9]} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default SupplyChainManagement;

export const SupplyCard = ({ data }) => {
    return (
        <>
            <div className="supply-card py-5 px-4">
                <h5 className="font-bold">{data.title}</h5>
                <p className="mt-3">{data.text} </p>
            </div>
        </>
    )
}