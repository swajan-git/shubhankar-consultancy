import Link from "next/link"

const MegaMenuCommon = ({ menus }) => {
    return (
        <>
            <div className="nav-item dropdown has-megamenu mr-0 mr-md-4">
                <a className="nav-link dropdown-toggle" role="button" aria-expended="false" aria-haspopup="true" href="#" data-bs-toggle="dropdown"> Mega menu </a>
                <div className="dropdown-menu megamenu" role="menu">
                    <div className="container">
                        <div className="w-100">
                            <div class="row d-flex align-items-center justify-content-center">
                                {menus.map(item => <SingleMenu item={item} />)}
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
    return (
        <>
            <div class="col-md-3 col-6 text-left">
                <Link href={"/" + item.link}>{item.name}</Link>
            </div>
        </>
    )
}