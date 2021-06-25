
const ServiceSectionLayout = ({ children, title, bg, id }) => {
    return (
        <>
            <section className={`service-intro py-5 bg-${bg? bg: "white"}`} id={id}>
                <div className="container">
                    {/* intro heading */}
                    <div className="row mb-4">
                        <div className="col-md-8">
                            <h1 className="font-44 font-weight-900">
                                {title}
                            </h1>
                        </div>
                    </div>
                    {children}
                </div>
            </section>
        </>
    );
};

export default ServiceSectionLayout;