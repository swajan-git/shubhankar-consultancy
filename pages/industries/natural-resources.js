import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Natural Resources | Shubhankar Consulting" />
            <main className="nature">
                <section className="bg-section">
                    <div className="bg-blue">
                        <div className="py-5"></div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-5 ">
                                    <h1 className="display-4 text-white  mt-md-5 font-weight-900 pb-3 ">
                                        Natural Resources<span className="orangered-dot">.</span>
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
                            <div className="col-md-5 bottom-shadow bg-white pr-md-5 py-5">
                                <h3 className="mb-5 font-weight-900 mr-md-4 pr-md-5">
                                Safe and sustainable operations in a digital world
                                </h3>
                                <p className="font-20 pr-md-5 font-weight-600 text-dark">
                                We can only achieve great things if we perform the difficult things correctly. Success in today's hyper-competitive and rapidly changing global energy sector necessitates a unique blend of strategic thinking, perfect performance, and an innovation mindset. We assist our clients in investing with an eye to environmental, social, and governance (ESG) strategies as climate change and altering consumer preferences redefine the business-social compact.                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-right"></div>
                            <div className="col-md-6 py-5">
                                <h3 className="font-36 text-dark font-weight-900">
                                    Capabilities
                                </h3>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="row capabilities">
                            <div className="col-md-3 "></div>
                            <div className="col-md-1 orange-right orange-top"></div>
                            <div className="col-md-5">
                                <h3 className="my-4">Expand Your Social License</h3>
                                <p>
                                We will work with you to protect and expand your social license to operate in your communities by collaborating with customers and stakeholders. Our experts assist utilities in reducing wildfire risk and natural gas firms in achieving net-zero operations.
                                </p>


                                <h3 className="mb-4 mt-5">Balancing Your Operations</h3>
                                <p>
                                Companies in the energy and natural resources sectors are under enormous pressure to be accountable to investors, authorities, and the general public. You have a once-in-a-generation opportunity to produce revolutionary transformation if you get the balance right. If you get it wrong, you could end up in an existential crisis. You do not have to do it on your own. Allow us to demonstrate how to make great things happen.                                </p>
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