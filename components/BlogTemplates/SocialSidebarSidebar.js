import { LinkedinShareButton, LinkedinIcon, TwitterShareButton, FacebookShareButton, EmailShareButton } from "react-share";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SocialSidebarSidebar = ({link, className, docLink}) => {
    return (
        <>
            <div className={"gray-bg w-100 p-4 round-6 " + className}>
                    <h5 className="font-weight-bold mr-4 mb-3">SHARE</h5>
                    <div className="mb-4">
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
                            <div className="tutor-contact-icons"><FaLinkedinIn /></div>
                        </div></EmailShareButton>
                    </div>
                    <div>
                        {docLink && <a href={docLink} className="btn btn-primary btn-lg" target="_blank" rel="noopener noreferrer">Read full document</a>}
                    </div>
            </div>
        </>
    );
};

export default SocialSidebarSidebar;