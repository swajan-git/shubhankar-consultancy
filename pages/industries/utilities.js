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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, impedit. Assumenda hic inventore dolore ratione?                                </p>
                                <p className="mt-4 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, temporibus tempore corrupti odio culpa nulla rerum assumenda ducimus, repellat ipsam ad mollitia accusantium eos unde quae qui?
                                </p>
                                <p className="mt-4 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magni odio doloremque quibusdam corporis commodi vero, suscipit cum pariatur! Animi doloribus repellendus, recusandae odit quae obcaecati perspiciatis inventore est odio, reprehenderit qui sit, eaque rerum omnis.
                                </p>
                                <p className="mt-4 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident totam modi corporis voluptate recusandae. Dolores nesciunt qui nostrum nisi hic omnis possimus quae nobis ad. Animi rerum mollitia itaque ducimus?
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 bg-white orange-right"></div>
                            <div className="col-md-6 bg-white">
                                <p className="mt-3 ">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos voluptas iusto delectus. Tempora est optio voluptas possimus voluptates provident? Saepe neque corrupti, dolor assumenda, fugiat veritatis pariatur necessitatibus nemo est sequi vero aspernatur, magnam hic architecto!                                </p>
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
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque quidem, dolor iusto rerum facilis in, eveniet, sequi tempore eos aperiam officiis reiciendis?
                                </p>
                            </div>
                            <div className="offset-md-2 col-md-3 orange-top orange-left orange-ottom"></div>
                        </div>
                        <div className="row mar-neg">
                            <div className="col-md-4 offset-md-3">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <UtilCard data={{title:`Strategy and Consulting`}} />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <UtilCard data={{title:`CFO and Enterprise Value`}} />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <UtilCard data={{title:`Security`}} />
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