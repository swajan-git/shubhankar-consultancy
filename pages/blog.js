import { useBlogs } from '../shared/Hooks/useBlogs';
import Link from "next/link"

const blog = () => {
    const { blogs } = useBlogs();
    return (
        <>
            <div className="jumbotron text-center">
                <h3>Blog</h3>
            </div>
            <div className="section bg-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-9">
                            {blogs && blogs.map(item => <BlogCard data={item} key={item.id}/> )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default blog;

const BlogCard = ({ data }) => {
    return (
        <>{data.featuredImage &&
            <Link href={"/blog/"+data.slug}>
            <div className="insight-card mb-4 row no-gutters">
                <div className="col-md-4">
                    <div className="img-container"></div>
                </div>
                <div className="card-content col-md-8 p-3">
                    {/* <h2>Hello</h2> */}
                    <h1>From the Other Side of the World</h1>
                    <p className="excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.</p>
                    <p className="author">By Jrom</p>
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
