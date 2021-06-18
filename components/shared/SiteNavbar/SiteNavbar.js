import { Navbar, Container, Nav, DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
import Link from "next/link"
import MegaMenuCommon from "./MegaMenuCommon";
import { insightsMenuData } from "../../../shared/data/menuBarData";

const SiteNavbar = () => {
    const shadow = true;
    console.log(insightsMenuData)
    return (
        <>
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="white" className="py-3 bg-white">

                <Navbar.Brand>
                    <Link href="/">
                        <h5 className="mb-0">Shubhankar</h5>
                        {/* <img src={ImgLogo} className="site-logo" alt="" /> */}
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                {/* <Navbar.Collapse id="responsive-navbar-nav text-center"> */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center">

                        <Nav.Item className="mr-0 mr-md-4">
                            <Nav.Link eventKey="1" to="/what-we-do" className="ml-0 ml-md-4"><Link href="/what-we-do"> What We Do</Link></Nav.Link>
                        </Nav.Item>
                        <MegaMenuCommon menus={insightsMenuData} />


                        <NavDropdown title="About Us" className="mr-0 mr-md-4">
                            {/* <NavDropdown.Item eventKey="1">
                                    <Link to="/our-journey">Our Journey</Link>
                                </NavDropdown.Item> */}

                            <NavDropdown.Item eventKey="3">
                                <Link to="/goals-and-dreams">Goals & Dreams</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="2">
                                <Link to="/brains-behind-prottoy">Brains Behind Prottoy</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="46">
                                <Link to="/interns">Our Interns</Link>
                            </NavDropdown.Item>
                        </NavDropdown>


                        <NavDropdown className="dustu" title="Contact Us">
                            <NavDropdown.Item eventKey="11">
                                <Link to="/complaints">Complaints</Link>
                            </NavDropdown.Item>

                            <NavDropdown.Item eventKey="12">
                                <Link to="/get-in-touch">Get in touch</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

        </>
    );
};

export default SiteNavbar;