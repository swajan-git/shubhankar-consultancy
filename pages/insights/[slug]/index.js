import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Head from "next/head";
import { insightsCollectionRef } from '../../../shared/firebase/fire-app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import TemplateSingle from '../../../components/BlogTemplates/TemplateSingle';
import { useBlogs } from '../../../shared/Hooks/useBlogs';
import SiteNavbar from '../../../components/shared/SiteNavbar/SiteNavbar';
const siteDescription = `I'm an independent contract developer who loves to work on, and write about ReactJS, NodeJS, JavaScript and other development stacks. I also have much expertise in working with serverless development projects with Firebase or AWS.`

const blog = ({ blog }) => {
    console.log(blog)
    const { blogs, categories, loading } = useBlogs();
    // const [blog, setBlog] = useState(null);
    // https://swajan.io/swajan-software-engineer.png
    const router = useRouter();
    const { slug } = router.query;
    // const [relatedPosts, setRelatedPosts] = useState([]);
    // const [relatedLoading, setRelatedLoading] = useState(true);
    const [relatedPosts, relatedLoading, err] = useCollectionData(insightsCollectionRef.where("subCategory", "==", blog.subCategory).limit(5), { idField: "id"})
    // useEffect(() => {
    //     insightsCollectionRef.where("subCategory", "==", blog.subCategory).limit(5).get().then((docs)=>{
    //         console.log("total doc length: ", docs.length);
    //         docs.forEach(doc => {
    //             const bl = JSON.parse(JSON.stringify({ id: doc.id, ...doc.data() }))
    //             setRelatedPosts([...relatedPosts, bl])
    //             console.log(bl)
    //             setRelatedLoading(false)
    //         });
    //     })
    // },[blog])

    useEffect(() => {
        if (blogs) {
            // setBlog(blogs.find(item => item.slug === slug));
        }
    }, [blogs])
    // const testApi =async ()=>{
    //     const snapshot = await blogsCollectionRef.where("slug", '==', slug).get();
    //     if (snapshot.empty) {
    //         console.log('No matching documents.');
    //     }
    //     snapshot.forEach(doc => {
    //         console.log(doc.id, '=>', doc.data());
    //       });

    // }
    // testApi()
    return (
        <>


            <Head>
                <title>{blog?.title} </title>
                <meta property="og:url" content={blog?.slug} />
                <meta property="og:type" content="blog" />
                {/* <meta property="fb:app_id" content="your fb id" /> */}
                <meta property="og:title" content={blog?.title} />
                <meta name="twitter:card" content="summary" />
                <meta
                    property="og:description"
                    content={blog?.shortDescription}
                />
                <meta property="og:image" content={blog?.featuredImage} />
            </Head>

            <body>
                <SiteNavbar />
            
                <main>
                    {blog && !relatedLoading && <TemplateSingle type="blog" relatedPosts={relatedPosts} blog={blog} />}
                </main>
            </body>
        </>
    )
}

export default blog;

export const getServerSideProps = async (context) => {

    const blogRow = await insightsCollectionRef.where("slug", "==", context.params.slug).get();
    let blog = {
        id: context.params.id,
        title: "hello"
    }

    blogRow.forEach(doc => {
        const bl = JSON.parse(JSON.stringify({ id: doc.id, ...doc.data() }))
        if (bl.slug === context.params.slug) {
            blog = bl
        }
    });
    return {
        props: {
            blog
        }
    }
}
