import SquareImg from "../shared/SquareImg/SquareImg";

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
        <div className="pt-2">
            <div className="row no-gutters">
                <div className="col-md-5 pr-3">
                    <SquareImg img="https://www.swajan.io/swajan-software-engineer.png"/>
                    {/* <img src="https://www.swajan.io/swajan-software-engineer.png" alt={blog.title} className="img-fluid" /> */}
                </div>
                <div className="col-md-7">
                    <h6><u>{blog.category} </u> </h6>
                    <h5 className="font-weight-bold">{blog.title} </h5>
                </div>
            </div>
            
        </div>
        <hr/>
        </>
    )
}