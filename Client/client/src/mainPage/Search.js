import React, {Component} from 'react' ;
import GetMalade from '../middleware/GetMalade'
/*import AddMalade from '../middleware/AddMalade'
import DeleteMalade from '../middleware/DeleteMalade';*/
import ModifyMalade from'../middleware/ModifyMalade'; 
import { OverlayTrigger, Popover,Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faClock
    } from '@fortawesome/free-solid-svg-icons'
import './css.css'

class SearchBar extends Component {
    constructor (props)  {
        super(props)
        this.OnChange = this.OnChange.bind(this);
        this.Submit = this.Submit.bind(this);
        this.MaladeClicked = this.MaladeClicked.bind(this);
        this.state = {
            text: "" ,
            malades : [],
            rdv : [
                {
                    time : "25/12/2019"
                },
                {
                    time : "25/12/2019"
                },
                {
                    time : "25/12/2019"
                }
            ]
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
        var malade= {
            id :id.value,
            prenom : prenom.value,
            nom :nom.value
        } ;
        console.log(malade);
        ModifyMalade (malade);
    }

    MaladeClicked (IDmalade) { // Quand le user clique ur un malade donne
        GetMalade({
            key :IDmalade
        }).then( data=> {
            data.forEach(d => {
                alert (d.id +" " + d.prenom +" " +d.nom)
            });
        })
    }

    render () {

       /* const popover = (
            <Popover id="popover">
              <Popover.Title as="h3">Prochains Rendez-Vous :</Popover.Title>
              <Popover.Content>
                <div> 
                    <ul>
                        {this.state.rdv.map (r=> <li key={r.id}> {r.time}</li>)}
                    </ul>
                </div>
              </Popover.Content>
            </Popover>
          );*/
          const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Popover right</Popover.Title>
              <Popover.Content>
                And here's some <strong>amazing</strong> content. It's very engaging.
                right?
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
                            <button key={malade.id} id={malade.id} onClick={(e)=> this.MaladeClicked (e.target.id)}> {malade.id} {malade.prenom} {malade.nom} </button> 
                        </div>
                        )
                    })
                    }
                </ul>
                <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                    <Button variant="success">Click me to see</Button>
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