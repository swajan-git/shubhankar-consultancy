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
                        <button className="btn btn-link">CONTACT US</button>
                    </div>
                    <hr className="hr-white" />
                    <div className="text-center text-white mt-4">
                        <p className="mb-0">&copy; ALL RIGHTS RESERVED | shubhankarconsulting.com</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default SiteFooter;