import React from "react";

const DetaliiPreturi = (props) => {
    return (
        <div>

            <br/>
            <h3 style={{fontWeight: 'normal'}}>{props.serviciu}</h3>
            <h4 style={{fontWeight: 'normal'}}>{props.subserviciu}</h4>
            <h2 style={{fontWeight: 'normal'}}>{props.pret}</h2>
        </div>
    )
}

export default DetaliiPreturi;
