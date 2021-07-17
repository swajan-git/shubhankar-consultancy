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
                                <a onClick={() => setActiveSection(1)} href={`#${one.link}`} className={`service-section-scroll  ${activeSection == 1 && "active"}`}>{one? one.name : "Intro"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 2 && "active"}`}>
                                <a onClick={() => setActiveSection(2)} href={`#${two.link}`} className={`service-section-scroll  ${activeSection == 2 && "active"}`}>{two ? two.name : "Two"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 3 && "active"}`}>
                                <a onClick={() => setActiveSection(3)} href={`#${three.link}`} className={`service-section-scroll  ${activeSection == 3 && "active"}`}>{three ? three.name: "Three"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 4 && "active"}`}>
                                <a onClick={() => setActiveSection(4)} href={`#${four.link}`} className={`service-section-scroll  ${activeSection == 4 && "active"}`}>{four ? four.name : "Four"}  </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePageScroll;