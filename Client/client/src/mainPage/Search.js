import React, {Component} from 'react' ;
import GetMalade from '../middleware/getMalade'
import AddMalade from '../middleware/AddMalade'
import DeleteMalade from '../middleware/DeleteMalade';
import ModifyMalade from'../middleware/ModifyMalade'
class SearchBar extends Component {
    constructor (props)  {
        super(props)
        this.OnChange = this.OnChange.bind(this);
        this.Submit = this.Submit.bind(this);
        this.state = {
            text: "Amine" ,
            malades : []
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
    Submit (e) {
        var {id,prenom, nom } = this.refs ;
        var malade= {
            id :id.value,
            prenom : prenom.value,
            nom :nom.value
        } ;
        console.log(malade);
        ModifyMalade (malade)/*.then (data => {
            this.setState ({
                malades : data
            })
        });*/
    }
    render () {
        return (
           /* <div>
                <input placeholder="Rechercher Compte" type ="text" onChange= { (e)=> this.OnChange(e.target.value)}/> 
                <ul>
                    {this.state.malades.map(malade => {
                        return (
                        <li key={malade._id}> {malade.id} {malade.prenom} {malade.nom} </li>
                        )
                    })
                    }
                </ul>

            </div>*/
            <div >
                 <h1 >Forumulaire </h1>
                <form /*action="/ajouter" method="POST"*/ onSubmit= {(e)=> this.Submit (e)}>
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
            </div>
            
        )
    }
    
}
    
export default SearchBar ;