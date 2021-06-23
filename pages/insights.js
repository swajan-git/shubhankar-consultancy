import { data } from 'jquery';
import React from 'react';
import SquareImg from '../components/shared/SquareImg/SquareImg';
import { useBlogs } from '../shared/Hooks/useBlogs';

const insights = () => {
    const { insights } = useBlogs();
    return (
        <>
            <div className="jumbotron text-center">
                Insights
                <button onClick={() => console.log(insights)} className="btn btn-primary">Insights</button>
            </div>
            <section className="bg-white">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-9">
                        {insights && insights.map(item => <InsightCard data={item} />)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default insights;
const InsightCard = ({ data }) => {
    return (
        <>{data.featuredImage &&
            <div className="insight-card mb-3">
                <div className="img-container"></div>
                <div className="card-content">
                    {/* <h2>Hello</h2> */}
                    <h1>From the Other Side of the World</h1>
                    <p className="excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia odio dolorem amet, sunt magnam asperiores exercitationem consequuntur? Molestias asperiores rerum doloremque reiciendis.</p>
                    <p className="author">By Jrom</p>
                </div>
            </div>
      
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