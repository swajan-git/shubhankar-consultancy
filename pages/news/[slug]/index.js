import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Head from "next/head";
import { blogsCollectionRef, newsCollectionRef } from '../../../shared/firebase/fire-app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import TemplateSingle from '../../../components/BlogTemplates/TemplateSingle';
import { useBlogs } from '../../../shared/Hooks/useBlogs';
import NewsTemplate from '../../../components/BlogTemplates/NewsTemplate';
const siteDescription = `I'm an independent contract developer who loves to work on, and write about ReactJS, NodeJS, JavaScript and other development stacks. I also have much expertise in working with serverless development projects with Firebase or AWS.`

const blog = ({ blog }) => {
    console.log(blog)
    const { blogs, categories, loading } = useBlogs();
    // const [blog, setBlog] = useState(null);
    // https://swajan.io/swajan-software-engineer.png
    const router = useRouter();
    const { slug } = router.query;

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
                {/* <div className="py-text-center">
                    <button onClick={getD} className="btn-primary btn">log</button>
                    <button onClick={() => console.log(blog)} className="btn-primary btn">log</button>
                </div> */}
                <main>
                    {blog && categories && <NewsTemplate type="blog" categories={categories.blogCategories} blog={blog} />}
                </main>
            </body>
        </>
    )
}

export default blog;

export const getServerSideProps = async (context) => {

    const blogRow = await newsCollectionRef.where("slug", "==", context.params.slug).get();
    let blog = {
        id: context.params.id,
        title: "hello"
    }
    // const snapshot = await blogsCollectionRef.where("slug", '==', slug).get();
    // if (snapshot.empty) {
    //     console.log('No matching documents.');
    // }
    blogRow.forEach(doc => {
        const bl = JSON.parse(JSON.stringify({ id: doc.id, ...doc.data() }))
        if (bl.slug === context.params.slug) {
            blog = bl
        }
    });
    // const blog = JSON.parse(JSON.stringify({ id: blogRow.id, ...blogRow.data() }))
    return {
        props: {
            blog
        }
    }
}
