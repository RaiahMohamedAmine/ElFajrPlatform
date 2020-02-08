import React, {Component} from 'react' ;
import GetMalade from '../middleware/GetMalade'
import DeleteMalade from '../middleware/DeleteMalade';
import ModifyMalade from'../middleware/ModifyMalade'; 
import Dialog from './Dialog';
import AddForm from './AddForm';
import { OverlayTrigger, Popover,Button,Image} from 'react-bootstrap';
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
            Maladeclicked: false,
            Adding: false,
            malade : {},
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

    ModifierMalade (e) {  //Submit de L'Ajout d<un malade
        var {id,prenom, nom } = this.refs ;

        var formdata = new FormData() ;
        formdata.append ('id',id.value) ;
        formdata.append ('prenom',prenom.value) ;
        formdata.append ('nom',nom.value) ;
        formdata.append ('PhotoIdentite', this.state.file)

        ModifyMalade (formdata);
    }

    MaladeClicked (IDmalade) { // Quand le user clique ur un malade donne
        console.log (IDmalade)
        this.state.malades.forEach(malade=> {
            if (malade.id===IDmalade) {
                this.setState({
                    Maladeclicked:true,
                    malade : malade
                })
            }
        })
    }

    

    RenderingItem (malade) {
        return (
            <div className ="" key={malade.id} > 
                <Button className="Item" variant="light" onClick= {(e)=> this.MaladeClicked (malade.id)}>
                    <img className="avatar" alt ={"photo de "+ malade.nom} src={ "data:image/jpeg;base64,"+malade.PhotoIdentite.data} roundedCircle/>
                    <h6 className="name">
                        {malade.nom + " " + malade.prenom} 
                    </h6>
                    <p className ="soustitre">
                        {malade.id+ ", "}
                    </p>
                </Button>
            </div>
        )
    }

    render () {

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
        return (
            <div>
                <input className="input100" placeholder="Rechercher Compte" type ="text" onChange= { (e)=> this.OnChange(e.target.value)}/> 
                <ul>
                    {this.state.malades.map(malade => {
                        return (
                       /* <div key={malade.id}>
                            <img alt={"Photo de " +malade.nom} src={ "data:image/jpeg;base64,"+malade.PhotoIdentite.data} style={{height: 160, width:160}} />
                            <button key={malade.id} id={malade.id} onClick={(e)=> this.MaladeClicked (e.target.id)}> {malade.id} {malade.prenom} {malade.nom} </button> 
                        </div>*/
                        this.RenderingItem (malade)
                        )
                    })
                    }
                </ul>
                    <Button variant="success" onClick ={(e)=> this.setState ({Adding:true})}>Ajouter Malade</Button>
                
                <br/><br/><br/>
                <OverlayTrigger trigger="click" placement="right" overlay={popModifer}>
                    <Button variant="success">Modifier Malade</Button>
                </OverlayTrigger>
                <br/><br/><br/>
                <Dialog isOpen={this.state.Maladeclicked} onClose= {e=> this.setState({Maladeclicked: false})} malade= {this.state.malade}/>
                <AddForm isOpen={this.state.Adding} onClose ={e=> this.setState({Adding : false})}/>
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