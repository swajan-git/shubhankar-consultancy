import React from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ModernPostCard from '../../../components/Cards/ModernPostCard';
import SectionSpinner from '../../../components/shared/SectionSpinner';
import SEOLayout from '../../../components/shared/SEOLayout';
import { insightsCollectionRef } from '../../../shared/firebase/fire-app';

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
                <section className="py-4">
                    {loading ? <SectionSpinner /> : ins && <div className="container">
                        <div className="row">
                            {ins.map(item => <ModernPostCard type="insights" col={4} blog={item} />)}
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

    return {
        props: {
            categoryName
        }
    }
}