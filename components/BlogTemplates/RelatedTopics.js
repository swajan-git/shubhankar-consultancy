import SquareImg from "../shared/SquareImg/SquareImg";
import Link from "next/link"
const RelatedTopics = ({blogs}) => {
    return (
        <>
            {blogs.map(item => <TopicContent blog={item}/>)}
        </>
    );
};

export default RelatedTopics;

const TopicContent =({blog})=>{
    return(
        <>
        <div className="pt-0">
            <div className="row no-gutters d-flex align-items-center">
                <div className="col-md-5 pr-3">
                    <SquareImg img={blog.featuredImage}/>
                    {/* <img src="https://www.swajan.io/swajan-software-engineer.png" alt={blog.title} className="img-fluid" /> */}
                </div>
                <div className="col-md-7">
                    <h6><strong>{blog.category} </strong> </h6>
                    
                    <h6 className="font-weight-bold mb-0"><Link href={"/insights/" + blog.slug}>{blog.title}</Link></h6>
                    {blog.shortDescription && <p className="mb-0">{blog.shortDescription.slice(0, 40)+"..."}</p>}
                </div>
            </div>
            
        </div>
        <hr/>
        </>
    )
}