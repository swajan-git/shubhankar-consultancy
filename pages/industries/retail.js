import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Retail | Industries" activeNav="industries"  />
            <main className="retail">
                <section className="bg-section">
                    <div className="py-5"></div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-5 offset-md-2">
                                <h1 className="display-4 text-white  mt-md-5 font-weight-900 pb-3 ">
                                    Retail <span className="orangered-dot">.</span>
                                </h1>
                                <p className="font-18 text-white">
                                    How do we transition retail from today's uncertainty to resiliency tomorrow? For new climates, new expectations, and new ways of working, adaptive retail is the way to go.                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 orange-top orange-right"></div>
                            <div className="col-md-5 py-4 ">
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-2 bg-transparent-blue orange-right"></div>
                            <div className="col-md-7 pt-5 bg-transparent-blue text-white">
                                <p className="font-18">
                                    The new imperative for retailers is adaptive retail. Retailers must be able to change quickly in the face of global disruption, external constraints, and obligations. Adapting entails evolution, and evolution is the key to remaining robust.                                </p>
                                <p className="font-18">
                                    Retailers must adapt to three different factors:                                </p>
                                <ul className="retail-adapt font-18">
                                    <li>Adapt to new social, economic, and environmental climates.</li>
                                    <li>Adapt to new employee, consumer, and investor expectations.</li>
                                    <li>Adapt to changing working methods, including those involving technology, rivals, and partners.</li>
                                </ul>
                                <p className="font-18 pb-5">
                                    Today's retail is rarely straightforward. Tomorrow's retail is open for business at all times.
                                </p>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 bg-white orange-right"></div>
                            <div className="col-md-7 pt-5 bg-white text-dark">
                                <h3 className="font-36 mb-4 text-dark font-weight-900">
                                    How we help
                                </h3>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div className="row bg-white">
                            <div className="col-md-2 bg-white orange-bottom"></div>
                            <div className="col-md-1 orange-top bg-white orange-right orange-bottom"></div>
                            <div className="col-md-6 pt-5 bg-white text-dark ">
                                <div className="cap-info">
                                    <h3 className="text-dark ">
                                        Retail Supply Chain
                                    </h3>
                                    <p className="font-18">
                                        Future-proof your supply chain to match changing consumer demands, such as last-mile delivery and sustainable distribution.
                                    </p>
                                </div>
                                <div className="cap-info">
                                    <h3 className="text-dark ">
                                        Retail Workforce Reimagined
                                    </h3>
                                    <p className="font-18">
                                        Reorganize your store's footprint and formats to provide services and experiences that fit the needs of changing customers.
                                    </p>
                                </div>
                                <div className="cap-info">
                                    <h3 className="text-dark ">
                                        Retail Store of the Future
                                    </h3>
                                    <p className="font-18">
                                        Reorganize your store's footprint and formats to provide services and experiences that fit the needs of changing customers.
                                    </p>
                                </div>
                                <div className="cap-info mb-5 pb-5">
                                    <h3 className="text-dark ">
                                        Retail IT Modernization
                                    </h3>
                                    <p className="font-18">
                                        To enable customer interactions with speed and agility, futureproof your technology and create ecosystem connections.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>

                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row bg-white pt-5">
                            <div className="col-md-2"></div>
                            <div className="col-md-5 bg-white text-dark ">
                                <h3 className="font-36 mb-5 text-dark font-weight-900">
                                    Capabilities
                                </h3>
                                <div className="cap-info">
                                    <h3 className="text-dark ">
                                        Retail Supply Chain
                                    </h3>
                                    <p className="font-18">
                                        Design your supply chain and product portfolio with your most loyal customers at the center.
                                    </p>
                                </div>
                                <div className="cap-info">
                                    <h3 className="text-dark ">
                                        Merchant Reimagined                                    </h3>
                                    <p className="font-18">
                                        The role “retail merchant” is reinvented through automation to provide predictive insights
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 offset-md-2 orange-top orange-left orange-bottom"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;