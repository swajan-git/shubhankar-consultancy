import SEOLayout from "../../components/shared/SEOLayout";
import { utilitySegments } from "../../shared/data/industry-data/utilitiesData";
import { SupplyCard } from "../services/supply-chain-management";


const IndustriesPage = () => {
    return (
        <>
            <SEOLayout title="Utilities | Industries" />
            <main className="utilities">
                <section className="bg-section ">
                    <div className="container-fluid">
                        <div className="row pt-md-5">
                            <div className="col-md-6 mt-md-5 pb-4 pt-4 offset-md-3 bg-white">
                                <h1 className="display-4 font-dark mt-md-5 font-weight-900 pb-3 ">
                                    Utilities <span className="orangered-dot">.</span>
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 orange-top orange-right "></div>
                            <div className="col-md-6 bg-white pt-4 pr-md-5">
                                <h3 className="font-36  mb-3 font-weight-900">
                                    Energy Transformation
                                </h3>
                                <p className="mt-4 ">
                                    As we get closer to net zero, utilities and energy service providers are stepping up to play a bigger role in the electrical era.                                </p>
                                <p className="mt-4 ">
                                    This shift entails embracing change and incorporating digital and sustainability into an organization's DNA in order to reinvent the business, as well as forging new alliances and collaborating across industries in order to meet the changing demands of citizens, employees, investors, and other stakeholders.
                                </p>
                                <p className="mt-4 ">
                                    We empower our clients to build sustainable businesses capable of achieving those expectations as a leading provider of consulting, digital transformation, and managed services to electric, gas, and water utilities throughout the world.
                                </p>


                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 bg-white orange-right"></div>
                            <div className="col-md-6 bg-white">
                                <p className="mt-4 ">
                                    Our industry professionals work with our ecosystem of partners to help our clients uncover cost-cutting possibilities and safely transition operations while offering sustainable, consistent energy experiences.
                                </p>
                                <p className="mt-3 ">
                                    We assist utilities across the value chain in taking control of the energy transition and driving good change for their businesses, society, and the environment.
                                </p>
                            </div>
                        </div>
                        <div className="row capabilities">
                            <div className="col-md-3 orange-bottom bg-white"></div>
                            <div className="col-md-1 orange-bottom bg-white orange-top orange-right"></div>
                            <div className="col-md-7 bg-white">
                                <h3 className="py-4 mt-5">Industry segments we serve</h3>
                                <div className="row">
                                    <div className="col-md-4">
                                        <SupplyCard data={utilitySegments[0]} />
                                    </div>
                                    <div className="col-md-4">
                                        <SupplyCard data={utilitySegments[1]} />
                                    </div>
                                    <div className="col-md-4">
                                        <SupplyCard data={utilitySegments[0]} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1 bg-white"></div>
                        </div>
                        <div className="row pb-4 bg-white pt-5 capabilities">
                            <div className="col-md-3 bg-white"></div>
                            <div className="col-md-4">
                                <h3 className="py-4">Capabilities</h3>
                                <p className="font-18 mt-4 mb-5">
                                    Full range of services in Strategy, Consulting, Operations and Technology that help companies transform the way the world works and lives.                                 </p>
                            </div>
                            <div className="offset-md-2 col-md-3 orange-top orange-left orange-ottom"></div>
                        </div>
                        <div className="row mar-neg">
                            <div className="col-md-4 offset-md-3">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <UtilCard data={{ title: `Strategy and Consulting` }} />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <UtilCard data={{ title: `CFO and Enterprise Value` }} />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <UtilCard data={{ title: `Security` }} />
                                    </div>

                                </div>
                            </div>
                            <div className="offset-md-2 col-md-3 orange-bottom orange-left "></div>

                        </div>
                        <div className="row py-5"></div>
                    </div>

                </section>

            </main>
        </>
    );
};

export default IndustriesPage;


export const UtilCard = ({ data }) => {
    return (
        <>
            <div className="util-card py-4 px-4">
                <h5 className="font-bold mb-0">{data.title}</h5>
                {/* <p className="mt-3">{data.text} </p> */}
            </div>
        </>
    )
}