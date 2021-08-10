import { data } from "jquery";

const FeaturedClients = () => {
    return (
        <>
            <section className="featured-clients py-5">
                <div className="container">
                    <div className="section-title mb-4">
                        <h1 className="font-weight-900">
                            Featured Clients
                        </h1>

                    </div>
                    <div className="row d-flex align-items-center">
                        <div className="col-md-3 ">
                            <div className="p text-center">
                                <img src="/img/home/featured-clients/1.png" alt="undp" className="img-fluid" />
                            </div>
                        </div>
                        {/* <FeaturedCompany img="/img/home/featured-clients/1.png" name="undp" /> */}
                        <FeaturedCompany img="/img/home/featured-clients/2.png" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/3.png" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/4.png" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/5.png" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/6.png" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/7.jpeg" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/8.png" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/9.png" name="undp" />
                        <FeaturedCompany img="/img/home/featured-clients/10.png" name="undp" />
                        <div className="col-md-3 ">
                            <div className="p-3 text-center">
                                <img src="/img/home/featured-clients/11.svg" alt="undp" className="img-fluid" />
                            </div>
                        </div>
                        {/* <FeaturedCompany img="/img/home/featured-clients/11.svg" name="undp" /> */}
                        <FeaturedCompany img="/img/home/featured-clients/12.png" name="undp" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeaturedClients;

const FeaturedCompany = ({ img, name }) => {
    return (
        <>
            <div className="col-md-3 ">
                <div className="px-5 py-4 text-center">
                    <img src={img} alt={name} className="img-fluid" />
                </div>
            </div>
        </>
    )
}