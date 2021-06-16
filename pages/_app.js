import SiteNavbar from "../components/shared/SiteNavbar";
import "../styles/bootstrap.scss";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SiteNavbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
