import "./style.css";
import { testimonialMenu } from "./MenuList";
import { Container, Row, Col } from "react-bootstrap";

const Testimonial = () => {
  return (
    <section className="testimonial-body">
      <Container>
        <Row>
          <Col md={5} sm={12} className="coloumShortpata">
            <div className="aboutTestimonial">
              <h2>
                We believe in <br />
                Customer Satisfaction
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in coluptate velit esse
                cullum dolore eu fugiat nulla pariatur Excepteur sint occaecat
                cupidatat.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex ms-1 justify-context-center">
          {testimonialMenu.map(({ icon, heading, cardIntro, id }, index) => {
            return (
              <Col md={4} sm={12} key={index}>
                <div className="col-md-4 cardInfo">
                  <h2 className="numberCard">{id}</h2>
                  <div className="card businessInfoCard">
                    <div className="card-body">
                      {icon}
                      <h5 className="card-title py-3">{heading}</h5>
                      <p className="card-text mb-4">{cardIntro}</p>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
export default Testimonial;