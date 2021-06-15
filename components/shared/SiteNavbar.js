import { Navbar, Container, Nav, DropdownButton, Dropdown, NavDropdown } from "react-bootstrap";
import Link from "next/link"

const SiteNavbar = () => {
    const shadow = true;
    return (
        <>
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" /> */}
            <Navbar collapseOnSelect sticky="top" expand="lg" variant="dark" className={shadow ? "bg-primary" : "bg-sm-danger"}>
                <Container>
                    <Navbar.Brand>
                        <Link href="/">
                            <h5>Shubhankar</h5>
                            {/* <img src={ImgLogo} className="site-logo" alt="" /> */}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {/* <Navbar.Collapse id="responsive-navbar-nav text-center"> */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav style={{ color: "#FFFFFF" }} className="ml-auto text-center">

                            <Nav.Item>
                                <Nav.Link eventKey="1" to="/what-we-do" className="ml-4"><Link href="/what-we-do"> What We Do</Link></Nav.Link>
                            </Nav.Item>

                            <div className="nav-item dropdown has-megamenu">
                                <a className="nav-link dropdown-toggle" role="button" aria-expended="false" aria-haspopup="true" href="#" data-bs-toggle="dropdown"> Mega menu </a>
                                <div className="dropdown-menu megamenu" role="menu">
                                    <div className="container">
                                        This is content of megamenu. <br />
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat.
                                    </div>
                                </div>
                                {/* <div class="dropdown-menu megamenu" role="menu" data-bs-popper="none">
                                    <div className="w-100">
                                    <div class="row d-flex align-items-center justify-content-center">
                                        <div class="col-md-3 col-6 text-center">
                                            <div class="col-megamenu">
                                                <h6 class="title">Title Menu One</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                </ul>
                                            </div> 
                                        </div>
                                        <div class="col-md-3 col-6 text-center">
                                            <div class="col-megamenu">
                                                <h6 class="title">Title Menu Two</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-6 text-center">
                                            <div class="col-megamenu">
                                                <h6 class="title">Title Menu Three</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-6 text-center">
                                            <div class="col-megamenu">
                                                <h6 class="title">Title Menu Four</h6>
                                                <ul class="list-unstyled">
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                    <li><a href="/">Custom Menu</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div> */}

                            </div>
                            <NavDropdown title="About Us">
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
                </Container>
            </Navbar>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>

        </>
    );
};

export default SiteNavbar;