import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import PreturiScreen from "./screens/PreturiScreen";
import NavbarComponent from "./components/NavbarComponent";
import {Routes} from "./Routes";
import {FacebookLoginButton, InstagramLoginButton} from "react-social-login-buttons";

ReactDOM.render(
    <BrowserRouter>
        <NavbarComponent routes={Routes}/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/preturi" component={PreturiScreen}/>
        </Switch>
        <div className="alTreileaDiv">
            <div className="divPolitica">
                <h3>Politica de confidentialitate</h3>
                <h3>Politica de cookie</h3>
                <FacebookLoginButton text='' style={{width: 30, height: 30}} iconColor='grey' iconSize={15}/>
                <InstagramLoginButton text='' style={{width: 30, height: 30}} iconColor='grey' iconSize={15}/>
            </div>
            <div className="divContactProgram">
                <div>
                    <h2 className="h">CONTACT</h2>
                    <h4 className="h">Zona Piata Dorobanti:</h4>
                    <h4 className="h">Radu Beller 25</h4>
                    <h4 className="h"> Secotor 1, Bucuresti</h4>
                    <h4 className="h"> Programri: 0730 665 468</h4>
                </div>
                <div><h2 className="h">PROGRAM</h2>
                    <h4 className="h">Luni-Vineri</h4>
                    <h4 className="h">11 AM - 9 PM</h4>
                    <h4 className="h"> Sambata</h4></div>
                <h4 className="h"> 9:30 AM - 6:30 PM</h4>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
