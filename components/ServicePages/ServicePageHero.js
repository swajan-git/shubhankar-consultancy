import React from 'react';

const ServicePageHero = ({title, text, img}) => {
    return (
        <>
            <section className="bg-white py-4">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h1 className="page-title">{title} </h1>
                            <p className="font-22 mt-4 text-secondary">{text} </p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={img} alt={title} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicePageHero;