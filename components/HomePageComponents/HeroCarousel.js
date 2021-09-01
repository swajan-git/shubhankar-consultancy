import { Carousel } from "react-bootstrap";
import { videoFive, videoOne, videoThree, videoTwo } from "../../shared/data/videos";


const HeroCarousel = () => {
    const data = [
        {
            video: videoOne
        },
        {
            video: videoTwo
        },
        {
            video: videoThree
        },
        {
            video: videoFive
        }
    ]
    return (
        <>
            <section className="hero-carousel">
                <Carousel pause={false} controls={false} slide interval="3000" >
                    <Carousel.Item>
                        <div className="video-bg py-5 bg-secondary d-flex align-items-center text-white">
                            <video loop muted autoPlay="autoplay" >
                                <source src={data[0].video} type="video/mp4" ></source>
                            </video>
                            <div className="overlay"></div>
                            <div className="container content">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2 text-center">
                                        <h1 className="font-60  mt-md-5 font-weight-900 pb-3 ">
                                            Holistic Value
                                        </h1>
                                        <p className="font-28 font-weight-600 px-5 py-3 bg-white text-dark">
                                            We help you add value in every Facet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="video-bg py-5 bg-secondary d-flex align-items-center text-white">
                            <video loop muted autoPlay="autoplay" >
                                <source src={data[1].video} type="video/mp4" ></source>
                            </video>
                            <div className="overlay"></div>
                            <div className="container content">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2 text-center">
                                        <h1 className="font-60  mt-md-5 font-weight-900 pb-3 ">
                                            AI and the Cloud
                                        </h1>
                                        <p className="font-28 font-weight-600 px-5 py-3 bg-white text-dark">
                                            We help you add value in every Facet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="video-bg py-5 bg-secondary d-flex align-items-center text-white">
                            <video loop muted autoPlay="autoplay" >
                                <source src={data[2].video} type="video/mp4" ></source>
                            </video>
                            <div className="overlay"></div>
                            <div className="container content">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2 text-center">
                                        <h1 className="font-60  mt-md-5 font-weight-900 pb-3 ">
                                            Business Tomorrow
                                        </h1>
                                        <p className="font-28 font-weight-600 px-5 py-3 bg-white text-dark">
                                            We help you add value in every Facet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="video-bg py-5 bg-secondary d-flex align-items-center text-white">
                            <video loop muted autoPlay="autoplay" >
                                <source src={data[3].video} type="video/mp4" ></source>
                            </video>
                            <div className="overlay"></div>
                            <div className="container content">
                                <div className="row">
                                    <div className="col-md-8 offset-md-2 text-center">
                                        <h1 className="font-60  mt-md-5 font-weight-900 pb-3 ">
                                            Life Redesigned
                                        </h1>
                                        <p className="font-28 font-weight-600 px-5 py-3 bg-white text-dark">
                                            We help you add value in every Facet
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>


                </Carousel>

            </section>


        </>
    );
};

export default HeroCarousel;

