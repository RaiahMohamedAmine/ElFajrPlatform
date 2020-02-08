import React, {Component} from 'react';
import {Image, Row,Col} from 'react-bootstrap';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import DeleteMalade from '../middleware/DeleteMalade';
import './dialog.css';

class Dialog extends Component {
    constructor (props)
    {
        super (props);
    }

    SupprimerMalade (IdMalade) {  //Submit de L'Ajout d<un malade
        var malade= {
            id :IdMalade
        } ;
        console.log(IdMalade);
        DeleteMalade (malade);
        document.location.reload(true);
        //alert("Le Malade a bien ete Supprimer")
    }

    render(){
        let dialog ;
        if (!this.props.isOpen) 
            dialog=null;
        else{
             dialog = (
            <div className="dialogStyles"> 
                        <div className="dialogCloseButton" onClick ={e=> this.SupprimerMalade(this.props.malade.id)}><i className ="fa fa-trash"></i></div>
                    
                         <div className="dialogCloseButton" onClick={this.props.onClose }> x</div>
                    
                <Row>
                    <Col>
                        <div className="Name">
                            {this.props.malade.nom + " " + this.props.malade.prenom}
                        </div>
                    </Col>
                    <Col>
                        <Image className="Avatar" alt ={"photo de "+ this.props.malade.nom} src={ "data:image/jpeg;base64,"+this.props.malade.PhotoIdentite} roundedCircle/>
                    </Col>
                </Row>
            </div>) 
        }
        return dialog
    }
}


export default Dialog