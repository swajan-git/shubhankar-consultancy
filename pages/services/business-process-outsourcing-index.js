import { BsArrowRight } from "react-icons/bs"
import ModernServiceCard from "../../components/ServicePages/ModernServiceCard";
import ServiceCard from "../../components/ServicePages/ServiceCard";
import ServicePageHero from '../../components/ServicePages/ServicePageHero';
import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';
import HorizontalLine from "../../components/shared/HorizontalLine";
import OrangeHorizontalLine from "../../components/shared/OrangeHorizontalLine";
import { bpoServices } from "../../shared/data/service-data/bpo";

const BusinessProcessOutsourcing = () => {
    const heroTitle = `Business Process Outsourcing (BPO)`;
    const heroText = `Reinventing Business Processes is critical. We innovate Reinvention.`;
    const heroImg = `https://source.unsplash.com/random/800x550`;
    return (
        <>
        <main className="bpo">
            
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
                        <div className="col-md-6 bps-bg">
                            {/* <img src="/img/services/bpo/bps-spectacle.jpg" alt="" className="img-fluid" /> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-5">
                            <h1 className="display-4 mt-5 mb-3 text-white font-weight-700">
                                BPO <br />Services
                            </h1>
                            <OrangeHorizontalLine className="mb-4" />
                            <ModernServiceCard data={bpoServices[0]} />
                            <ModernServiceCard data={bpoServices[1]} />
                            {/* <ModernServiceCard data={bpoServices[2]} /> 
                            <ModernServiceCard data={bpoServices[3]} />  */}
                        </div>
                        <div className="col-md-6 py-4 ">
                            <div className="bpo-lamp py-5">

                            </div>
                            {/* <img src="/img/services/bpo/bpo-lamp.jpg" alt="" className="img-fluid" /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <ModernServiceCard data={bpoServices[2]} />
                            <ModernServiceCard data={bpoServices[3]} />
                        </div>
                        <div className="col-md-6">
                            <ModernServiceCard data={bpoServices[4]} />
                            <ModernServiceCard data={bpoServices[5]} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 py-5 offset-md-1">
                            <h1 className="font-36 mb-3 font-weight-900">
                                Case Studies
                            </h1>
                            <HorizontalLine />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam provident itaque suscipit, quae nemo eveniet dolore omnis amet magnam! Rem laudantium tempore quia omnis repellat rerum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            </main>
        </>
    );
};

export default BusinessProcessOutsourcing;