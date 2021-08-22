import Link from "next/link"
import { updatedInsightCategories } from "../../../shared/data/navbar-data/insight-megamenu";
import { useBlogs } from "../../../shared/Hooks/useBlogs";

const InsightMegaMenu = () => {
    const { categories } = useBlogs()
    return (
        <>
            <div className="nav-item dropdown has-megamenu mr-0">
                <a className="nav-link dropdown-toggle" role="button" aria-expended="false" aria-haspopup="true" href="#" data-bs-toggle="dropdown">Insights</a>
                <div className="dropdown-menu megamenu" role="menu">
                    <div className="container-fluid">
                        <div className="w-100 py-0 py-5 ">
                            <div class="row d-flex justify-content-center">
                                <div className="col-md-9">
                                    
                                    <div className="row">
                                        <div className="col-md-3 col-6 mega-item">
                                        <h5 className="font-bold text-blue py-md-3">Industries & Services</h5>
                                        </div>
                                        {updatedInsightCategories && updatedInsightCategories[0].categories.map(item => <SingleMenu item={item} />)}
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="text-left">
                                        <h5 className="font-bold text-blue  p-3 t py-md-3">Resources</h5>
                                        {updatedInsightCategories && updatedInsightCategories[1].categories.map(item => <SingleMenuItem item={item} />)}
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

export default InsightMegaMenu;

const SingleMenu = ({ item }) => {
    const linkText = item.replace(/ /g, "-").toLowerCase();
    return (
        <>
            <div className={"col-md-3 py-0 py-md-3 col-6 text-left text-blue mega-item "}>
                <Link href={"/" + linkText}>{item}</Link>
            </div>
        </>
    )
}
const SingleMenuItem = ({ item }) => {
    const linkText = item.replace(/ /g, "-").toLowerCase();

    return (
        <>
            <div className={"w-100 pl-3 py-0 py-md-3 text-left text-blue mega-item "}>
                <Link href={"/" + linkText}>{item}</Link>
            </div>
        </>
    )
}