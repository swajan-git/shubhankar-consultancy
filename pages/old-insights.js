import { useBlogs } from '../shared/Hooks/useBlogs';
import Link from "next/link"
import RelatedTopics from '../components/BlogTemplates/RelatedTopics';

const insights = () => {
    const { insights } = useBlogs();
    const heroImg = `https://source.unsplash.com/random/800x550`;

    return (
        <>
            <section className="bg-light py-4">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-7">
                            <h1 className="page-title font-44">Read the INSIGHTS </h1>
                            <p className="font-22 mt-4 text-secondary"> </p>
                        </div>
                        <div className="col-md-5 text-center">
                            <div className="px-5">
                                <img src={heroImg} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-8">
                            {insights && insights.map(item => <InsightCardLarge data={item} />)}
                        </div>
                        <div className="col-md-4">
                            <h4 className="font-weight- mb-4">RECENT INSIGHTS</h4>
                            {insights && <RelatedTopics blogs={insights} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default insights;
export const InsightCardLarge = ({ data }) => {
    return (
        <>{data.featuredImage &&
            <Link href={"/insights/" + data.slug}>
                <div className="insight-card mb-4 row no-gutters">
                    <div className="col-md-4">
                        <div className="img-container"></div>
                    </div>
                    <div className="card-content col-md-8 p-3 py-5">
                        {/* <h2>Hello</h2> */}
                        <h1 className="h4 font-weight-bold">{data.title} </h1>
                        {data.shortDescription && <p classNameo="mb-0">{data.shortDescription.slice(0, 150) + "..."}</p>}
                        {/* <Link href={"/insights/" + data.slug}>Read more</Link> */}
                        {/* <p className="author">By Jrom</p> */}
                    </div>
                </div>
            </Link>

        }
            <style jsx>
                {`
                .img-container{
                    background-image: url(${data.featuredImage})
                }
                `}
            </style>
        </>
    )
}

// {data.featuredImage &&
//     <div className="col-md-4">
//         <div className="insight-card">
//             <div className="img-container">
//                 <img src={data.featuredImage} alt="" className="img-fluid" />
//             </div>
//             <div className="content-container bg-white">
//                 <h3>{data.title} </h3>
//             </div>
//         </div>
//     </div>}