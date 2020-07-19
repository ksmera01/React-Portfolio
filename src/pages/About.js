import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SkillBar from 'react-skillbars';

function About() {
  const skills = [
    { type: "HTML5", level: 100 },
    { type: "Javascript", level: 85 },
    { type: "jQuery", level: 80 },
    { type: "CSS3", level: 85 },
    { type: "Bootstrap", level: 90 },
    { type: "node.js", level: 75 },
    { type: "express.js", level: 70 },
    { type: "MongoDB", level: 70 },
    { type: "MySQL", level: 70 },
    { type: "React.js", level: 60 },
  ];

  return (
    <div>
      <Hero backgroundImage="/assets/portfoliobackground.jpeg">
        <h1>Hello, I'm a Web Developer.</h1>
        <br></br>
        <h3>My name is Kevin and I would love to create with you.</h3>
        <br></br>
        <br></br>
        <div>
          <a href="https://github.com/ksmera01" rel="noreferrer noopener" target="_blank" className="btn btn-dark btn-lg buttonSpacing"><i
            className="fab fa-github"></i></a>
          <a href="tel:215-499-6566" className="btn btn-dark btn-lg glyphicon glyphicon-earphone buttonSpacing"><i className="fa fa-phone" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/kevin-smeraglio-b203391a/" rel="noreferrer noopener" target="_blank"
            className="btn btn-dark btn-lg buttonSpacing"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:ksmera01@gmail.com" rel="noreferrer noopener" target="_blank"
            className="btn btn-dark btn-lg buttonSpacing"><i className="far fa-envelope"></i></a>
          <a className="btn btn-dark btn-lg buttonSpacing" href="./assets/Kevin Smeraglio Resume-converted.pdf" rel="noreferrer noopener" target="_blank"
            role="button"><i className="fas fa-portrait"></i></a>
        </div>
      </Hero>
      <Container style={{ marginTop: 30 }} >
        <Row>
          <Col size="md-12">
            <h1 className="headingFont">About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              <img src="/assets/headshot.jpg" alt="headshot" height="300px" width="211" align="left" border-radius="50px" hspace="20"></img>
              Hello there! Welcome to my page! Let me take a second to introduce myself. My name is Kevin Smeraglio and I am a full stack web developer. I was born and raised in the Philadelphia area and currently reside right outside the city in Conshohocken with my beautiful wife, Brittany. I enjoy playing and watching sports, hanging out with family and friends and exploring the outdoors.
            </p>
            <p>
              Before coding, I attended Holy Ghost Preparatory School in Bensalem, PA and Gwynedd Mercy University in Ambler, PA, earning my degree in Business Administration. My first job of out college happened to be technology based as a Quality Assurance Analyst. From there, my passion for technology heightened as I continued to advance in the IT field. In this field, you commit to be being a lifelong learner which is something I thoroughly enjoy. In conjunction with that notion, I obtained a certificate from the University of Pennsylvania in Full Stack Development. With my new knowledge, I am excited to build meaningful web applications!
            </p>
            <p>
              With all that being said, please click around, contact me using one of the buttons above, or use the Portfolio tab above to view my best work! Feel free to leave me any constructive criticism as I am always looking to improve. Happy coding! I look forward to connecting with you!
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="headingFont">Skills</h1>
            <br></br>
            <SkillBar skills={skills} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
