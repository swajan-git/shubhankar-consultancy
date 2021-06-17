import { useEffect, useState } from "react";




const AuthorComponent = ({ author, all, sl }) => {
    const [borderBottom, setBorderBottom] = useState(true)
    
    useEffect(()=>{
        if(all & sl){
            if(all.length == sl){
                setBorderBottom(false)
            }
        }
    },[author])
    console.log(all.length, " : ", sl, " : ", borderBottom)
    return (
        <>
        <div className="text-left">
            <h5>{author.name}</h5>
            <p><small>{author.description} </small> </p>
            {sl< all.length && <hr/>}
        </div>
        </>
    )
}

const authors = [
    {
        id: 1,
        name: "Author Name One",
        description: "Senior Managing Director - Global Lead, Retail",
        socialLinks: {
            fb: "http://fb.com",
            twitter: "http://twitter.com",
            linkedIn: "http://linkedin.com"
        }
    },
    {
        id: 1,
        name: "Author Name One",
        description: "Senior Managing Director - Global Lead, Retail",
        socialLinks: {
            fb: "http://fb.com",
            twitter: "http://twitter.com",
            linkedIn: "http://linkedin.com"
        }
    },
    {
        id: 1,
        name: "Author Name One",
        description: "Senior Managing Director - Global Lead, Retail",
        socialLinks: {
            fb: "http://fb.com",
            twitter: "http://twitter.com",
            linkedIn: "http://linkedin.com"
        }
    },
];

const ContentAuthors = () => {
    return (
        <>
        {authors.map((item, index) => <AuthorComponent author={item} all={authors} sl={index+1}/>  )}
        </>
    );
};

export default ContentAuthors;
