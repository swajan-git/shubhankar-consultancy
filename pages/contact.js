import { useForm } from "react-hook-form";
import HorizontalLine from "../components/shared/HorizontalLine";
import SEOLayout from "../components/shared/SEOLayout";
import { messagesCollectionRef } from "../shared/firebase/fire-app";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import {FcGoogle} from "react-icons/fc"


import { send } from "emailjs-com"

const PageContact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onFormSubmit = (data, e) => {
        data.sentAt = new Date();
        data.reply_to = 'contact@swajan.io'
        // messagesCollectionRef.add(data).then(() => {
        //     e.target.reset()
        //     alert("Thank you for your information. I'll get back to you soon!");
        // })
        send("service_rbkjp4p", "template_22hvwp9", data, "user_4EXHbjjS2plUdlNXuEXAu").then((res) => {
            alert("Success! " + res.text);
        })
    }
    return (
        <>
            <SEOLayout title="Contact | Shubhankar Consulting" activeNav="contact" />
            <main>
                <section className="py-5 contact-hero">
                    <div className="py-5 text-center">
                        <h1 className="display-4 text-white font-weight-900 mb-0">
                            CONTACT US <span className="orangered-dot">.</span>
                        </h1>
                    </div>
                </section>
                <section className="contact-form py-5" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="font-weight-bold text-dark">CONTACT US</h2>
                                <HorizontalLine className="" />
                                <p className="mt-4 font-18 pr-md-5">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, unde error, obcaecati eius ad minima eveniet consequatur harum dolorum necessitatibus suscipit explicabo.
                                </p>
                                <div className="social-icons py-5">
                                    <div className="tutor-contact-icon-container linkedIn" >
                                        <div className="tutor-contact-icons"><FaLinkedinIn /></div>
                                    </div>
                                    {/* <div className="tutor-contact-icon-container twitter" >
                                        <div className="tutor-contact-icons"><FaTwitter /></div>
                                    </div> */}
                                    <div className="tutor-contact-icon-container facebook" >
                                        <div className="tutor-contact-icons"><FaFacebookF /></div>
                                    </div>
                                    <div className="tutor-contact-icon-container google" >
                                        <div className="tutor-contact-icons"><FcGoogle /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <form onSubmit={handleSubmit(onFormSubmit)}>
                                    <ul>
                                        <li>
                                            <label for="name"><span>Name <span className="required-star">*</span></span></label>
                                            <input {...register("name", { required: true })} type="text" id="name" name="name" placeholder="Your Name" />
                                        </li>
                                        <li>
                                            <label for="mail"><span>Email <span className="required-star">*</span></span></label>
                                            <input {...register("email", { required: true })} type="email" id="mail" name="email" placeholder="e.g. name@domain.com" />
                                        </li>
                                        <li>
                                            <label for="mail"><span>Phone <span className="required-star">*</span></span></label>
                                            <input {...register("phone", { required: true })} type="tel" id="phone" name="phone" placeholder="+880 1700 000000" />
                                        </li>
                                        <li>
                                            <label for="msg"><span>Message</span></label>
                                            <textarea {...register("message", { required: true })} rows="4" cols="50" placeholder="Your message ..." ></textarea>
                                        </li>
                                        <li>
                                            <button type="submit" className="btn mt-4 py-4 btn-block btn-dark">SEND NOW</button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PageContact;