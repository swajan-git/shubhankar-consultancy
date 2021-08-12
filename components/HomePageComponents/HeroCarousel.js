import { Carousel } from "react-bootstrap";


const HeroCarousel = () => {
    const data = [
        {
            video: `https://firebasestorage.googleapis.com/v0/b/shubhankar-consulting.appspot.com/o/videos%2F1)%20Holistic%20Value.mp4?alt=media&token=ad9b3c17-8591-413f-a2d5-1e72e15d681e`,
        },
        {
            video: `https://firebasestorage.googleapis.com/v0/b/shubhankar-consulting.appspot.com/o/videos%2F2)%20AI%20and%20the%20cloud.mp4?alt=media&token=5b51b3fc-e971-4c61-a990-bb2e82c2f2b4`
        },
        {
            video: `https://firebasestorage.googleapis.com/v0/b/shubhankar-consulting.appspot.com/o/videos%2F3)%20Business%20Tomorrow%20.mp4?alt=media&token=43b99d46-8385-4514-b858-45b3482bc85f`
        },
        {
            video: `https://firebasestorage.googleapis.com/v0/b/shubhankar-consulting.appspot.com/o/videos%2F4)%20Life%20Redesigned.mp4?alt=media&token=c350ee43-e575-4a7f-8d57-ba31a7ab5ee9`
        }
    ]
    return (
        <>
            <section className="hero-carousel">
                <Carousel controls={false} slide interval="3000" >
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

