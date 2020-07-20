import React from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";

function Discover() {
  return (
    <div>
      <Container style={{ marginTop: 30 }} >
        <Row>
          <Col size="md-12">
            <h1 className="headingFont textAlignCenter">My Portfolio</h1>
          </Col>
        </Row>
        <br></br>
        <Row >
          <Col size="md-12">
            <div className="card">
              <img className="card-img-top" src="assets/breakingBread.png" alt="BB"></img>
              <div className="card-body">
                <h5 className="card-title textAlignCenter">Breaking Bread</h5>
                <p className="card-text">A platform that connects restaurants and supermarkets to charitible food organizations to divert excess resources to those who need it most, reduce food waste, and alleviate food insecurity.</p>
              </div>
              <div className="card-body">
                <a href="https://breaking-bread-donate.herokuapp.com/" rel="noreferrer noopener" target="_blank" className="card-link">Deployed Link</a>
                <a href="https://github.com/ksmera01/Breaking-Bread" rel="noreferrer noopener" target="_blank" className="card-link">GitHub Repository</a>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row >
          <Col size="md-12">
            <div className="card">
              <img className="card-img-top" src="assets/eatdaburger.png" alt="Eat"></img>
              <div className="card-body">
                <h5 className="card-title textAlignCenter">Eat Da Burger</h5>
                <p className="card-text">Welcome to Eat Da Burger! This newly designed restaurant app makes it simple to order new burgers on our menu. Once you add a burger to your queue, you can save it for later or devour it! This burger logger was created using MySQL, Node, Express, Handlebars and a homemade ORM.</p>
              </div>
              <div className="card-body">
                <a href="https://frozen-taiga-09763.herokuapp.com/" rel="noreferrer noopener" target="_blank" className="card-link">Deployed Link</a>
                <a href="https://github.com/ksmera01/Eat-Da-Burger" rel="noreferrer noopener" target="_blank" className="card-link">GitHub Repository</a>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row >
          <Col size="md-12">
            <div className="card">
              <img className="card-img-top" src="assets/its5oclock.png" alt="itsFive"></img>
              <div className="card-body">
                <h5 className="card-title textAlignCenter">5 O'Clock Somewhere</h5>
                <p className="card-text">This website will allow the user to enjoy happy hour to the fullest by providing a countdown to happy hour, cocktail recipes, and nearest bars to the user's current location.</p>
              </div>
              <div className="card-body">
                <a href="https://github.com/ksmera01/Its-5OClock-Somewhere" rel="noreferrer noopener" target="_blank" className="card-link">Deployed Link</a>
                <a href="https://github.com/ksmera01/Its-5OClock-Somewhere" rel="noreferrer noopener" target="_blank" className="card-link">GitHub Repository</a>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row >
          <Col size="md-12">
            <div className="card">
              <img className="card-img-top" src="assets/emsSystem.png" alt="EMS"></img>
              <div className="card-body">
                <h5 className="card-title textAlignCenter">Employee Management System</h5>
                <p className="card-text">Welcome to the newly improved Employee Management System! This app makes it easy to manage your employees and view pertinent information about your business in a quick and organized manner. From adding or deleting an employee to managing departments, this system should clean up the mess. To accomplish this javascript, express.js, node.js and mySQL were used to create the finished product.</p>
              </div>
              <div className="card-body">
                <a href="https://github.com/ksmera01/Employee-Management-System" rel="noreferrer noopener" target="_blank" className="card-link">Deployed Link</a>
                <a href="https://github.com/ksmera01/Employee-Management-System" rel="noreferrer noopener" target="_blank" className="card-link">GitHub Repository</a>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row >
          <Col size="md-12">
            <div className="card">
              <img className="card-img-top" src="assets/passwordGenerator.png" alt="password"></img>
              <div className="card-body">
                <h5 className="card-title textAlignCenter">Password Generator</h5>
                <p className="card-text">Using Javascript, I have created a password generator that provides the user a secure password everytime! Upon load of the page, the user will be prompted with questions to determine password length, special characters, numbers, upper case letters and lower case letters. This allows the user to customize their password selection.</p>
              </div>
              <div className="card-body">
                <a href="https://github.com/ksmera01/Password-Generator" rel="noreferrer noopener" target="_blank" className="card-link">Deployed Link</a>
                <a href="https://github.com/ksmera01/Password-Generator" rel="noreferrer noopener" target="_blank" className="card-link">GitHub Repository</a>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row >
          <Col size="md-12">
            <div className="card">
              <img className="card-img-top" src="assets/workDayScheduler.png" alt="workDay"></img>
              <div className="card-body">
                <h5 className="card-title textAlignCenter">Workday Scheduler</h5>
                <p className="card-text">With the power of Bootstrap and Javascript, I have created a work day scheduler that allows the user to keep on track! Please note that in the scheduler, the background of each hour grid will change colors to signify present, past and future hours. Additionally, the user input will stay stored so you can view it when you reload the page!</p>
              </div>
              <div className="card-body">
                <a href="https://github.com/ksmera01/Work-Day-Scheduler" rel="noreferrer noopener" target="_blank" className="card-link">Deployed Link</a>
                <a href="https://github.com/ksmera01/Work-Day-Scheduler" rel="noreferrer noopener" target="_blank" className="card-link">GitHub Repository</a>
              </div>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row >
          <Col size="md-12">
            <div className="card">
              <img className="card-img-top" src="assets/noteTaker.png" alt="noteTaker"></img>
              <div className="card-body">
                <h5 className="card-title textAlignCenter">Note Taker</h5>
                <p className="card-text">Welcome to Note Taker! This app takes in syntax from the user and saves their notes to a panel for future use. Additionally, the user may delete notes as well. To accomplish this, html, javascript, express.js and node.js were used to create the finished product.</p>
              </div>
              <div className="card-body">
                <a href="https://stormy-bayou-40437.herokuapp.com/" rel="noreferrer noopener" target="_blank" className="card-link">Deployed Link</a>
                <a href="https://github.com/ksmera01/Note-Taker" rel="noreferrer noopener" target="_blank" className="card-link">GitHub Repository</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Discover;
