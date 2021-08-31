import { siteLink } from "../../shared/data";
import ContentAuthors from "./ContentAuthors"
import RelatedTopics from "./RelatedTopics"
import PostSocialShare from "./SocialShare";
import moment from 'moment';
import { useCollectionData } from "react-firebase-hooks/firestore";


const TemplateSingle = ({ blog, type, relatedPosts }) => {
    const startTime = new Date(blog.createdAt.seconds * 1000);
    var check = moment(startTime);
    var month = check.format('MMMM');
    var day = check.format('D');
    var year = check.format('YYYY');
    return (
        <>
            <main className="gray-bg pb-5 pt-4">
                <section className="content-hero pb-4">
                    <div className="container">
                        <div className="px-0 px-md-5">
                            <p className="text-blue font-weight-bold mb-4"> </p>
                            <p className={" font-weight-bold mb-2 mb-md-4"} ><span className="text-blue">{blog.category}</span>&nbsp; &nbsp; {` > `} &nbsp; &nbsp; <u> {blog.subCategory}</u> </p>
                            <h1 className="page-title">{blog.title} </h1>
                            <p className="font-weight-bold mt-3 mb-0">{`${month} ${day}, ${year}`} </p>
                        </div>
                    </div>
                </section>
                <article className="insight">
                    <div className="container bg-white ">
                        <div className="p-0 p-md-5">
                            <div className="row">
                                <div className="col-md-8 pr-md-5">
                                    {blog.brief && <div className="doc-content ck-content" dangerouslySetInnerHTML={{ __html: blog.brief }} ></div>}
                                    {blog.brief && <hr className="hr-black mb-4" /> }
                                    <PostSocialShare docLink="/" className="mb-4" link={siteLink + "blog/" + blog.slug} />
                                    {blog.featuredImage&& <img src={blog.featuredImage} alt="" className="blog-featured-img mb-4" />}                                    {/* <img src={blog.featuredImage} alt="" className="img-fluid mb-5" /> */}
                                    <div className="doc-content ck-content" dangerouslySetInnerHTML={{ __html: blog.content }} ></div>
                                    <PostSocialShare docLink="/" className="mt-5" link={siteLink + "blog/" + blog.slug} />
                                </div>
                                <div className="col-md-4">
                                    {blog.writers && <div className="w-100  gray-bg py-4 px-4 ">
                                        <h4 className="font-weight-bold mb-4">About the <br /> Authors</h4>
                                        <ContentAuthors authorIds={blog.writers} />
                                    </div>}
                                    <div className="w-100 mt-5 pt-5">
                                        <h4 className="font-weight- mb-4">MORE ON THIS TOPIC</h4>
                                        <RelatedTopics blogs={relatedPosts} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
};

export default TemplateSingle;