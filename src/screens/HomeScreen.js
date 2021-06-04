import React, {Component} from "react";
import './HomeScreen.css';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frizeri: [],
        }
    }

    render() {
        return (
            <div className='container-frizeri'>
                {/*<h1 style={{color: 'red',fontWeight:'bold'}}> Salut, frizeri!</h1>*/}
            </div>
        )
    }
}

export default HomeScreen;
