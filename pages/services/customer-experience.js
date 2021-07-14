import OrangeHorizontalLine from "../../components/shared/OrangeHorizontalLine"


const ServicePage = () => {

    return (
        <>
            <main className="customer-experience">
                <section className="exp-hero py-5">

                </section>
                <section className="text-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-7 py-5 px-4 bg-transparent-dark text-white offset-md-5">
                                <h1 className="display-4 text-white font-weight-900">
                                    Customer Experience <span className="orange-dot">.</span>
                                </h1>
                                <p className="font-20 mt-2 mb-0">We Don't simply fulfill Contracts. We Deliver Experiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6 offset-md-2">
                                <p className="font-22 font-bold">
                                    In today’s Dynamic world, exemplary brands make promises to all
                                    stakeholders. The Fulfillment of these Purpose Driven Promises are felt through Experiences.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-4">
                        <div className="row">
                            <div className="col-md-6 box-border">
                                {/* <p>
                                    Brands are no longer formed through advertising, but through experiences, thanks to the tremendous convergence of marketing and technology in today's economy. To define and deliver new realities, we combine profound human and commercial insights with technological possibilities. Experiential learning opportunities that make life easier, healthier, safer, more productive, and enjoyable.
                                </p> */}
                            </div>
                            <div className="col-md-5 pb-5 pl-0 pl-md-5">
                                <p>
                                    Brands are no longer formed through advertising, but through experiences, thanks to the tremendous convergence of marketing and technology in today's economy. To define and deliver new realities, we combine profound human and commercial insights with technological possibilities. Experiential learning opportunities that make life easier, healthier, safer, more productive, and enjoyable.
                                </p>
                                <p>
                                    To unlock growth, companies need a new partner—one who can rethink the front office across products, marketing operations, sales and commerce, and customer service—one who is part business advisor, part creative agency, and part technology powerhouse.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured-exp py-5">
                    <div className="container">
                        <div className="row">
                            <div className="text-white col-md-8 offset-md-2">
                                <h1 className="font-bold">
                                    At Shubhankar Consulting we deliver value through <span className="text-underline">Experiences</span> <span className="orange-dot">.</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 we-think">
                    <div className="container">
                        <div className="row">
                            <div className="text-white col-md-6 offset-md-2">
                                <h3 className="font-36 mb-3 font-weight-900">
                                    What we think
                                </h3>
                                <OrangeHorizontalLine />
                                <p className="font-20">Provocative ideas, revolutionary insights, and measurable results
                                    Hear how companies have changed the way they work, engage, and provide value to customers, workers, and communities.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mt-5">
                        <div className="row">
                            <div className="col-md-2 box-one"></div>
                            <div className="col-md-3 d-flex align-items-center  text-dark bg-white py-5  pl-4">
                                <div>
                                <h3 className="font-26 mb-3 font-weight-900">
                                    What we think
                                </h3>
                                <div className="text-box py-3">
                                    <p>The new drivers for "Reimagined" <br/> Customers</p>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-4  text-dark bg-white py-5  pl-5">
                                <h3 className="font-26 mb-3 font-weight-900">
                                    Experience Reimagination
                                </h3>
                                <div className="text-box py-2">
                                    <p>Reforming the <br/> Health Customer <br/> Experience</p>
                                </div>
                                <div className="text-box py-2">
                                    <p>Reinventing the <br/> Banking Customer <br/> Experience</p>
                                </div>
                                <div className="text-box py-2">
                                    <p>Reimagining Insurance Value <br/> Proposition and Customer <br/> Experience</p>
                                </div>
                            </div>
                            <div className="col-md-2 box-two"></div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ServicePage;