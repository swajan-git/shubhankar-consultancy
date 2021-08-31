import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import SectionSpinner from '../../../../components/shared/SectionSpinner';
import SEOLayout from '../../../../components/shared/SEOLayout';
import { insightsCollectionRef } from '../../../../shared/firebase/fire-app';
import { InsightCardLarge } from '../../../old-insights';

const InsightCategories = ({ categoryName }) => {
    const [ins, loading, error] = useCollectionData(insightsCollectionRef.where("subCategory", "==", categoryName))

    const logData = () => {
        console.log(ins)
    }
    return (
        <>
            <SEOLayout title={`${categoryName && categoryName} | Insights`} />
            <main>
                <section className="jumbotron bg-dark text-center">
                    <h1 className="h2 text-center py-4 text-primary">
                        Category : <span className="font-bold text-white"> {categoryName && categoryName}</span>
                    </h1>
                </section>
                <section className="py-5">
                    {loading ? <SectionSpinner /> : ins && <div className="container">
                        <div className="row">
                            {ins.map(item => <div className="col-md-6">
                                <InsightCardLarge data={item} />
                            </div>)}
                        </div>
                    </div>}
                </section>
            </main>
        </>
    );
};

export default InsightCategories;


export const getServerSideProps = async (context) => {
    const categoryUrl = context.params.category;
    const categoryName = categoryUrl.replaceAll("-", " ");
    const snapshot = await insightsCollectionRef.where("subCategory", "==", "Business Strategy").get();
    // let allInsights = [];
    // snapshot.forEach(doc => {
    //     const insight = JSON.parse(JSON.stringify({ id: doc.id, ...doc.data() }));
    //     console.log("insight: ", insight);
    //     allInsights = [...allInsights, insight];
    // })

    return {
        props: {
            categoryName
        }
    }
}