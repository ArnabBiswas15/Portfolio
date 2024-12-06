import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arnab Biswas </span>
            from <span className="purple"> Burdwan, India.</span>
            <br />
            I am a Web developer who is looking for a full-time job in order to enhance my skills and gain more experience and 
knowledge..
            <br />
            I have pursuing Bachelor of Engineering in Computer Science at UIT
            Burdwan.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Arnab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
