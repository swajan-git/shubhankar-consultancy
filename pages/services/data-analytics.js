import { useState } from 'react';
import ServicePageHero from '../../components/ServicePages/ServicePageHero';
import ServicePageScroll from '../../components/ServicePages/ServicePageScroll';
import YouTubeResponsiveEmbed from '../../components/shared/YouTubeResponsiveEmbed';
import { BsArrowRight } from "react-icons/bs"
import ServiceSectionLayout from '../../components/ServicePages/ServiceSectionLayout';
import { randomImg } from '../../shared/data';

const ServicePage = () => {
    const heroTitle = `Lorem ipsum dolor sit amet consectetur.`;
    const heroText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, incidunt, eaque magni necessitatibus repellat distinctio nam porro repellendus iure odit tempore dolorum.`;
    const heroImg = `https://source.unsplash.com/random/800x550`;
    return (
        <>
            <main className="data-analytics">
                <ServicePageHero title={heroTitle} text={heroText} img={heroImg} />
                {/* <ServicePageScroll one="What We Deliver" two="The AI Impact" three="Our Capabilities" four="What We Think" /> */}
                <section className="service-intro py-5" id="one">
                    <div className="container">
                        {/* intro heading */}
                        <div className="row mb-4">
                            <div className="col-md-8">
                                <h1 className="font-44 font-weight-900">
                                    Driving change by unlocking human ingenuity
                                </h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="mb-4 font-18">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet error veritatis deserunt obcaecati suscipit nobis officiis vero, provident praesentium in nulla repellendus soluta id rerum saepe, quos unde iure ipsa aperiam ratione. Reiciendis beatae voluptatum eveniet asperiores placeat necessitatibus!
                                </p>
                                <p className="mb-4 font-18">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, non distinctio, libero ad voluptatum molestias aliquid laboriosam corporis corrupti nobis neque ipsum commodi possimus porro reprehenderit animi sapiente?
                                </p>
                                <p className="mb-4 font-18">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a adipisci aspernatur ipsa voluptatibus, blanditiis dicta. Eum illum aliquam ex.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <YouTubeResponsiveEmbed youTubeId="L7c4wS7T_T8" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 fixed-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="p-5 bg-white">
                                    <blockquote className="pl-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, hic expedita, voluptatibus consequuntur non voluptate necessitatibus explicabo quos reprehenderit, aspernatur obcaecati beatae! Nesciunt, quaerat quia eaque distinctio id voluptatum eveniet reiciendis tempora tempore.
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-light" id="two" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1 className="font-44 mb-4 font-weight-900">
                                    What we deliver
                                </h1>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis in, quas iure est sed non repudiandae beatae reiciendis commodi tempora quod, maiores architecto dicta, totam accusamus.</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="img-card bg-white">
                                    <img src="https://source.unsplash.com/random/600x400" alt="" className="img-fluid " />
                                    <div className="mt-2 p-4">
                                        <h4 className="" className="font-weight-bold">The path to unlocking core business value</h4>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam corporis sed nesciunt necessitatibus delectus beatae iste reprehenderit nobis aliquid ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img-card bg-white">
                                    <img src="https://source.unsplash.com/random/600x400" alt="" className="img-fluid " />
                                    <div className="mt-2 p-4">
                                        <h4 className="" className="font-weight-bold">The path to unlocking core business value</h4>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam corporis sed nesciunt necessitatibus delectus beatae iste reprehenderit nobis aliquid ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="img-card bg-white">
                                    <img src="https://source.unsplash.com/random/600x400" alt="" className="img-fluid " />
                                    <div className="mt-2 p-4">
                                        <h4 className="" className="font-weight-bold">The path to unlocking core business value</h4>
                                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam corporis sed nesciunt necessitatibus delectus beatae iste reprehenderit nobis aliquid ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <style jsx>
                    {`
                    // main.data-analytics fixed-bg{
                    //     background-image: url("https://source.unsplash.com/random/1200x380");
                    //     background-repeat: no-repeat;
                    //     background-attachment: fixed;
                    // }
                    `}
                </style>
                {/* <section className="py-4 bg-gray">
                <div className="container bg-white">
                    <div className="row py-3 d-flex align-items-center">
                        <div className="col-md-3" style={{ borderRight: "4px solid blue" }}>
                            <img src="https://source.unsplash.com/random/800x500" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-9 pl-0 pl-md-4">
                            <h5 className="font-weight-bold">ANOTHER LINK TO REDIRECT TO ANOTHER WEBSITE</h5>
                            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                            <button className="btn btn-link px-0">READ MORE <BsArrowRight /> </button>
                        </div>
                    </div>
                </div>
            </section> */}
                <ServiceSectionLayout title="Client spotlight">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-4 font-18">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet error veritatis deserunt obcaecati suscipit nobis officiis vero, provident praesentium in nulla repellendus soluta id rerum saepe, quos unde iure ipsa aperiam ratione. Reiciendis beatae voluptatum eveniet asperiores placeat necessitatibus!
                            </p>
                            <p className="mb-4 font-18">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, non distinctio, libero ad voluptatum molestias aliquid laboriosam corporis corrupti nobis neque ipsum commodi possimus porro reprehenderit animi sapiente?
                            </p>
                            <p className="mb-4 font-18">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae a adipisci aspernatur ipsa voluptatibus, blanditiis dicta. Eum illum aliquam ex.
                            </p>
                            <button className="btn btn-lg btn-dark mt-5 px-5">READ MORE</button>
                        </div>
                        <div className="col-md-6">
                            <img src={randomImg + "800x700"} alt="" className="img-fluid" />
                        </div>
                    </div>
                </ServiceSectionLayout>
                <section className="py-4 bg-gray">
                    <div className="container bg-white">
                        <div className="row py-3 d-flex align-items-center">
                            <div className="col-md-3" style={{ borderRight: "4px solid blue" }}>
                                <img src="https://source.unsplash.com/random/800x500" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-9 pl-0 pl-md-4">
                                <h5 className="font-weight-bold">ANOTHER LINK TO REDIRECT TO ANOTHER WEBSITE</h5>
                                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                                <button className="btn btn-link px-0">READ MORE <BsArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                </section>
                <ServiceSectionLayout title="The AI impact" id="two">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                    </div>
                </ServiceSectionLayout>
                <ServiceSectionLayout title="Our Capabilities" id="three">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="bg-gray px-4 py-5">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                            </div>
                        </div>
                    </div>
                </ServiceSectionLayout>
               
                <ServiceSectionLayout title="Business functions workforce blog">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="bg-gray px-4 py-4">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                                <button className="btn btn-link px-0 mt-2">READ MORE <BsArrowRight /> </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-gray px-4 py-4">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                                <button className="btn btn-link px-0 mt-2">READ MORE <BsArrowRight /> </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-gray px-4 py-4">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                                <button className="btn btn-link px-0 mt-2">READ MORE <BsArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                </ServiceSectionLayout>
                <ServiceSectionLayout title="Case Studies" id="four" bg="gray">
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="bg-gray px-4 py-4">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                                <button className="btn btn-link px-0 mt-2">READ MORE <BsArrowRight /> </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-gray px-4 py-4">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                                <button className="btn btn-link px-0 mt-2">READ MORE <BsArrowRight /> </button>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="bg-gray px-4 py-4">
                                <h4 className="font-weight-bold">Lorem, ipsum dolor.</h4>
                                <p className="font-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim a quae libero laudantium accusantium voluptates itaque aspernatur non cupiditate, eveniet nihil aliquam.</p>
                                <button className="btn btn-link px-0 mt-2">READ MORE <BsArrowRight /> </button>
                            </div>
                        </div>
                    </div>
                </ServiceSectionLayout>
            </main>
        </>
    );
};

export default ServicePage;