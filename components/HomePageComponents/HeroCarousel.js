import { Carousel } from "react-bootstrap";


const HeroCarousel = () => {
    const data = [
        {
            video: `https://firebasestorage.googleapis.com/v0/b/hola-sjn.appspot.com/o/videos%2F1)%20Holistic%20Value.mp4?alt=media&token=8dfd427b-0bfb-4e94-9ce0-73d37e2f80d1`,
        },
        {
            video: `https://firebasestorage.googleapis.com/v0/b/hola-sjn.appspot.com/o/videos%2F2)%20AI%20and%20the%20cloud.mp4?alt=media&token=324a3df6-5c34-4d1c-ab70-edb6c576b22d`
        },
        {
            video: `https://firebasestorage.googleapis.com/v0/b/copy-now.appspot.com/o/videos%2F3)%20Business%20Tomorrow%20.mp4?alt=media&token=ec9755d3-e0ff-490c-9f26-4c23d7ac28b6`
        },
        {
            video: `https://firebasestorage.googleapis.com/v0/b/creative-agency-live.appspot.com/o/videos%2F4)%20Life%20Redesigned.mp4?alt=media&token=233e576b-4ac2-426d-8022-8cb3d2ee4930`
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

