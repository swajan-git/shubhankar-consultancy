import { FaFacebookF, FaLinkedinIn, FaTwitter, FaEnvelope,FaLink } from "react-icons/fa";
import Link from "next/link"
import { useEffect, useState } from "react";
import { LinkedinShareButton, LinkedinIcon, TwitterShareButton, FacebookShareButton, EmailShareButton } from "react-share";
import { siteUrl } from "../../shared/data";
import {MdContentCopy} from "react-icons/md";

const ModernPostCard = ({ col, blog, type }) => {
    const [fImg, setFImg] = useState(null);
    useEffect(() => {
        if (blog) {
            setFImg(blog.featuredImage)
        }
    }, [blog])
    const insightLink = siteUrl + type + blog.slug
    return (
        <>
            {blog && <div className={`mb-5 col-md-${col ? col : 4}`}>
                <div className="modern-post-card">
                    <div className="post-header">
                        <div className="left-bar py-4 px-2 bg-dark text-white text-center">
                            <h3 className="font-bolder mb-0 text-white">15</h3>
                            <p>OCT</p>
                            <div className="icons text-center w-75">
                            
                                <div className="icon">
                                    <LinkedinShareButton title="Swajan" url={insightLink}>
                                        <FaLinkedinIn />
                                    </LinkedinShareButton>
                                </div>
                                <div className="icon">
                                    <TwitterShareButton title="Swajan" url={insightLink}>
                                        <FaTwitter />
                                    </TwitterShareButton>
                                </div>
                                <div className="icon">
                                    <FacebookShareButton title="Swajan" url={insightLink}>
                                        <FaFacebookF />
                                    </FacebookShareButton>
                                </div>
                                <div className="icon"><Link href="/"><MdContentCopy /></Link></div>
                            </div>
                        </div>
                        <div className="right-bar">
                            <img src={blog.featuredImage} alt="" />
                        </div>
                    </div>
                    <div className="post-content text-center p-4">
                        <p className="font-bolder mt-3">{blog.subCategory} </p>
                        <Link href={`/${type}/${blog.slug}`}><a><h4 className="font-bold h5">{blog.title} </h4></a></Link>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti illo quibusdam ratione possimus veniam hic!</p>
                    </div>
                </div>
            </div>}
            {blog && <style jsx>
                {`
                .right-bar {
                    background: url(${blog.featuredImage});
                }
                .modern-post-card:hover .right-bar {
                    background: linear-gradient(0deg, rgba(1, 1, 2, 0.5), #4687974d), url(${fImg});
                    background-size:cover
                }
                `}
            </style>}
        </>
    );
};

export default ModernPostCard;