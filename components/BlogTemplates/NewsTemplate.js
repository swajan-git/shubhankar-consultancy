import { siteLink } from "../../shared/data";
import ContentAuthors from "./ContentAuthors"
import RelatedTopics from "./RelatedTopics"
import PostSocialShare from "./SocialShare";
import SocialSidebarSidebar from "./SocialSidebarSidebar";

const NewsTemplate = ({ blog, type, categories }) => {
    return (
        <>
             <main className="gray-bg pb-5 pt-4">
                <section className="content-hero pb-4">
                    <div className="container">
                        <div className="px-0 px-md-5">
                            <h4 className="text-blue font-weight-bold">Newsroom</h4>
                            <h1 className="page-title">{blog.title} </h1>
                            <p className="font-weight-bold mt-3 mb-0">APRIL 8, 2021</p>
                        </div>
                    </div>
                </section>
                <article className="bg-white">
                    <div className="container bg-white ">
                        <div className="p-0 p-md-5">
                            <div className="row">
                                <div className="col-md-8">
                                    {blog.brief && <div className="doc-content ck-content" dangerouslySetInnerHTML={{ __html: blog.brief }} ></div>}
                                    {blog.brief && <hr className="hr-black mb-4" /> }
                                    {blog.featuredImage&& <img src={blog.featuredImage} alt="" className="img-fluid mb-4" />}                                    {/* <img src={blog.featuredImage} alt="" className="img-fluid mb-5" /> */}
                                    <div className="doc-content ck-content" dangerouslySetInnerHTML={{ __html: blog.content }} ></div>
                                    <PostSocialShare docLink="/" className="mt-5" link={siteLink + "blog/" + blog.slug} />
                                </div>
                                <div className="col-md-4">
                                <SocialSidebarSidebar docLink="/" className="mb-4" link={siteLink + "blog/" + blog.slug} />
                                    {blog.writers && <div className="w-100  gray-bg py-4 px-4 ">
                                        <h4 className="font-weight-bold mb-4">About the <br /> Authors</h4>
                                        <ContentAuthors authorIds={blog.writers} />
                                    </div>}
                                    <div className="w-100 mt-5 pt-4">
                                        <h4 className="font-weight- mb-4">MORE ON THIS TOPIC</h4>
                                        <RelatedTopics blogs={[blog, blog, blog]} />
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

export default NewsTemplate;