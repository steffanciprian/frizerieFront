import React from "react";
import {Facebook, Instagram} from "@material-ui/icons";
import IconButton from '@material-ui/core/IconButton';

const Footer = () => {
    return (
        <div className="alTreileaDiv" style={{}}>
            <div className="divPolitica"
                 style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h3 className="h1">Politica de confidentialitate</h3>
                <h3 className="h1"> Politica de cookie</h3>

            </div>
            <div style={{flexDirection: 'row'}}>
                <IconButton>
                    <Facebook />
                </IconButton>
                <IconButton>
                    <Instagram/>
                </IconButton>
            </div>
            <div className="divContactProgram" style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <div style={{margin: 50}} className='politica'>
                    <h2 className="h">CONTACT</h2>
                    <h4 className="h">Zona Piata Dorobanti:</h4>
                    <h4 className="h">Radu Beller 25</h4>
                    <h4 className="h"> Sector 1, Bucuresti</h4>
                    <h4 className="h"> Programari: 0730 665 468</h4>
                </div>
                <div style={{margin: 50}}  className='politica'>
                    <h2 className="h">PROGRAM</h2>
                    <h4 className="h">Luni-Vineri</h4>
                    <h4 className="h">11 AM - 9 PM</h4>
                    <h4 className="h"> Sambata</h4>
                    <h4 className="h"> 9:30 AM - 6:30 PM</h4>
                </div>
            </div>
        </div>

    )
}

export default Footer;
