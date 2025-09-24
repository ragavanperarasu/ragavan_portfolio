import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ragavan </span>
            from <span className="purple"> Tiruvannamalai, TamilNadu.</span>
            <br />
            I am currently studying in Government College of Technology, Coimbator.<br /> <span className="purple"> BE - Computer Engineering</span>
            <br />
            I have completed Diploma in Government PolyTechnic College, Thiruvannamalai.<br /><span className="purple"> Diploma Computer Engineering</span>
            <br />
            <br />
</p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every great app starts with a single line of code"
          </p>
          <footer className="blockquote-footer">Ragavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
