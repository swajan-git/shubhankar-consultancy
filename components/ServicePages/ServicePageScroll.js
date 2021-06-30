import { useState } from "react";

const ServicePageScroll = ({one, two, three, four}) => {
    const [activeSection, setActiveSection] = useState(1);

    return (
        <>
            <section className="bg-gray d-none d-md-block service-page-scroll">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 1 && "active"}`}>
                                <a onClick={() => setActiveSection(1)} href="#intro" className={`service-section-scroll  ${activeSection == 1 && "active"}`}>{one? one : "Intro"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 2 && "active"}`}>
                                <a onClick={() => setActiveSection(2)} href="#two" className={`service-section-scroll  ${activeSection == 2 && "active"}`}>{two ? two : "Two"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 3 && "active"}`}>
                                <a onClick={() => setActiveSection(3)} href="#three" className={`service-section-scroll  ${activeSection == 3 && "active"}`}>{three ? three: "Three"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 4 && "active"}`}>
                                <a onClick={() => setActiveSection(4)} href="#four" className={`service-section-scroll  ${activeSection == 4 && "active"}`}>{four ? four : "Four"}  </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePageScroll;