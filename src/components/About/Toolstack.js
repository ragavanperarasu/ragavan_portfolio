import { Col, Row } from "react-bootstrap";
import {
SiAndroid, SiLinux, SiPostman, SiGithub, SiOllama,
SiOpenai,
SiAndroidstudio,
SiAmazonec2,
} from "react-icons/si";
import {
DiVisualstudio
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
       <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiOllama />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiOpenai />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonec2 /> 
      </Col>

    </Row>
  );
}

export default Toolstack;
