import React, {Component} from 'react' ;
import GetMalade from './middleware/getMalade'

class SearchBar extends Component {
    constructor (props)  {
        super(props)
        this.OnChange = this.OnChange.bind(this);
        this.state = {
            text: "Amine" ,
            malades : []
        }
    }
    OnChange (Compte) {
        console.log (Compte)
         GetMalade ({
            key : Compte
        }).then (data => {
            this.setState ({
                malades:data
            });
            console.log (this.state.malades)
        })
    }
    render () {
        return (
            <div>
                <input placeholder="Rechercher Compte" type ="text" onChange= { (e)=> this.OnChange(e.target.value)}/> 
                <ul>
                    {this.state.malades.map(malade => {
                        return (
                        <li key={malade._id}> {malade.id} {malade.prenom} {malade.nom} </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
    
}
    
export default SearchBar ;