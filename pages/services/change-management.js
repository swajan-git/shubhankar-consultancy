import { useState } from 'react';
import ServicePageHero from '../../components/ServicePages/ServicePageHero';
import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';
import YouTubeResponsiveEmbed from '../../components/shared/YouTubeResponsiveEmbed';
import { BsArrowRight } from "react-icons/bs"
import ServiceSectionLayout from '../../components/ServicePages/ServiceSectionLayout';
import { randomImg } from '../../shared/data';
import HorizontalLine from '../../components/shared/HorizontalLine';
import OrangeHorizontalLine from '../../components/shared/OrangeHorizontalLine';
import ModernServiceCard from '../../components/ServicePages/ModernServiceCard';
import { changeManagementData } from '../../shared/data/service-data/changeManagement';
import VIIModernServiceCard from '../../components/ServicePages/VIIModernServiceCard';

const ServicePage = () => {
    const heroTitle = `Lorem ipsum dolor sit amet consectetur.`;
    const heroText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt, eaque magni necessitatibus repellat distinctio nam porro repellendus iure odit tempore dolorum.`;
    const heroImg = `https://source.unsplash.com/random/800x550`;
    return (
        <>
            <section className="service-hero py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="text-box py-3 pl-3">
                                <h1 className="display-4 text-white font-weight-900">
                                    Business Process Outsourcing <span className="orange-dot">.</span>
                                </h1>
                                <p className="text-white mb-0 font-22">Reinventing Business Processes is critical. We innovate Reinvention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServicePageScroll one="BPO Service" two="Case Studies" three="What We Think" four="Blogs" />

            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 py-5 offset-md-1">
                            <h1 className="font-36 mb-3 font-weight-900">
                                BPS: Reinventing BPO with Intelligent Operations
                            </h1>
                            <HorizontalLine />
                            <p>
                                In today’s dynamic market, where physical and digital realms merge, it is critical to ensure that companies do not become myopic with traditional revenue streams, and business processes. The only constant in today’s world is change and Shubhankar Consulting aims to provide data driven insights to reorganise your business processes to ensure a sustainable revenue stream over the foreseeable future. <br /> <br /> With our dynamic team of functional experts and deep industry experience we know for a fact that every client is unique and the solutions we provide reflect that.
                            </p>

                        </div>
                        <div className="col-md-6 change-second">
                            {/* <img src="/img/services/bpo/bps-spectacle.jpg" alt="" className="img-fluid" /> */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4 bg-gray">
                <div className="container bg-white">
                    <div className="row py-3 d-flex align-items-center">
                        <div className="col-md-3" style={{ borderRight: "4px solid blue" }}>
                            <img src="https://source.unsplash.com/random/800x500" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-9 pl-0 pl-md-4">
                            <h5 className="font-weight-bold">ANOTHER LINK TO REDIRECT TO ANOTHER WEBSITE</h5>
                            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                            <button className="btn btn-link px-0">READ MORE <BsArrowRight /> </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-dark-gray">
                <div className="container my-4">
                    <div className="row">
                        <div className="col-md-6 text-white offset-md-3 text-center">
                            <h1 className="font-36 mb-3 font-weight-900">
                                How we work
                            </h1>
                            <p className="mb-4">
                                We combine deep industry expertise and human-centered approaches to help our clients shape their business strategies and drive growth.
                            </p>
                            <OrangeHorizontalLine center={true} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ModernServiceCard reverse={true} textR={true} data={changeManagementData[0]} />
                            <ModernServiceCard reverse={true} textR={true} data={changeManagementData[0]} />
                            <ModernServiceCard reverse={true} textR={true} data={changeManagementData[0]} />
                            <ModernServiceCard reverse={true} textR={true} data={changeManagementData[0]} />
                        </div>
                        <div className="col-md-6">
                            <ModernServiceCard br={true} data={changeManagementData[0]} />
                            <ModernServiceCard br={true} data={changeManagementData[0]} />
                            <ModernServiceCard br={true} data={changeManagementData[0]} />
                            <ModernServiceCard br={true} data={changeManagementData[0]} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="row neg-mt-26">
                    <div className="col-md-6 offset-md-3">
                        <VIIModernServiceCard data={changeManagementData[0]} />
                    </div>
                </div>
            </div>


        </>
    );
};

export default ServicePage;