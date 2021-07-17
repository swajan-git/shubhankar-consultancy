import { useState } from 'react';
import ServicePageHero from '../../components/ServicePages/ServicePageHero';
import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';

const ServicePage = () => {
    const heroTitle = ``;
    const heroText = ``;
    const heroImg = `https://source.unsplash.com/random/800x550`;
    return (
        <>
            <ServicePageHero title={heroTitle} text={heroText} img={heroImg} />
            <section className="service-intro py-5" id="intro">
                <div className="container">
                    {/* intro heading */}
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h1 className="font-44 font-weight-900">
                                Driving change by unlocking human ingenuity
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">

                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ServicePage;