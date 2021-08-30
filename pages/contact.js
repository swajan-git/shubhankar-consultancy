import { useForm } from "react-hook-form";
import HorizontalLine from "../components/shared/HorizontalLine";
import SEOLayout from "../components/shared/SEOLayout";
import { messagesCollectionRef } from "../shared/firebase/fire-app";


const PageContact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onFormSubmit = (data, e) => {
        data.sentAt = new Date();
        messagesCollectionRef.add(data).then(() => {
            e.target.reset()
            alert("Thank you for your information. I'll get back to you soon!");
        })
    }
    return (
        <>
            <SEOLayout title="Contact | Shubhankar Consulting" />
            <section className="contact-form py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold text-dark">CONTACT US</h2>
                            <HorizontalLine className=""/>
                            <p className="mt-4 font-18">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, unde error, obcaecati eius ad minima eveniet consequatur harum dolorum necessitatibus suscipit explicabo.
                            </p>
                            <div className="pr-5">
                                <div className="pr-5">
                                    {/* <img src={rafeulImg} alt="rafeul-hasan" className="img-fluid pr-5" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit(onFormSubmit)}>
                                <ul>
                                    <li>
                                        <label for="name"><span>Name <span className="required-star">*</span></span></label>
                                        <input {...register("name", { required: true })} type="text" id="name" name="name" />
                                    </li>
                                    <li>
                                        <label for="mail"><span>Email <span className="required-star">*</span></span></label>
                                        <input {...register("email", { required: true })} type="email" id="mail" name="email" />
                                    </li>
                                    <li>
                                        <label for="msg"><span>Message</span></label>
                                        <textarea {...register("message", { required: true })} rows="4" cols="50"></textarea>
                                    </li>
                                    <li>
                                        <input type="submit" />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PageContact;