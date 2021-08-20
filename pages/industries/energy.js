import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Energy | Industries" />
            <main className="energy">
                <section className="bg-section">
                    <div className="container-fluid large-top-pad">
                        <div className="row">
                            <div className="col-md-3 orange-top orange-right"></div>
                            <div className="col-md-6 mb-5 text-white">
                                <h1 className="display-4 text-white mb-4  font-weight-900 pb-3 ">
                                    Energy <span className="orangered-dot">.</span>
                                </h1>
                                <p className="font-18">
                                    The energy industry is the mother of all sectors in Bangladesh. Every industry, establishment, and initiative is reliant on energy in some way. The most extensively used energy sources are electricity and natural gas. The country's fast urbanization, industrialisation, and enormous population have all combined to create a massive demand for energy. The power sector is playing an increasingly important role in the growth of our economy. For the majority of the country's economic operations, electricity is the primary source of energy. Electricity is fully dependent on the availability of machinery and equipment in businesses and establishments.
                                </p>
                                <p className="font-18 mt-4 mb-5">
                                    We provide clients with energy audit reports that include precise recommendations for energy conservation and efficiency. Clients are also informed about prospective tax benefits for investing in alternative energy systems.                                </p>
                            </div>
                            <div className="col-md-3 bg-transparent-blue"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 bg-white orange-right"></div>
                            <div className="col-md-6 bg-white px-5 pt-5">
                                <h3 className="font-36 mb-5 text-dark font-weight-900">
                                    Capabilities
                                </h3>
                                <div className="pl-md-5">
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Research and Manufacturing
                                        </h3>
                                        <p className="font-18">
                                            We help you build and sustain a competitive advantage by optimizing upstream operational models.
                                        </p>
                                    </div>
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Shift to Energy
                                        </h3>
                                        <p className="font-18">
                                            Providing information, services, and solutions to assist our clients in their efforts to achieve net-zero emissions.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 bg-transparent-blue">
                                <div className="mx-5 px-4">
                                    <img src="/img/industries/energy/thunder.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-3 bg-white orange-right orange-bottom"></div>
                            <div className="col-md-6 bg-white px-5 ">

                                <div className="pl-md-5">
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Exchanges and Transactions
                                        </h3>
                                        <p className="font-18">
                                            By controlling energy trading risk, lowering expenses, and monetizing opportunities, we help you realize new efficiency.
                                        </p>
                                    </div>
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Marketing and Rebranding
                                        </h3>
                                        <p className="font-18">
                                            Transform the customer experience at the service station by implementing digital-based solutions.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 bg-white"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;