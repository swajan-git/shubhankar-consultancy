import React from 'react';

const ServiceCard = ({ col, data }) => {
    return (
        <>
            <div className={`my-4 px-4 col-md-${col}`}>
                <div className="each-sector py-5 px-4">
                    <h3 className="title text-primary font-weight-bold mb-4">{data.title} </h3>
                    <p>
                        {data.text}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;