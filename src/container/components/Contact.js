import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { GrFormCheckmark } from "react-icons/gr";
// Here we import all Icon from Social Media

import FormComponent from "./FormComponent";
// Here we import validation Form

const Contact = () => {
  return (
    <footer className="contact-body">
      <Container className="py-5">
        <Row className="d-flex justify-context-center">
          <Col md={4} sm={10} className="footer-intro">
            <h3>Get in touch</h3>
            <span>
              We can ensure reliability, low cost fares and most important, with
              safely and confort in mind.
            </span>
            <p>
              Etiam sit amet convallis erat - class aptent taciti sociosqu ad
              litora torwuent per conubia! maecenas gravida lacus.Lorem etiam
              sit amet convallis erat.
            </p>
            <div className="d-flex">
              <div className="socialIcon">
                <BsFacebook className="ftipy" />
              </div>
              <div className="socialIcon">
                <AiFillTwitterCircle className="ftipy" />
              </div>
              <div className="socialIcon">
                <AiFillInstagram className="ftipy" />
              </div>{" "}
              <div className="socialIcon">
                <FaPinterestP className="ftipy" />
              </div>{" "}
              <div className="socialIcon">
                <BsYoutube className="ftipy" />
              </div>
            </div>
          </Col>
          <Col md={3} sm={10} className="location-intro">
            <div className="contactCategory">
              <h4>Call us</h4>
              <p>1 (234) 567-891</p>
              <p>1 (234) 987-654</p>
            </div>
            <div className="contactCategory">
              <h4>Location</h4>
              <p>121, Rock Sreet, 21 Avenue,</p>
              <p>New York, NY 92103-9000</p>
            </div>
            <div className="contactCategory">
              <h4>Our top services</h4>
              <p>
                <GrFormCheckmark /> Local transfers
              </p>
              <p>
                <GrFormCheckmark /> Airport Transfers
              </p>
              <p>
                <GrFormCheckmark /> Excursions and Tours
              </p>
            </div>
          </Col>
          <Col md={5} sm={12} className="form-section">
            <FormComponent />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Contact;
