import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/", label: "Pricing", hash: "pricing" },
  { to: "/open-source", label: "Open Source" },
  { to: "/client-work", label: "Client Work" },
  { to: "/about", label: "About" },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Scrolls to a section on the home page, navigating there first if needed.
  const goToSection = (id) => (event) => {
    event.preventDefault();
    updateExpanded(false);
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={scrolled ? "navbar sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => updateExpanded(false)}>
          <span className="brand-dot" />
          Ragavan
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {LINKS.map((link) =>
              link.hash ? (
                <Nav.Item key={link.label}>
                  <Nav.Link
                    href={`#${link.hash}`}
                    onClick={goToSection(link.hash)}
                  >
                    {link.label}
                  </Nav.Link>
                </Nav.Item>
              ) : (
                <Nav.Item key={link.label}>
                  <Nav.Link
                    as={Link}
                    to={link.to}
                    className={pathname === link.to ? "active-link" : undefined}
                    onClick={() => updateExpanded(false)}
                  >
                    {link.label}
                  </Nav.Link>
                </Nav.Item>
              )
            )}

            <Nav.Item className="nav-cta">
              <Nav.Link href="#contact" onClick={goToSection("contact")}>
                Hire me
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
