import { LinkedinShareButton, LinkedinIcon, TwitterShareButton, FacebookShareButton, EmailShareButton } from "react-share";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";


const PostSocialShare = ({link, className, docLink}) => {
    return (
        <>

            <div className={"gray-bg w-100 p-4 round-6 "+ className}>
                <div className="d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <h5 className="font-weight-bold mr-4 mb-0">SHARE</h5>
                        <div>
                            <LinkedinShareButton title="Swajan" url={link}> <div className="tutor-contact-icon-container" >
                                <div className="tutor-contact-icons"><FaLinkedinIn /></div>
                            </div></LinkedinShareButton>
                            <TwitterShareButton title="Swajan" url={link}> <div className="tutor-contact-icon-container" >
                                <div className="tutor-contact-icons"><FaTwitter /></div>
                            </div></TwitterShareButton>
                            <FacebookShareButton title="Swajan" url={link}> <div className="tutor-contact-icon-container" >
                                <div className="tutor-contact-icons"><FaFacebookF /></div>
                            </div></FacebookShareButton>
                            <EmailShareButton title="Swajan" url={link}> <div className="tutor-contact-icon-container" >
                                <div className="tutor-contact-icons"><FaEnvelope/></div>
                            </div></EmailShareButton>
                        </div>
                    </div>
                    <div>
                        {docLink && <a href={docLink} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Read full document</a> }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostSocialShare;