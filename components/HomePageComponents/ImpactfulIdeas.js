import React from 'react';

const ImpactfulIdeas = () => {
    const imgLeaf = "/img/home/leaf.jpeg";
    const imgRack = "/img/home/rack.jpeg";
    const imgWood = "/img/home/wood.jpeg";

    return (
        <>
            <section className="py-5 impactful-ideas">
                <div className="container">
                    <div className="text-center">
                        <h1 className="font-weight-900 mb-4">
                            Impactful Ideas
                        </h1>
                        <p className="font-18">
                            Voicing Change for Holistic Impact
                        </p>
                    </div>
                    <div className="row d-flex align-items-center justify-content-center mt-5">
                        <div className="col-md-7">
                            <div className="row no-gutters">
                                <div className="col-md-4 mb-5">
                                    <div className="idea-card">
                                        <img src={imgRack} alt="" />
                                        <div className="pr-md-3">
                                            <h4 className="font-weight-900 mt-4">
                                                Supply Chain Transformation
                                            </h4>
                                            <p className="mt-3 font-20 font-weight-600">
                                                Discuss how leveraging on new Cloud Technology can create a more agile and intelligent supply chain.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pt-md-5 mt-md-5 mb-5">
                                    <div className="idea-card">
                                        <img src={imgWood} alt="" />
                                        <div className="pr-md-3">
                                            <h4 className="font-weight-900 mt-4">
                                                Reinvention
                                            </h4>
                                            <p className="mt-3 font-20 font-weight-600">
                                                Revamp your business model on the path to sustainability and profitability.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pt-md-5 mt-md-5 mb-5">
                                    <div className="idea-card mt-md-5 pt-md-5">
                                        <img src={imgLeaf} alt="" />
                                        <div className="pr-md-3">
                                            <h4 className="font-weight-900 mt-4">
                                                Delivering on the Promise of a Sustainable Future
                                            </h4>
                                            <p className="mt-3 font-20 font-weight-600">
                                                Learn how to use responsible business to create value, resilience, and good change.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ImpactfulIdeas;