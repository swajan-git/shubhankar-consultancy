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
                                In many nations around the world, the relationship between the government and the charity sector is at a critical crossroads. The rise in government support for charities, particularly through acquisition of service contracts, has increased rivalry among organizations and fueled calls for greater accountability and outcome evaluation, forcing the government to enact more programmatic and administrative control.                               
                                 </p>

                                <p className="font-18">
                                Through advice on fundraising, communications, digital marketing, executive search, and other topics, we assist government and nonprofit organizations achieve their objectives. We provide a wide range of services, all of which are aimed to increase your organization's efficacy and efficiency, and help you succeed.
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
                                        We help you design and implement programs using a proper roadmap and project goals. 
                                        </p>
                                    </div>
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Budgeting
                                        </h3>
                                        <p className="font-18">
                                        We help you obtain your financial goals through proper budgeting, resource allocation, and resource optimization.
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
                                        By laying out clear human resource roles and responsibilities, we will assist you in grooming an efficient and effective pool of strong employees.                                         </p>
                                    </div>
                                    <div className="cap-info">
                                        <h3 className="text-dark ">
                                            Negotiating
                                        </h3>
                                        <p className="font-18">
                                        We broadly explain the trips and techniques to negotiate with the government and other organizations to help you win the largest share of the pie. 
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
                                        Partnering with Government 
                                        </h3>
                                        <p className="font-18">
                                        Learn how to put forward compelling proposals in front of the government for the betterment of both your organization and the country.
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