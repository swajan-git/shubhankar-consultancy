import React from 'react';

const SiteFooter = () => {
    return (
        <>
            <footer className="py-5 " style={{backgroundColor: '#051720'}}>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-link">ABOUT US</button>
                        <button className="btn btn-link">CONTACT US</button>
                        <button className="btn btn-link">CAREERS</button>
                        <button className="btn btn-link">LOCATIONS</button>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default SiteFooter;