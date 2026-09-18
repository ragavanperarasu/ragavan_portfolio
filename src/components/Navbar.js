import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/open-source", label: "Open Source" },
  { to: "/client-work", label: "Client Work" },
  { to: "/about", label: "About" },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // "Hire me" scrolls to the contact block, navigating home first if needed.
  const goToContact = (event) => {
    event.preventDefault();
    updateExpanded(false);
    if (pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "contact" } });
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
            {LINKS.map((link) => (
              <Nav.Item key={link.to}>
                <Nav.Link
                  as={Link}
                  to={link.to}
                  className={pathname === link.to ? "active-link" : undefined}
                  onClick={() => updateExpanded(false)}
                >
                  {link.label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item className="nav-cta">
              <Nav.Link href="#contact" onClick={goToContact}>
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
