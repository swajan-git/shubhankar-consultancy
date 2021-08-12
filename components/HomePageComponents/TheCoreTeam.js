import React from 'react';

const TheCoreTeam = () => {
    const ceoImg = `https://firebasestorage.googleapis.com/v0/b/shubhankar-consulting.appspot.com/o/images%2Fdownload.jpeg?alt=media&token=6af63e57-94f2-4964-b730-8d69094a174f`
    return (
        <>
            <section className="py-5 bg-dark core-team">
                <div className="container pt-5">
                    <div className="row d-flex align-items-center ceo">
                        <div className="col-md-4 offset-md-2">
                            <div className=" px-5">
                                <img src={ceoImg} alt="" className="img-fluid w-100" />
                            </div>
                        </div>
                        <div className="col-md-5 pl-md-4">
                            <h3 className="font-36 text-white font-weight-900">
                                Shubhankar Shil
                            </h3>
                            <h3 className="font-36 text-white font-weight-600">
                                CEO
                            </h3>
                            <div className="ceo-text">
                                <p className="mb-0 pl-4 text-white font-18 py-4">
                                    Shubhankar Shil. Shubhankar is the founder of the firm and heads the consulting team. The firm has a unique way of life and character which, ..
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TheCoreTeam;