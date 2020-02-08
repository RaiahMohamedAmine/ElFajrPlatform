import React, {Component} from 'react';
import { Container, Row,Col, Image } from 'react-bootstrap';
import image from "../assets/Logo.jpg";
//import {faClock} from '@fortawesome/free-solid-svg-icons';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class Header extends Component {
    render() {
        return (
            <div style={{background : "Cyan", height : 100}}>
                    <Container>
                        <Row >
                            <Col> 
                                <Image alt="Logo El Fajr" src={image} height="98" width="100" roundedCircle/>
                            </Col>
                            <Col>
                                <div >
                                    <h2 style ={{color : "White", fontFamily :"Calibry",  }}> Association El Fajr </h2>
                                    <h6 style ={{color : "White", fontFamily :"Calibry",  }}> Bureau Boumerdes </h6>
                                </div>
                            </Col> 
                            <Col>
                                <span className ="float-left"> 
                                     <i className ="fa-rotate-90" />
                                </span>
                            </Col>
                        </Row>
                    </Container>
            </div> 

        )
    }
}


export default Header