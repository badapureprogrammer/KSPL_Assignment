import "./style.css";
import screenImage from "../images/phoneImg.png";

const Home = () => {
  return (
    <div className="home-body">
      <div className="container">
        <div className="row colCombiner py-5">
          <div className="col-md-5 mt-2 py-5 shortPara">
            <span>ABOUT US</span>
            <h2>1000+ customer using Our application</h2>
            <p>Powerful and flexible them</p>
            <p>Simple, transparent pricing</p>
            <p>Build tools and full documention</p>
            <button className="mainbutton">READ MORE</button>
          </div>
          <div className="col-5 mt-2 imageScreen">
            <img src={screenImage} alt="whatappImage" />
          </div>
        </div>
        <div className="col-md-6 py-4 introBrand">
          <h2>Quick & Easy Process</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nilla pariatur.Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <button className="mainbutton">Read More</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
