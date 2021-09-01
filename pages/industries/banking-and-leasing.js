import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Banking and Leasing | Shubhankar Consulting" activeNav="industries"  />
            <main className="banking">
                <section className="bg-section">
                    <div className="bg-blue">
                        <div className="py-5"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-5 ">
                                    <h1 className="display-4 text-white  mt-md-5 font-weight-900 pb-3 ">
                                        Banking and <br /> Leasing<span className="orangered-dot">.</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 orange-top orange-right py-4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-5 py-5">
                                <p className="font-20 text-white">
                                    Bangladesh is a developing agricultural country that is steadily becoming more industrialized. The people of this subcontinent have traditionally been wary of business and trade. However, as time passes, people are inspired and motivated to take risks and start businesses. Entrepreneurs confront a scarcity of starting cash, and if they have managed to start a business, they face a severe lack of working capital. They seek long-term direct financing from commercial banks, specialized banks, and other financial institutions in this situation, however obtaining long-term loans from direct financing institutions in Bangladesh is difficult. Leasing business in Bangladesh is providing for the alternative financing introduced by the prominent leasing companies in Bangladesh.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-6 py-5">
                                <h3 className="font-36 mb-4 text-dark font-weight-900">
                                    Banking Capabilities
                                </h3>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row capabilities">
                            <div className="col-md-3 "></div>
                            <div className="col-md-1 orange-right orange-top"></div>
                            <div className="col-md-5">
                                <h3 className="mb-4">Comprehensive Understanding of Regulations</h3>
                                <p>
                                    We understand legal limits, various accounting standards across nations, cultural variances, client expectations, and the obstacles that CIOs and CFOs face in making the best business decisions.
                                </p>


                                <h3 className="mb-4 mt-5">Guidance from Scratch</h3>
                                <p>
                                    From the definition of the strategy through the implementation of the solution, we are with our clients every step of the way.
                                </p>
                            </div>
                            <div className="col-md-3 orange-bottom orange-top orange-left mt-5"></div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-4 orange-top"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;