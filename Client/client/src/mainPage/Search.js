import React, {Component} from 'react' ;
import GetMalade from '../middleware/GetMalade'
import AddMalade from '../middleware/AddMalade'
import DeleteMalade from '../middleware/DeleteMalade';
import ModifyMalade from'../middleware/ModifyMalade'; 

import { OverlayTrigger, Popover,Button} from 'react-bootstrap';
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
/*import {
    faClock
    } from '@fortawesome/free-solid-svg-icons'*/
import './css.css'

class SearchBar extends Component {
    constructor (props)  {
        super(props)
        this.state = {
            text: "" ,
            malades : [],
            file : {},
        }
    }
    
    OnChange (Compte) {
         GetMalade ({
            key : Compte
        }).then (data => {
            Compte ==="" ? this.setState ({malades: []}):
            this.setState ({
               malades:data 
            });
        })
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

    ModifierMalade (e) {  //Submit de L'Ajout d<un malade
        var {id,prenom, nom } = this.refs ;

        var formdata = new FormData() ;
        formdata.append ('id',id.value) ;
        formdata.append ('prenom',prenom.value) ;
        formdata.append ('nom',nom.value) ;
        formdata.append ('PhotoIdentite', this.state.file)

        ModifyMalade (formdata);
    }

    SupprimerMalade (e) {  //Submit de L'Ajout d<un malade
        var {id} = this.refs ;
        var malade= {
            id :id.value
        } ;
        console.log(malade);
        DeleteMalade (malade);
    }

    MaladeClicked (IDmalade) { // Quand le user clique ur un malade donne
        this.state.malades.forEach(malade=> {
            if (malade.id===IDmalade) {
                alert (malade.id +" " + malade.prenom +" " +malade.nom+malade.PhotoIdentite);
                return;
            }
        })
    }

    PhotoOnChange(e) {
        console.log (e.target.name)
        this.setState ({
            file : e.target.files[0]
         });
    }


    render () {
          const popAjouter = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Forumulaire</Popover.Title>
              <Popover.Content>
                <form onSubmit={ (e) => this.Submit (e)}>
                   <div>
                        id : <input type="text" id="id" name="id" ref="id" />
                    </div>
                    <div>
                        Firstname : <input type="text" id="firstname" name="prenom"  ref="prenom" />
                    </div>
                    <div>  
                        Lastname : <input type="text" id="lastname" name="nom" ref="nom"/>
                    </div>
                    <input type="file" name="PhotoIdentite" onChange= {(e)=>this.PhotoOnChange (e)} /> <br/><br/>
                        <input type="submit" value="Submit"/>
                </form>
              </Popover.Content>
            </Popover>
          );

          const popModifer = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Forumulaire</Popover.Title>
              <Popover.Content>
                <form onSubmit={ (e) => this.ModifierMalade (e)}>
                   <div>
                        id : <input type="text" id="id" name="id" ref="id" placeholder="Id malade "/>
                    </div>
                    <div>
                        Firstname : <input type="text" id="firstname" name="prenom"  ref="prenom" placeholder="nv Prenom"/>
                    </div>
                    <div>  
                        Lastname : <input type="text" id="lastname" name="nom" ref="nom" placeholder="Nv NOM "/>
                    </div>
                    <input type="file" name= "PhotoIdentite" placeholder="Nvl Photo D'identite "  onChange= {(e)=>this.PhotoOnChange (e)} /> <br/><br/>
                        <input type="submit" value="Submit"/>
                </form>
              </Popover.Content>
            </Popover>
          );

          const popSupprimer = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Forumulaire</Popover.Title>
              <Popover.Content>
                <form onSubmit={ (e) => this.SupprimerMalade (e)}>
                   <div>
                        id : <input type="text" id="id" name="id" ref="id" placeholder="Id malade "/>
                    </div>
                        <input type="submit" value="Submit"/>
                </form>
              </Popover.Content>
            </Popover>
          );
        return (
            <div>
                <input className="input100" placeholder="Rechercher Compte" type ="text" onChange= { (e)=> this.OnChange(e.target.value)}/> 
                <ul>
                    {this.state.malades.map(malade => {
                        return (
                        <div key={malade.id}>
                            <img alt={"Photo de " +malade.nom} src={ "data:image/jpeg;base64,"+malade.PhotoIdentite.data} style={{height: 160, width:160}} />
                            <button key={malade.id} id={malade.id} onClick={(e)=> this.MaladeClicked (e.target.id)}> {malade.id} {malade.prenom} {malade.nom} </button> 
                        </div>
                        )
                    })
                    }
                </ul>
                <OverlayTrigger trigger="click" placement="right" overlay={popAjouter}>
                    <Button variant="success">Ajouter Malade</Button>
                </OverlayTrigger>
                <br/><br/><br/>
                <OverlayTrigger trigger="click" placement="right" overlay={popModifer}>
                    <Button variant="success">Modifier Malade</Button>
                </OverlayTrigger>
                <br/><br/><br/>
                <OverlayTrigger trigger="click" placement="right" overlay={popSupprimer}>
                    <Button variant="success">Supprimer Malade</Button>
                </OverlayTrigger>
            </div>
           /* <div >
                 <h1 >Forumulaire </h1>
                <form /*action="/ajouter" method="POST" onSubmit= {(e)=> this.Submit (e)}>
                    <div>
                        id : <input type="text" id="id" name="id" ref="id" />
                    </div>
                    <div>
                        Firstname : <input type="text" id="firstname" name="prenom"  ref="prenom" />
                    </div>
                    <div>  
                        Lastname : <input type="text" id="lastname" name="nom" ref="nom"/>
                    </div>
                        <input type="submit" value="Submit"/>
                </form>

                <form action="/get" method="GET">
                    <input type="submit" value="Show DB"/>
                </form>
            </div>*/
            
        )
    }
    
}
    
export default SearchBar ;