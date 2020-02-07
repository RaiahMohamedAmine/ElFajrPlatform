import React, {Component} from 'react' ;
import Header from './Header';
import Search from './Search';


class Main extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Search></Search>
            </div>
        )
    }
}

export default Main;