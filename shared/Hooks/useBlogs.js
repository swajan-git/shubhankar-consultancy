import React, { createContext, useContext, useState } from "react";
import {  websiteDataRef, researchesCollectionRef, insightsCollectionRef, caseCollectionRef, fireStoreDB, newsCollectionRef } from "../firebase/fire-app";
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';


const BlogsContext = createContext();
const blogsRef = fireStoreDB.collection("blogs");

export const BlogsContextProvider = ({ children }) => {
    const blogsManager = BlogsManager();
    return (
        <BlogsContext.Provider value={blogsManager}>
            { children}
        </BlogsContext.Provider >
    )
}
export const useBlogs = () => useContext(BlogsContext);

const BlogsManager = () => {
    const [researches, researchLoading, researchErr] =useCollectionData(blogsRef.orderBy('createdAt', 'desc'), { idField: "id" });

    const [blogs, loading, error] = useCollectionData(blogsRef.orderBy('createdAt', 'desc'), { idField: "id" });
    const [insights, insightsLoading, insightsError] = useCollectionData(insightsCollectionRef.orderBy('createdAt', 'desc'), { idField: "id" });
    const [news, newsLoading, newsError] = useCollectionData(newsCollectionRef.orderBy('createdAt', 'desc'), { idField: "id" });
    const [caseStudies, caseLoading, caseError] = useCollectionData(caseCollectionRef.orderBy('createdAt', 'desc'), { idField: "id" });
    
    const [categories, catLoading, catError] = useDocumentData(websiteDataRef.doc('categories'));
    const [isLoading, setIsLoading] = useState(true);


    return {
        blogs, loading, error, categories, researches, researchLoading, researchErr, insights, insightsLoading, insightsError,news, newsLoading, newsError, caseStudies, caseLoading, caseError
    }
}