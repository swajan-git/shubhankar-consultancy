import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link"
import ServicesMegaMenu from "./ServicesMegaMenu";
import IndustriesMegaMenu from "./IndustriesMegaMenu";
import InsightMegaMenu from "./InsightMegaMenu";

const SiteNavbar = ({active}) => {
    const shadow = true;
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" className="py-0 bg-white">
                <Navbar.Brand>
                    <Link href="/">
                        <a href="/" className="font-weight-bold mb-0 ">
                            <img src="/shubhankar-consulting-logo.png" alt="" className="site-logo" />
                        </a>
                        {/* <img src={ImgLogo} className="site-logo" alt="" /> */}
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center mt-1">
                        <Nav.Item>
                            <Nav.Link eventKey="129" className={`single-item ${active == "home" && "active"}`}><Link href="/"><span className="nav-link">Home</span></Link></Nav.Link>
                        </Nav.Item>
                        <ServicesMegaMenu active={active=="services" ? true: false} />
                        <IndustriesMegaMenu active={active=="industries" ? true: false} />
                        {/* <Nav.Item>
                            <Nav.Link eventKey="128" className=" single-item"><Link href="/insights"><span className="nav-link">Insights</span></Link></Nav.Link>
                        </Nav.Item> */}
                        <InsightMegaMenu active={active == "insights" ? true : false} />
                        <Nav.Item>
                            <Nav.Link eventKey="122" className={`single-item ${active == "about" && "active"}`}><Link href="/about-us"><span className="nav-link">About US</span></Link></Nav.Link>
                        </Nav.Item>
                        {/* <NavDropdown title="About Us" className="mr-0">
                            <NavDropdown.Item eventKey="3">
                                <Link to="/goals-and-dreams">Goals & Dreams</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="2">
                                <Link to="/brains-behind-prottoy">Brains Behind Prottoy</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="46">
                                <Link to="/interns">Our Interns</Link>
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <NavDropdown className="dustu" title="Contact Us">
                            <NavDropdown.Item eventKey="11">
                                <Link to="/complaints">Complaints</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="12">
                                <Link to="/get-in-touch">Get in touch</Link>
                            </NavDropdown.Item>
                        </NavDropdown> */}
                        <Nav.Item>
                            <Nav.Link eventKey="126" className={`single-item ${active == "contact" && "active"}`}><Link href="/contact"><span className="nav-link">Contact</span></Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

        </>
    );
};

export default SiteNavbar;