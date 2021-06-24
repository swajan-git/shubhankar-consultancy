import React, { useState } from 'react';
import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';

const BusinessProcessOutsourcing = () => {
    const [activeSection, setActiveSection] = useState(1);
    return (
        <>
            <section className="bg-white py-4">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h1 className="page-title">Business Process Outsourcing (BPO)</h1>
                            <p className="font-22 mt-4 text-secondary">Traditional BPO is dead. Yet the need to reinvent business operations is more paramount than ever.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://www.accenture.com/t20190704T110400Z__w__/us-en/_acnmedia/Accenture/Redesign-Assets/DotCom/Images/Global/Hero/6/Accenture-BPO-Lego-487x337.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
           <ServicePageScroll/>
        </>
    );
};

export default BusinessProcessOutsourcing;