import React, {Component} from 'react';
import {Image, Row,Col} from 'react-bootstrap';
import './dialog.css';
import './css.css'; 
import AddMalade from '../middleware/AddMalade';

class AddForm extends Component {
    constructor (props)
    {
        super (props);
        this.state={
            file: {}
        }
    }

    Submit (e) {  //Submit de L'Ajout d<un malade
    
        var {id,prenom, nom } = this.refs ;
        console.log (this.state.file)
      //  e.preventDefault ();
        var formdata = new FormData() ;
        formdata.append ('id',id.value) ;
        formdata.append ('prenom',prenom.value) ;
        formdata.append ('nom',nom.value) ;
        formdata.append ('PhotoIdentite', this.state.file)

        AddMalade (formdata);
    }

    PhotoOnChange(e) {
        console.log (e.target.name)
        this.setState ({
            file : e.target.files[0]
         });
    }
    
    render(){
        let form ;
        if (!this.props.isOpen) form =null;
        else{
            form =( 
                <div className= "dialogStyles">
                <div className="dialogCloseButton" onClick={this.props.onClose }> x</div>
                    <form onSubmit={ (e) => this.Submit (e)}>
                        <div className = "wrap-input100 validate-input">
                            <input className="input100" type="text" placeholder ="ID du Malade" name="id" ref="id" />
                        </div>
                        <div className = "wrap-input100 validate-input">
                             <input type="text" className="input100" placeholder ="Prenom du Malade" name="prenom"  ref="prenom" />
                        </div>
                        <div>  
                           <input type="text" className="input100" placeholder ="Nom du Malade" name="nom" ref="nom"/>
                        </div>
                        <div>
                           <input type="date" className="input100" placeholder ="Date de Naissance du Malade" name ="dateNaissance" ref="dateNaissance" />
                        </div>

                        <div>
                            <input type="text" className="input100" placeholder ="Adresse du Malade" name ="adresse" ref="adresse" />
                        </div>

                        <div>
                            <select ref="situationFamilliale" className="input100" placeholder="Situation Familliale">
                                <option> Célibataire</option>
                                <option> Marié(e)</option>
                                <option> Divorcé(e)</option>
                                <option> Veuf (ve)</option>
                            </select>
                        </div>

                        <div >
                            Assuré(e) :
                                        <input type="radio" name="Assure" value="Oui"/> Oui 
                                        <input type="radio" name="Assure" value="Non"/> Non <br/>
                            
                        </div>

                        <div>
                             <input type="text" className="input100" placeholder="Metier du malade" ref="fonction" />
                        </div>

                        <div>
                            <input type="text" className="input100" ref="Tel"/>
                        </div>
                        
                        <div>
                            PhotoCopie Carte d'itentite : <input type="file" name="PhotoIdentite" onChange= {(e)=>this.PhotoOnChange (e)} />
                        </div>

                        <div>
                            Photocopie de la carte d'assurance <input type="file" name="CarteAssurance" onChange= {(e)=>this.PhotoOnChange (e)} />
                        </div>

                        <div>
                            Type de Cancer : <select ref="type" className="input100">
                                <option> </option>
                                <option> Sein </option>
                                <option> Prostate </option>
                                <option> Colon </option>
                                <option> Estomac </option>
                                <option> Poumon </option>
                            </select>
                        </div> 
                        <div>
                            Medecin Traitant : <input type="text" ref="Medecin"/>
                        </div>
                        <br/><br/>
                            <input type="submit" value="Submit"/>
                    </form>
                </div>
            );
        }
         return form;

    }
}


export default AddForm