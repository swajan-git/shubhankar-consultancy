import Link from "next/link"
import { useBlogs } from "../../../shared/Hooks/useBlogs";
import styles from "./megamenu.module.css"

const MegaMenuCommon = ({ menus }) => {
    const {categories} = useBlogs()
    return (
        <>
            <div className="nav-item dropdown has-megamenu mr-0 mr-md-5">
                <a className="nav-link dropdown-toggle" role="button" aria-expended="false" aria-haspopup="true" href="#" data-bs-toggle="dropdown"> Mega menu </a>
                <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                        <div className="w-100 py-0 py-5 ">
                            <div class="row d-flex align-items-center justify-content-center">
                                <div className="col-md-4">
                                    <h5>FEATURED CONTENT</h5>
                                    <h5 className="text-primary">Voices of Change</h5>
                                    <p className="mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere praesentium laudantium voluptatibus blanditiis ea soluta suscipit molestias.</p>
                                </div>
                                <div className="col-md-8">
                                    <div className="row d-flex align-items-center">
                                        {categories && categories.insightCategories.map(item => <SingleMenu item={item} />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MegaMenuCommon;

const SingleMenu = ({ item }) => {
    const linkText = item.replace(/ /g,"-").toLowerCase();
    return (
        <>
            <div className={"col-md-3 py-0 py-md-3 col-6 text-left text-blue mega-item "}>
                <Link href={"/"+linkText}>{item}</Link>
            </div>
        </>
    )
}