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
import Footer from "./components/Footer";
import ProgramareScreen from "./screens/ProgramareScreen";

ReactDOM.render(
    <BrowserRouter>
        <NavbarComponent routes={Routes}/>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/preturi" component={PreturiScreen}/>
            <Route exact path="/programare" component={ProgramareScreen}/>
        </Switch>
        <Footer/>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
