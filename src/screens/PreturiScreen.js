import React from "react";
import {withRouter} from "react-router";
import "./PreturiScreen.css"
import DetaliiPreturi from "../components/DetaliiPreturi";

const PreturiScreen = () => {
    return (
        <div>
            <div
                className="primulDiv"
                style={{
                    backgroundImage: 'url("https://wallpapercave.com/wp/wp1946275.jpg")',
                }}>
                <h1> PRETURI </h1>
                <p>Misiunea noastra este simpla: servicii de cea mai buna calitate la preturi pe <br/> care sa ti le
                    poti permite luna de luna</p>
            </div>
            <div className="alDoileaDiv">
                <h1>PRETURI FRIZERIE</h1>
                <DetaliiPreturi serviciu="Tuns zero & Barba" subserviciu=" tuns/spalat" pret="65 lei"/>
                <DetaliiPreturi serviciu="Pachet tuns" subserviciu=" tuns/spalat/frezat" pret="80 lei"/>
                <DetaliiPreturi serviciu="Pachet foarfeca" subserviciu=" tuns/spalat/masaj" pret="85 lei"/>
                <DetaliiPreturi serviciu="Pachet frizerie " subserviciu=" tuns/spalat" pret="40 lei"/>
                <DetaliiPreturi serviciu="Barba" subserviciu=" tuns/spalat" pret="40 lei"/>
                <DetaliiPreturi serviciu="Tuns copil" subserviciu=" tuns/spalat" pret="60 lei"/>
                <DetaliiPreturi serviciu="Abonament 2 X Frizerie" subserviciu=" tuns/spalat" pret="80 lei"/>
            </div>

        </div>
    )
}

export default withRouter(PreturiScreen);
