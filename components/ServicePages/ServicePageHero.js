import {BsDash} from "react-icons/bs";

const ServicePageHero = ({title, text, img}) => {
    return (
        <>
            <section className="bg-white py-5">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6">
                            <h5 className="font-weight-bold mb-3"> <span className="font-26"><BsDash/></span> SERVICE </h5>
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