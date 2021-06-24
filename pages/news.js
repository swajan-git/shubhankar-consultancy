import { useBlogs } from '../shared/Hooks/useBlogs';
import Link from "next/link"

const news = () => {
    const { news } = useBlogs();
    return (
        <>
            <div className="jumbotron text-center">
                <h3>News</h3>
            </div>
            <div className="section bg-white">
                <div className="container py-5">
                    <div className="row">

                        {news && news.map(item => <div className="col-md-6"><NewsCard data={item} key={item.id} /></div>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default news;


const NewsCard = ({ data }) => {
    return (
        <>
            <Link href={"/news/" + data.slug}>
                <div className="insight-card mb-4 row no-gutters">
                    {/* <div className="col-md-4">
                    <div className="img-container"></div>
                </div> */}
                    <div className="card-content col-md-12 p-3">
                        {/* <h2>Hello</h2> */}
                        <h1>{data.title} </h1>
                        <p className="excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.</p>
                        <p className="author">By Jrom</p>
                    </div>
                </div>
            </Link>
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