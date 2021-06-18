import SiteNavbar from "../components/shared/SiteNavbar/SiteNavbar";
import { BlogsContextProvider } from "../shared/Hooks/useBlogs";
import "../styles/bootstrap.scss";
import '../styles/globals.css';
import "../styles/customStyles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BlogsContextProvider>
        <SiteNavbar />
        <Component {...pageProps} />
      </BlogsContextProvider>
    </>
  )
}

export default MyApp
