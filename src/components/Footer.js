import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo1.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import Pdf from '../assets/docs/JosueMajanoResume 2023.pdf';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text sm-end">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/josue-majano" target="_blank"><img src={navIcon1}/></a>
                        <a href="https://github.com/josuemajano" target="_blank"><img src={navIcon2}/></a>
                        <a href={Pdf} target="_blank"><img src={navIcon3}/></a>
                        </div>
                        <p>Copyright 2023. All Right Reserved by Josue Majano.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}