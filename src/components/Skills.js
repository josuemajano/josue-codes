import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import skill1 from "../assets/img/javascript.png";
import skill2 from "../assets/img/react.png";
import skill3 from "../assets/img/python.png";
import skill4 from "../assets/img/css-icon.png";
import skill5 from "../assets/img/html.png";
import skill6 from "../assets/img/nodejs.png";
import skill7 from "../assets/img/npm.png";
import skill8 from "../assets/img/postgresql.png";
import skill9 from "../assets/img/express.png";
import skill10 from "../assets/img/redux.png";
import skill11 from "../assets/img/bootstrap.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Some Random Text</p>
                            <Carousel responsive ={responsive} infinite ={true} className="skill-slider">
                                <div className="item">
                                    <img src={skill1} alt="Image"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="Image"/>
                                    <h5>React.js</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="Image"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="Image"/>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt="Image"/>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={skill6} alt="Image"/>
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={skill7} alt="Image"/>
                                    <h5>NPM</h5>
                                </div>
                                <div className="item">
                                    <img src={skill8} alt="Image"/>
                                    <h5>Postgres</h5>
                                </div>
                                <div className="item">
                                    <img src={skill9} alt="Image"/>
                                    <h5>Express</h5>
                                </div>
                                <div className="item">
                                    <img src={skill10} alt="Image"/>
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={skill11} alt="Image"/>
                                    <h5>Bootstrap</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}