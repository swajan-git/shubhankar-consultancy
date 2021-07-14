import { useState } from 'react';
import ServicePageHero from '../../components/ServicePages/ServicePageHero';
import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';
import YouTubeResponsiveEmbed from '../../components/shared/YouTubeResponsiveEmbed';
import { BsArrowRight } from "react-icons/bs"
import ServiceSectionLayout from '../../components/ServicePages/ServiceSectionLayout';
import { randomImg } from '../../shared/data';
import OrangeHorizontalLine from '../../components/shared/OrangeHorizontalLine';
import { financeConsultingData } from '../../shared/data/service-data/financeConsultingData';
import ModernServiceCard from '../../components/ServicePages/ModernServiceCard';

const ServicePage = () => {
    const heroTitle = `Lorem ipsum dolor sit amet consectetur.`;
    const heroText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt, eaque magni necessitatibus repellat distinctio nam porro repellendus iure odit tempore dolorum.`;
    const heroImg = `https://source.unsplash.com/random/800x550`;
    return (
        <>
            <main className="finance-consulting">
                <section className="pt-5 bg-fin">
                    <div className="container">
                        <div className="row">
                            <div className="text-dark col-md-5 offset-md-2">
                                <h3 className="font-36 mb-3 font-weight-900">
                                    Finance Consulting
                                </h3>
                                <p className="font-20">Supporting CFOs, Providing Enterprise Value
                                    Enhancing Working Capital Liquidity and Budgetary Alignment

                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-4">
                        <div className="row">
                            <div className="col-md-6 box-border">

                            </div>
                            <div className="col-md-5 pb-5 pl-0 pl-md-5">
                                <p className=" font-bold">
                                    The way businesses operate, embrace technology, and manage risk is fast changing as a result of digital. To grab and analyze valuable data that optimizes process and operations, allows corporate innovation, and unlocks new value in a disruptive world, organizations need the proper leadership and digital technologies.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-fin-man">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 right-border">

                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="text-white col-md-6 pl-md-5 border-box-reverse">
                                <h3 className="font-36 pl-5 ml-5 mt-5 pt-5 mb-3 font-weight-900">
                                    How we work
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 pl-md-5 ">
                                <p className="font-20 text-white pl-md-5 ml-md-5 mt-4">
                                    We help Chief Financial Officers increase their impact and financial skills across their organization by combining extensive industry and functional experience with digital technology leadership.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-dark py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ModernServiceCard reverse={true} textR={true} data={financeConsultingData[0]} />
                                <ModernServiceCard reverse={true} textR={true} data={financeConsultingData[1]} />
                            </div>
                            <div className="col-md-6">
                            <ModernServiceCard br={true} data={financeConsultingData[2]} />
                            <ModernServiceCard br={true} data={financeConsultingData[3]} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5"></section>
            </main>
        </>
    );
};

export default ServicePage;