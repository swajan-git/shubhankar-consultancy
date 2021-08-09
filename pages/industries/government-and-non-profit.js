import SEOLayout from "../../components/shared/SEOLayout";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Government & Non-Profit | Industries" />
            <main className="gov-ngo">
                <section className="bg-section">
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-md-3 large-top-mar pt-5 orange-top orange-right">

                            </div>
                            <div className="col-md-6 text-white pb-5 large-top-mar ">
                                <h1 className="display-4 mb-5 font-weight-900 ">
                                    Government and <br /> Non-Profit <span className="orangered-dot">.</span>
                                </h1>

                                <p className="font-18">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa a quos placeat officia deserunt necessitatibus dignissimos modi exercitationem fuga veniam ratione non, totam nisi veritatis, officiis adipisci? Magni, assumenda? Nulla itaque, minima quae iure eos, quia odit officiis consequuntur nesciunt ipsum voluptas voluptate.
                                </p>
                                <p className="font-18">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet vero voluptatum saepe illo velit iure non impedit est? Illo error maxime nostrum sed explicabo distinctio id voluptate nesciunt, dolores, odio aspernatur tenetur laborum reprehenderit perspiciatis.
                                </p>
                            </div>
                            <div className="col-md-3 bg-transparent-blue d-flex align-items-center">
                                <div className="p-5 m-4">
                                    <img src="/img/industries/govt-ngo/govt.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 orange-right">

                            </div>
                            <div className="col-md-6 pt-5">
                                <h3 className="font-36 mb-5 text-dark font-weight-900">
                                    Capabilities
                                </h3>
                                <div className="pl-md-5">
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Program Development
                                        </h3>
                                        <p className="font-18">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut at veniam alias saepe, sit necessitatibus iste, sequi illum numquam quam vitae!
                                        </p>
                                    </div>
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Budgeting
                                        </h3>
                                        <p className="font-18">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut at veniam alias saepe, sit necessitatibus iste, sequi illum numquam quam vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 bg-magenta"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 orange-right orange-bottom"></div>
                            <div className="col-md-6">
                                <div className="pl-md-5">
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Employee Strategizing
                                        </h3>
                                        <p className="font-18">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut at veniam alias saepe, sit necessitatibus iste, sequi illum numquam quam vitae!
                                        </p>
                                    </div>
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Negotiating
                                        </h3>
                                        <p className="font-18">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut at veniam alias saepe, sit necessitatibus iste, sequi illum numquam quam vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 "></div>
                            <div className="col-md-6">
                                <div className="pl-md-5">
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Negotiating
                                        </h3>
                                        <p className="font-18">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet aut at veniam alias saepe, sit necessitatibus iste, sequi illum numquam quam vitae!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default IndustriesPage;