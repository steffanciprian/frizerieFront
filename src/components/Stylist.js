import React, {Component} from 'react';
import {Route} from "react-router";

class Stylist extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                scaune:
                    [
                        {name: 'Scaunul lui ciprian'},
                        {name: 'Scaunul elenei'},
                        {name: 'Scaunul lui Ionut'},
                        {name: 'Scaunul lui alexandru'}
                    ],
            }
        console.log(this.state.scaune)
    }

    render() {
        const scauneFromState = this.state.scaune;
        console.log(scauneFromState)
        const mappedScaune =
            scauneFromState.map
            (scaun => <p>{scaun.name}</p>
            )
        return (<section>

            <Route path="/programare/stylist">
                {mappedScaune}
            </Route>
        </section>)
    }
}
export default Stylist;
