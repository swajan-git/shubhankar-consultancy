import { useState } from "react";

const ServicePageScroll = () => {
    const [activeSection, setActiveSection] = useState(1);

    return (
        <>
            <section className="bg-gray d-none d-md-block service-page-scroll">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 1 && "active"}`}>
                                <a onClick={() => setActiveSection(1)} href="#bpo" className={`service-section-scroll  ${activeSection == 1 && "active"}`}>BPO Services {activeSection == 1 && "ac"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 2 && "active"}`}>
                                <a onClick={() => setActiveSection(2)} href="#bpo" className={`service-section-scroll  ${activeSection == 2 && "active"}`}>BPO Services {activeSection == 2 && "ac"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 3 && "active"}`}>
                                <a onClick={() => setActiveSection(3)} href="#bpo" className={`service-section-scroll  ${activeSection == 3 && "active"}`}>BPO Services {activeSection == 3 && "ac"} </a>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className={`scroll-item w-75 ${activeSection == 4 && "active"}`}>
                                <a onClick={() => setActiveSection(4)} href="#bpo" className={`service-section-scroll  ${activeSection == 4 && "active"}`}>BPO Services {activeSection == 4 && "ac"} </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePageScroll;