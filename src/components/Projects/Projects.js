import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";
import Button from "react-bootstrap/Button";
import { CgYoutube, CgPlayButton } from "react-icons/cg";
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

import Bank1 from "../../Assets/Projects/bank1.jpeg";
import Bank2 from "../../Assets/Projects/bank2.jpeg";
import Bank3 from "../../Assets/Projects/bank3.jpeg";
import Bank4 from "../../Assets/Projects/bank4.jpeg";
import Bank5 from "../../Assets/Projects/bank5.jpeg";

import Str1 from "../../Assets/Projects/str1.jpeg";
import Str2 from "../../Assets/Projects/str2.jpeg";
import Str3 from "../../Assets/Projects/str3.jpeg";



function Projects() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [index2, setIndex2] = useState(0);

  const handleSelect2 = (selectedIndex2) => {
    setIndex2(selectedIndex2);
  };

  const [index3, setIndex3] = useState(0);

  const handleSelect3 = (selectedIndex3) => {
    setIndex3(selectedIndex3);
  };

  const [index4, setIndex4] = useState(0);

  const handleSelect4 = (selectedIndex4) => {
    setIndex4(selectedIndex4);
  };


  return (
    
    <Container fluid className="project-section">
      <Particle />
      <Container>

         {/* ====================react appps ========================= */}



    <h2 className="project-heading" style={{marginTop:40}}>
       My GCT Hub ( In Playstore )
        </h2>
     
<Row>
    <Col md={7} className="project-card">
    <Carousel activeIndex={index2} onSelect={handleSelect2}>
      <Carousel.Item>
      <img
          src={"./mygcthub/my_gct_home_screen_ragavan.png"}
          alt="My GCT Hub app home screen by Ragavan M"
          style={{width:'30%'}}
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={"./mygcthub/my_gct_attendance_screen_ragavan.png"}
          alt="My GCT Hub app club screen by Ragavan M"
          style={{width:'30%'}}
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={"./mygcthub/my_gct_club_screen_ragavan.png"}
          alt="My GCT Hub app message screen by Ragavan M"
          style={{width:'30%'}}
          loading="lazy"
        />

      </Carousel.Item>
            <Carousel.Item>
      <img
          src={"./mygcthub/my_gct_message_screen_ragavan.png"}
          alt="My GCT Hub app profile screen by Ragavan M"
          style={{width:'30%'}}
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={"./mygcthub/my_gct_pin_screen_ragavan.png"}
          alt="My GCT Hub app attendance screen by Ragavan M"
          style={{width:'30%'}}
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          src={"./mygcthub/my_gct_post_screen_ragavan.png"}
          alt="My GCT Hub app pin enter screen by Ragavan M"
          style={{width:'30%'}}
          loading="lazy"
        />

      </Carousel.Item>
            <Carousel.Item>
      <img
          src={"./mygcthub/my_gct_profile_screen_ragavan.png"}
          alt="My GCT Hub app attendance view screen by Ragavan M"
          style={{width:'30%'}}
          loading="lazy"
        />

      </Carousel.Item>
    </Carousel>
 </Col>
 <Col className="d-flex justify-content-center align-items-center project-card">
    <p style={{ color: "white",textAlign:"justify"}}>
    <b className="purple">Tech ( Available Playstore )</b><br/>
    React Native, Nodejs with ExpressJs, MongoDB, Firebase
    <br/><br/>
    <b className="purple">About</b><br/>
    My GCT Hub is an open-source mobile app built for Government College of Technology, Coimbatore. It connects students, staff, and alumni by providing access to study materials, question papers, books, notes, and department updates. Staff can share resources through the GCT Staff app, which appear for students in My GCT. The app also supports features like notifications, semester-wise posts.
    </p>
 
</Col>
<Row>
<Col>
      <Button
                  variant="primary"
                  href={"https://play.google.com/store/apps/details?id=com.mygcthub"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%", marginBottom:10}}
                >
                  <CgPlayButton /> &nbsp;
                  {"Playstore"}
                </Button>
                
                </Col>


                <Col>
    
      <Button
                  variant="primary"
                  href={"https://github.com/ragavanperarasu/"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%",marginBottom:10 }}
                >
                  <BsGithub /> &nbsp;
                  {"GitHub"}
                </Button></Col>
                
    </Row>

    </Row>




      {/* ================================== */}
      
    <h2 className="project-heading" style={{marginTop:100}}>
        E-Commerce Web Application
        </h2>
     
<Row>
    <Col md={7} className="project-card">

      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Ecom4}
          alt="E-Commerce webapp home screen by Ragavan M"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Ecom2}
          alt="E-Commerce webapp product screen by Ragavan M"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Ecom3}
          alt="E-Commerce webapp login screen by Ragavan M"
          loading="lazy"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Ecom1}
          alt="E-Commerce webapp product list screen by Ragavan M"
          loading="lazy"
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
                  {"GitHub"}
                </Button></Col>
                
    </Row>

    </Row>


{/* ==================================Banking project =================================== */}

    <h2 className="project-heading" style={{marginTop:40}}>
       Banking Website
        </h2>
     
<Row>
    <Col md={7} className="project-card">
    <Carousel activeIndex={index3} onSelect={handleSelect3}>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Bank1}
          alt="Banking webapp home screen by Ragavan M"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Bank2}
          alt="Banking webapp login screen by Ragavan M"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Bank3}
          alt="Banking webapp login status screen by Ragavan M"
          loading="lazy"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Bank5}
          alt="Banking webapp new user screen by Ragavan M"
          loading="lazy"
        />

      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Bank4}
          alt="Banking webapp db screen by Ragavan M"
          loading="lazy"
        />

      </Carousel.Item>
    </Carousel>
 </Col>
 <Col className="d-flex justify-content-center align-items-center project-card">
    <p style={{ color: "white",textAlign:"justify"}}>
    <b className="purple">Tech</b><br/>
    Spring Boot, MySQL
    <br/><br/>
    <b className="purple">Features</b><br/>
    Store User Details, Login authentication
    </p>
 
</Col>
<Row>

<Col>

    
      <Button
                  variant="primary"
                  href={"https://github.com/ragavanperarasu/Spring_Porjects"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%",marginBottom:10 }}
                >
                  <BsGithub /> &nbsp;
                  {"GitHub"}
                </Button></Col>
                
    </Row>

    </Row>

    {/* ======================streaming website=================================== */}

    <h2 className="project-heading" style={{marginTop:40}}>
       Streaming Website
        </h2>
     
<Row>
    <Col md={7} className="project-card">
    <Carousel activeIndex={index4} onSelect={handleSelect4}>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Str1}
          alt="First slide"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={Str2}
          alt="First slide"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={Str3}
          alt="First slide"
          loading="lazy"
        />

      </Carousel.Item>
      
    </Carousel>
 </Col>
 <Col className="d-flex justify-content-center align-items-center project-card">
    <p style={{ color: "white",textAlign:"justify"}}>
    <b className="purple">Tech</b><br/>
    React, NodeJs
    <br/><br/>
    <b className="purple">Feature</b><br/>
    Video Streaming
    </p>
 
</Col>
<Row>

<Col>

    
      <Button
                  variant="primary"
                  href={"https://github.com/ragavanperarasu/NodeJS_Projects"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%",marginBottom:10 }}
                >
                  <BsGithub /> &nbsp;
                  {"GitHub"}
                </Button></Col>
                
    </Row>

    </Row>

    {/* ====================react appps ========================= */}



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
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
         className="d-block w-100"
          src={age}
          alt="First slide"
          loading="lazy"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={todo}
          alt="First slide"
          loading="lazy"
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
                  style={{ marginLeft: "10px", width:"100%", marginBottom:10}}
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
                  {"Age Calc"}
                </Button>
                
                </Col>

                <Col>
    
      <Button
                  variant="primary"
                  href={"https://github.com/ragavanperarasu/React_Native_Projects.git"}
                  target="_blank"
                  style={{ marginLeft: "10px", width:"100%",marginBottom:10 }}
                >
                  <BsGithub /> &nbsp;
                  {"GitHub"}
                </Button></Col>
                
    </Row>

    </Row>



    

       


         
     
      </Container>
    </Container>
  );
}

export default Projects;
