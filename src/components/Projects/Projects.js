import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgYoutube } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import maths from "../../Assets/Projects/app1.png";
import todo from "../../Assets/Projects/app2.png";
import age from "../../Assets/Projects/app3.png";

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


import Ecom1 from "../../Assets/Projects/ecom1.jpeg";
import Ecom2 from "../../Assets/Projects/ecom2.jpeg";
import Ecom3 from "../../Assets/Projects/ecom3.jpeg";
import Ecom4 from "../../Assets/Projects/ecom4.jpeg";

function Projects() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [index2, setIndex2] = useState(0);

  const handleSelect2 = (selectedIndex2) => {
    setIndex2(selectedIndex2);
  };

  return (
    
    <Container fluid className="project-section">
      <Particle />
      <Container>
      
    <h2 className="project-heading">
        E-Commerce Web Application
        </h2>
     
<Row>
    <Col md={7} className="project-card">

      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Ecom4}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Ecom2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Ecom3}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Ecom1}
          alt="First slide"
        />

      </Carousel.Item>
    </Carousel>

 </Col>
 <Col className="d-flex justify-content-center align-items-center project-card">
    <p style={{ color: "white",textAlign:"justify"}}>
    <b className="purple">Tech Stack</b><br/>
    MERN Stack
    <br/><br/>
    <b className="purple">Features</b><br/>
    Product listing, Add cart, Admin Page,

User authentication (login/signup),

Shopping cart system,

Responsive UI

    </p>
 
</Col>
<Row>
<Col>
      <Button
                  variant="primary"
                  href={"https://youtu.be/PV3ELB3IjlA?si=ce8KUVg1Aa76Y_u8"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%"}}
                >
                  <CgYoutube /> &nbsp;
                  {"Youtube"}
                </Button>
                
                </Col>
                <Col>
    
      <Button
                  variant="primary"
                  href={"https://github.com/ragavanperarasu/vip-world.git"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%" }}
                >
                  <BsGithub /> &nbsp;
                  {"Source Code"}
                </Button></Col>
                
    </Row>

    </Row>


    <h2 className="project-heading" style={{marginTop:40}}>
       Simple React Native Apps
        </h2>
     
<Row>
    <Col md={7} className="project-card">
    <Carousel activeIndex={index2} onSelect={handleSelect2}>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={maths}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={age}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={todo}
          alt="First slide"
        />

      </Carousel.Item>
    </Carousel>
 </Col>
 <Col className="d-flex justify-content-center align-items-center project-card">
    <p style={{ color: "white",textAlign:"justify"}}>
    <b className="purple">Tech</b><br/>
    React Native use Expo
    <br/><br/>
    <b className="purple">Apps</b><br/>
    Maths Game, Age Calculator, and Todo List Apps
    </p>
 
</Col>
<Row>
<Col>
      <Button
                  variant="primary"
                  href={"https://youtube.com/shorts/sGBjENiLsRs?si=oIyb7SHgGAnSfU7m"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%"}}
                >
                  <CgYoutube /> &nbsp;
                  {"Maths Game"}
                </Button>
                
                </Col>
                <Col>
      <Button
                  variant="primary"
                  href={"https://youtube.com/shorts/Z4zhW64-uHc?si=nPNoQ7y98odPHLIW"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%"}}
                >
                  <CgYoutube /> &nbsp;
                  {"Todo List"}
                </Button>
                
                </Col>

                <Col>
      <Button
                  variant="primary"
                  href={"hhttps://youtube.com/shorts/-zIyuDLAwAQ?si=0tv6Q5fMHhFFMzOj"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%"}}
                >
                  <CgYoutube /> &nbsp;
                  {"Age Calculator"}
                </Button>
                
                </Col>

                <Col>
    
      <Button
                  variant="primary"
                  href={"https://github.com/ragavanperarasu/React_Native_Projects.git"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%" }}
                >
                  <BsGithub /> &nbsp;
                  {"Source Code"}
                </Button></Col>
                
    </Row>

    </Row>
    

       


         
     
      </Container>
    </Container>
  );
}

export default Projects;
