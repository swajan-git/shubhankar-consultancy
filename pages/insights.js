import SEOLayout from '../components/shared/SEOLayout';
import { useBlogs } from '../shared/Hooks/useBlogs';
import Link from "next/link";
import { InsightCardLarge } from './old-insights';

const PageInsights = () => {
    const { insights } = useBlogs();

    return (
        <>
            <SEOLayout title="Insights | Shubhankar Consulting" />
            <main className="insights">
                <section className="insight-hero pt-5">
                    <div className="container py-5 my-4">
                        <div className="row mb-5">
                            <div className="col-md-8 text-center pr-md-5 offset-md-2">
                                <img src="/img/insights/insight-hero.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="scroll-container">
                            <div id="scroll-btn">
                                <a href="#articles"><span></span><span></span><span></span></a>
                            </div>
                        </div>
                        <div id="articles"></div>
                    </div>
                </section>
                <section className="articles" >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 py-5">
                                <div className="text-center mb-5">
                                    <h3 className="font-36 text-center mb-1 text-dark font-weight-900">
                                        Trending Topics
                                    </h3>
                                    <p className="font-20 text-center">
                                        Be Ready for Every Opportunity
                                    </p>
                                </div>
                                {insights && <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <InsightCardSmall data={insights[0]} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <InsightCardSmall data={insights[0]} />
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        {insights && <InsightCardLarge data={insights[0]} />}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <InsightCardSmall data={insights[0]} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <InsightCardSmall data={insights[0]} />
                                    </div>
                                </div>}

                            </div>
                            <div className="col-md-6 pl-md-5">
                                <div className="right-bar py-5">
                                    <div className="text-left px-5 mb-4 mt-4">
                                        <h3 className="font-36 mb-1 text-dark font-weight-900">
                                            Most viewed articles
                                        </h3>
                                        <p className="font-20">
                                            Be Ready for Every Opportunity
                                        </p>
                                    </div>
                                    <div className="articles px-4">
                                        <div className="p-4 pb-0">

                                            {insights && <InsightCardHorizontal data={insights[0]} />}
                                            {insights && <InsightCardHorizontal data={insights[0]} />}
                                            {insights && <InsightCardHorizontal data={insights[0]} />}
                                            {insights && <InsightCardHorizontal data={insights[0]} />}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default PageInsights;

const InsightCardSmall = ({ data }) => {
    return (
        <>
            {data.featuredImage &&
                <Link href={"/insights/" + data.slug}>
                    <div className="insight-card-small  text-center mb-4 p-4">
                        <h1 className="h5 font-weight-bold">{data.title} </h1>
                        {data.shortDescription && <p classNameo="mb-0">{data.shortDescription.slice(0, 150) + "..."}</p>}
                        <Link href={"/insights/" + data.slug}><a className="btn btn-primary btn-sm">READ MORE</a></Link>
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

const InsightCardHorizontal = ({ data }) => {
    return (
        <>
            <Link href={"/insights/" + data.slug}>
                <div className="insight-card-horizontal  mb-4 p-4">
                    <div className="">
                        <p className="mb-2">{data.category} </p>
                        <h5 className="h5 font-weight-bold">{data.title} </h5>

                    </div>

                </div>
            </Link>
        </>
    )
}