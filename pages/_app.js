import SiteNavbar from "../components/shared/SiteNavbar";
import { BlogsContextProvider } from "../shared/Hooks/useBlogs";
import "../styles/bootstrap.scss";
import '../styles/globals.css';

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
