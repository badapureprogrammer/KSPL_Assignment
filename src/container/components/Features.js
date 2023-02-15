import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import { imageQuoteList } from "./MenuList";
import { FiArrowRight } from "react-icons/fi";

const Features = () => {
  return (
    <>
      <section className="features-body">
        <Container className="sliderData">
          <h6>FEATURES</h6>
          <p>Our Features & Services.</p>
          <Row className="d-flex justify-content-center">
            {imageQuoteList.map(({ img, title, quote }, index) => {
              return (
                <Col md={3} sm={12} key={index} className="dataQuote">
                  <div className="card imageSection">
                    <div className="imageCard">
                      <img src={img} className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{quote}</p>
                      <button className="mainbutton">MORE</button>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <aside>
        <Container>
          <Row className="d-flex justify-content-center py-5 mx-auto">
            <Col md={5} sm={10} className="appDesignOne px-5">
              <span>App Design</span>
              <h3>Check our latest blog post for more update</h3>
              <p>
                Learn More <FiArrowRight className="arrow" />
              </p>
            </Col>
            <Col md={5} sm={10} className="appDesignTwo px-5">
              <span>App Design</span>
              <h3>Check our latest blog post for more update</h3>
              <p>
                Learn More <FiArrowRight className="arrow" />
              </p>
            </Col>
          </Row>
        </Container>
      </aside>
    </>
  );
};
export default Features;