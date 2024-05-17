import React from "react";
export const Cardplanetas = ({planetas}) => {
    return (
        <div className="card" >
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planetas.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{vehiculo.name}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
