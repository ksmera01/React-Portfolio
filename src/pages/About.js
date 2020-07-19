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
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              <img src="/assets/headshot.jpg" alt="headshot" height="300px" width="211" align="left" border-radius="50px" hspace="20"></img>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi

            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
              sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
              congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
              vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
              Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
              libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
              eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
              interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
              massa.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Skills</h1>
            <SkillBar skills={skills} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
