import React, {Component} from "react";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frizeri: [],
        }
    }

    render() {
        return (
            <div>
                <p> Salut, frizeri!</p>
                <p> Salut, {this.state.frizeri[0]}</p>
                <p> Salut, {this.state.frizeri[1]}</p>
                <p> Salut, {this.state.frizeri[2]}</p>
            </div>
        )
    }
}

export default LoginScreen;
