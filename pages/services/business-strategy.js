import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';
import OrangeHorizontalLine from '../../components/shared/OrangeHorizontalLine';
import { businessStrategyData } from '../../shared/data/service-data/businessStrategy';
import VIIModernServiceCard from '../../components/ServicePages/VIIModernServiceCard';
import { BsArrowRight } from "react-icons/bs"
import SEOLayout from '../../components/shared/SEOLayout';

const ServicePage = () => {

    const sections = [
        {
            name: `Our Strategy`,
            link: `Our-Strategy`
        },
        {
            name: `Strategic Services`,
            link: `Strategic-Services`
        },
        {
            name: `Case Studies`,
            link: `Case-Studies`
        },
        {
            name: `Blogs`,
            link: `Blogs`
        },
    ]

    return (
        <>
        <SEOLayout title="Business Strategy | Services" activeNav="services"  />
            {/* <ServicePageHero title={heroTitle} text={heroText} img={heroImg} /> */}
            <main className="business-strategy">
                <section className="hero py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="text-box py-3 pl-3">
                                    <h1 className="display-4 text-white font-weight-900">
                                        Business <br /> Strategy <span className="orange-dot">.</span>
                                    </h1>
                                    <p className="text-white mb-0 font-22">
                                        Reinventing Business Processes is critical. We innovate Reinvention
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Our-Strategy" ></div>
                </section>
                <ServicePageScroll one={sections[0]} two={sections[1]} three={sections[2]} four={sections[3]} />
                <section className="our-strategy text-white">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 py-5 offset-md-1">
                                <h1 className="font-36 mb-3 font-weight-900">
                                    Our Strategy
                                </h1>
                                <OrangeHorizontalLine />
                                <p>
                                    Companies must think quickly and be adaptable in this ever changing environment. And that demands real-world methods. With end-to-end experience throughout the value chain, Shubhankar Consultancy enables customers to build strategies that originate from not only knowledge but also expertise.                                 </p>
                                <p>
                                    By providing our strategists with accurate data and industry expertise, combined with the experience with efficient operation of business functionality, optimization and operation of supply chains, technology design and implementation and the construction of stable operational models and cultures, our integrated model enables 360° value creation.
                                </p>
                                <p>
                                    Shubhankar Consultancy takes advantage of this leverage in working with Boards of Executive Directors, CEOs and teams, to generate 360° value for shareholders and stakeholders by identifying and addressing their most important business issues in areas like development, operating models and sustainability.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="Strategic-Services" ></div>
                </section>
                {/* sharable */}
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
                {/* our services */}
                <section className="py-5 our-services">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-md-6 pt-5">
                                <h1 className="font-44 mt-5 mb-3 text-white font-weight-600">
                                    Strategy Consultancy <br />Services
                                </h1>
                                <OrangeHorizontalLine className="mb-4" />
                                <p className="text-white">
                                    We combine deep industry expertise and human-centered approaches to help our clients shape their business strategies and drive growth.
                                </p>
                            </div>
                        </div>
                        <div className="row mt-5 mb-5">
                            <div className="col-md-6">
                                <VIIModernServiceCard textR={true} br={true} reverse={true} data={businessStrategyData[0]} />
                                <VIIModernServiceCard textR={true} reverse={true} data={businessStrategyData[1]} />
                            </div>
                            <div className="col-md-6">

                                <VIIModernServiceCard data={businessStrategyData[2]} />
                                <VIIModernServiceCard data={businessStrategyData[2]} />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ServicePage;