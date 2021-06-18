import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const AuthorComponent = ({ author, all, sl }) => {
    const [borderBottom, setBorderBottom] = useState(true)

    useEffect(() => {
        if (all & sl) {
            if (all.length == sl) {
                setBorderBottom(false)
            }
        }
    }, [author])
    console.log(all.length, " : ", sl, " : ", borderBottom)
    return (
        <>
            <div className="text-left">
                <h5>{author.name}</h5>
                <p className="mb-0"><small>{author.description} </small> </p>
                <div className="py-1">
                    {author.socialLinks.linkedIn &&
                        <a className="tutor-contact-icon-container" href={author.socialLinks.linkedIn} target="_blank" rel="noopener noreferrer">
                            <div className="tutor-contact-icons"><FaLinkedinIn /></div>
                        </a>}
                    {author.socialLinks.twitter &&
                        <a className="tutor-contact-icon-container" href={author.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                            <div className="tutor-contact-icons"><FaTwitter /></div>
                        </a>}
                    {author.socialLinks.fb &&
                        <a className="tutor-contact-icon-container" href={author.socialLinks.fb} target="_blank" rel="noopener noreferrer">
                            <div className="tutor-contact-icons"><FaFacebookF /></div>
                        </a>}
                </div>
                {sl < all.length && <hr />}
            </div>
        </>
    )
}


const authors = [
    {
        id: 1,
        name: "Author Name One",
        description: "Senior Managing Director - Global Lead, Retail",
        socialLinks: {
            fb: "http://fb.com",
            twitter: "http://twitter.com",
            linkedIn: "http://linkedin.com"
        }
    },
    {
        id: 1,
        name: "Author Name One",
        description: "Senior Managing Director - Global Lead, Retail",
        socialLinks: {
            fb: "http://fb.com",
            twitter: "http://twitter.com",
            linkedIn: "http://linkedin.com"
        }
    },
    {
        id: 1,
        name: "Author Name One",
        description: "Senior Managing Director - Global Lead, Retail",
        socialLinks: {
            fb: "http://fb.com",
            twitter: "http://twitter.com",
            linkedIn: "http://linkedin.com"
        }
    },
];

const ContentAuthors = () => {
    return (
        <>
            {authors.map((item, index) => <AuthorComponent author={item} all={authors} sl={index + 1} />)}
        </>
    );
};

export default ContentAuthors;
