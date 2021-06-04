import React from "react";
import {withRouter} from "react-router";
import "./PreturiScreen.css"
import DetaliiPreturi from "../components/DetaliiPreturi";
import {FacebookLoginButton, InstagramLoginButton} from "react-social-login-buttons";

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
        </div>
    )
}

export default withRouter(PreturiScreen);
