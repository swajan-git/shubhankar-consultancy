import SiteNavbar from "../components/shared/SiteNavbar/SiteNavbar";
import { BlogsContextProvider } from "../shared/Hooks/useBlogs";
import "../styles/bootstrap.scss";
import '../styles/globals.css';
import "../styles/customStyles.scss";
import SiteFooter from "../components/shared/Footer/SiteFooter";
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NextNprogress
        color="#EB823A"
      /> */}
      <BlogsContextProvider>

        <SiteNavbar />
        <Component {...pageProps} />
        <SiteFooter />
      </BlogsContextProvider>
    </>
  )
}

export default MyApp
