import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillLinkedin } from "react-icons/ai";
import customerImg from "../images/customerOne.jpg";

const About = () => {
  return (
    <main className="about-body">
      <Container>
        <Row className="d-flex justify-content-center py-5">
          <Col md={4} sm={10} className="aboutIntro">
            <h1>
              About <br />
              Us
            </h1>
            <p>
              Sample text. Click to Egestas egestas fringilla phasellus faucibus
              scelerisque eleifend donec pretium vulputate. Pharetra magna ac
              placerat vestibulum. Quam lacus suspendisse faucibus interdum
              posuere lorem.Egestas tellus rutrum tellus pellentesque eu
              tincidunt.Neque vitae tempus quam pellentesque nec. Vel elit
              scelerique maruris pellentesque pulvinar pellentesque habitant
              morbi. Interdum velit euismod in pellentesque massa placerat duis.
            </p>
            <p>
              Quis viverra nibh cras pulvinar mattis. Ornare arcu dui vivamus
              arcu felis bibendum ut tristique. pellentesque eu tincidunt tortor
              aliquam nulla facilisi cras fermentum odio. Dignissim diam quis
              enim lobortis scelerique. Tellus molestie nunc non blandit massa
              enim. the text.
            </p>
            <span>
              Image from{" "}
              <abbr
                style={{ borderBottom: "2px solid #109083", cursor: "pointer" }}
              >
                Freepik
              </abbr>
            </span>
          </Col>
          <Col md={6} sm={10} className="customerReviewSection">
            <div className="customerSection">
              <img src={customerImg} alt="customerReview" />
            </div>
            <p>
              I help componies tincidunt tortor aliquam nulla facilisi cras
              fermentum odio.
            </p>
            <button className="linkdinBtn">
              <AiFillLinkedin style={{ fontSize: "20px", margin: "0px 5px" }} />
              Find me on Linkedin
            </button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default About;