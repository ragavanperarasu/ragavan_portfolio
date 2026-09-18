import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGlobe, FiSmartphone, FiLayers, FiShield } from "react-icons/fi";

const SERVICES = [
  {
    icon: FiGlobe,
    title: "Web Development",
    text: "Full-stack MERN sites and web apps — storefronts, dashboards and admin panels, built to run in production.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Apps",
    text: "Cross-platform React Native apps for Android and iOS, shipped to the Play Store with push notifications and offline support.",
  },
  {
    icon: FiLayers,
    title: "System Design",
    text: "API and database design, server setup and deployment — architecting systems that stay fast as they grow.",
  },
  {
    icon: FiShield,
    title: "Cyber Security",
    text: "Hardening real deployments: secure auth, strict CSP and HTTP headers, safe payment flows and dependency audits.",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I'm <b className="purple">Ragavan</b> — a{" "}
              <b className="purple">freelance developer</b> who builds and ships
              production software end to end.
              <br />
              <br />
              I'm a <b className="purple">
                B.E. Computer Science and Engineering graduate
              </b>{" "}
              from Government College of Technology (GCT), Coimbatore, and
              before that I completed my{" "}
              <b className="purple">Diploma in Computer Engineering.</b>
              <br />
              <br />
              I work across{" "}
              <b className="purple">
                web development, mobile apps, system design
              </b>{" "}
              and <b className="purple">cyber security</b> — mostly on the{" "}
              <b className="purple">MERN Stack</b> with{" "}
              <b className="purple">React Native</b>, backed by{" "}
              <b className="purple">MySQL, AWS, Firebase</b> and{" "}
              <b className="purple">Nginx</b> on the infrastructure side.
              <br />
              <br />
              I built and run the <b className="purple">My GCT</b> platform —
              four web products and an Android app used across my college, free
              and open source. For clients, I've delivered live e-commerce
              storefronts and B2B catalogues that take{" "}
              <b className="purple">real orders and real payments</b>, each
              handed over with an admin panel the owner runs themselves.
              <br />
              <br />
              Have a project in mind?{" "}
              <b className="purple">I'm available for freelance work.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={"./ragavan.jpg"} className="img-fluid" alt="ragavan gct" style={{borderRadius:'10%'}}/>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-services">
            <h1>
              WHAT I <span className="purple">DO</span>
            </h1>
            <p className="home-services-sub">
              Available for freelance projects — end to end, from first sketch
              to a live deployment you own.
            </p>
            <div className="service-grid">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div className="service-card" key={service.title}>
                    <span className="service-icon">
                      <Icon />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <h5>ragavan.devp@gmail.com</h5>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ragavanperarasu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ragavandevp/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
