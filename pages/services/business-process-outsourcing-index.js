import React, { useState } from 'react';
import ServicePageHero from '../../components/ServicePages/ServicePageHero';
import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';

const BusinessProcessOutsourcing = () => {
    const heroTitle = `Business Process Outsourcing (BPO)`;
    const heroText = `Traditional BPO is dead. Yet the need to reinvent business operations is more paramount than ever.`;
    const heroImg = `https://source.unsplash.com/random/800x550`;
    return (
        <>
        <ServicePageHero title={heroTitle} text={heroText} img={heroImg} />

            <ServicePageScroll />
            <section className="service-intro py-5" id="intro">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h1 className="font-44 font-weight-900">
                                BPS: Reinventing BPO with Intelligent Operations
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h6 className="font-weight-bold">New ways to operate</h6>
                            <div className="service-content">
                                <p>In today&rsquo;s digitally disrupted market, where traditional revenue sources are becoming more elusive, sustainable growth requires a new&nbsp;<a href="https://www.accenture.com/us-en/insights/operations/future-ready-operations" target="_self">operating model</a>&nbsp;one that&#39;s anchored around the customer and driven by intelligence to deliver exceptional experiences and outcomes.</p>

                                <p>An operating model that harnesses new and innovative technologies including&nbsp;<a href="https://www.accenture.com/us-en/services/ai-artificial-intelligence-index" target="_self">artificial intelligence</a>,&nbsp;<a href="https://www.accenture.com/us-en/services/blockchain/marcopolo-alliance" target="_self">distributed ledger technology</a>&nbsp;and quantum computing to continually push the boundaries of today&rsquo;s processes and business models.</p>

                                <p>Accenture Operations makes this possible through our human-machine operating platform &ndash;&nbsp;<a href="https://www.accenture.com/us-en/services/business-process-services/synops-operating-engine" target="_self">SynOps</a>, which synthesizes the optimal blend of people, process, and technology to help clients rewire their organizations with a new, more connected operating model&mdash;one that creates hyper relevant customer experiences, heightens collaboration among both internal groups and external partners to drive successful and sustainable growth.</p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://www.accenture.com/t20210310T015152Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Thumbnail768x432/24/Accenture-IO-Cover-768x432.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
};

export default BusinessProcessOutsourcing;