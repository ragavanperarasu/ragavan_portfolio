import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi, I'm <span className="purple">Ragavan</span> — a freelance
            developer from{" "}
            <span className="purple">Tiruvannamalai, Tamil Nadu</span>, now
            based in Coimbatore.
          </p>
          <p>
            I graduated with a{" "}
            <span className="purple">
              B.E. in Computer Science and Engineering
            </span>{" "}
            from Government College of Technology, Coimbatore, after completing
            a <span className="purple">Diploma in Computer Engineering</span> at
            Government Polytechnic College, Tiruvannamalai.
          </p>
          <p>
            I build web applications, mobile apps and the infrastructure that
            runs them — and I work directly with the people who use what I
            build, from college students to business owners.
          </p>

          <p className="quote-line">
            "Every great app starts with a single line of code"
          </p>
          <footer className="blockquote-footer">Ragavan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
