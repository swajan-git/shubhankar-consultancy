import Head from "next/head"
import SiteNavbar from "./SiteNavbar/SiteNavbar";

const SEOLayout = ({ title, description, img, url, activeNav }) => {
    const siteTitle = "Shubhankar Consulting"
    const siteImg = "/shubhankar-consulting.jpeg"
    const siteDescription = `Business Consulting Firm`
    const siteUrl = "https://shubhankarconsulting.com"
    return (
        <>
  
        
            <Head>
                <link rel="icon" href={"/favicon.ico"} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#032646" />
                <meta name="description" content={description ? description : siteDescription} />
                {/* FB Crawler */}
                <meta property="og:title" content={title? title: siteTitle} key="title" />
                <meta property="og:image" content={img ? img : siteImg} key="img" />
                <meta property="og:image:alt" content="swajan" key="imgalt"/>
                <meta property="og:type" content="social-media" key="type" />
                <meta property="og:url" content={url ? url: siteUrl} key="url" />
                <meta property="og:description"
                    content={description ? description : siteDescription} key="description" />
                <link rel="apple-touch-icon" href={"/img/apple-touch-icon.png"} />
                {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
                <title>{title? title: siteTitle}</title>
            </Head>
            <SiteNavbar active={activeNav}/>
        </>
    );
};

export default SEOLayout;