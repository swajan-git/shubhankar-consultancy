import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ContentLoader from 'react-content-loader'
import { writersCollectionRef } from "../../shared/firebase/fire-app";
import { useDocumentData } from "react-firebase-hooks/firestore";


const AuthorComponent = ({ authorId, all, sl }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [author, setAuthor] = useState(null);
    const [borderBottom, setBorderBottom] = useState(true)
    // const [author, lo, er] = useDocumentData(writersCollectionRef.doc(authorId), { idField: "id"})

    useEffect(() => {
        if (all & sl) {
            if (all.length == sl) {
                setBorderBottom(false)
            }
        }
    }, [authorId]);
    useEffect(() => {
        writersCollectionRef.doc(authorId).get().then((doc)=>{
            const writerData = doc.data()
            // alert(JSON.stringify(writerData))
            setAuthor(writerData)
            setLoading(false)
        })
    },[])
    console.log(all.length, " : ", sl, " : ", borderBottom)
    return (
        <>
        {loading && <div className="bg-white text-primary">
                <ContentLoader viewBox="0 0 260 130" height={160} width={260}>
                    <circle cx="50" cy="30" r="30" />
                    <rect x="10" y="70" rx="3" ry="3" width="40" height="10" />
                    <rect x="60" y="70" rx="3" ry="3" width="70" height="10" />
                    <rect x="140" y="70" rx="3" ry="3" width="20" height="10" />
                    <rect x="10" y="90" rx="3" ry="3" width="90" height="10" />
                    <rect x="110" y="90" rx="3" ry="3" width="70" height="10" />
                    <rect x="10" y="110" rx="3" ry="3" width="70" height="10" />
                    <rect x="90" y="110" rx="3" ry="3" width="60" height="10" />
                </ContentLoader>
            </div>}
            {/* <h5>Authorid: {authorId} </h5> */}
            {!loading && author && <div className="text-left">
                <h5 className="mb-0">{author.name}</h5>
                <p className="mb-2"><small>{author.description} </small> </p>
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
            </div>}
        </>
    )
}

const ContentAuthors = ({authorIds}) => {
    return (
        <>
            
            {authorIds.map((item, index) => <AuthorComponent authorId={item} all={authorIds} sl={index + 1} />)}
        </>
    );
};

export default ContentAuthors;
