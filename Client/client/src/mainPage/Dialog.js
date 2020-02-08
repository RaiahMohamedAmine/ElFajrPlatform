import React, {Component} from 'react';
import {Image, Row,Col} from 'react-bootstrap';
import './dialog.css';

class Dialog extends Component {
    constructor (props)
    {
        super (props);
    }

    render(){
        let dialog ;
        if (!this.props.isOpen) 
            dialog=null;
        else{
             dialog = (
            <div className="dialogStyles"> 
                <div className="dialogCloseButton" onClick={this.props.onClose }> x</div>
                <Row>
                    <Col>
                        <div className="Name">
                            {this.props.malade.nom + " " + this.props.malade.prenom}
                        </div>
                    </Col>
                    <Col>
                        <Image className="Avatar" alt ={"photo de "+ this.props.malade.nom} src={ "data:image/jpeg;base64,"+this.props.malade.PhotoIdentite.data} roundedCircle/>
                    </Col>
                </Row>
            </div>) 
        }
        return dialog
    }
}


export default Dialog