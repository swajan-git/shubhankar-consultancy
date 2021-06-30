import React from 'react';

const ServiceCard = ({ col, data }) => {
    return (
        <>
            <div className={`mb-4 col-md-${col}`}>
                <div className="service-card p-4">
                    <h3 className="title text-primary font-weight-bold">Intelligent Finance</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, magni reprehenderit! Voluptatem?
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;