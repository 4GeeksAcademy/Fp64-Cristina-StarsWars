import React from "react";
export const CardPersonajes = ({personaje}) => {
    return (
        <div className="card" >
            <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}