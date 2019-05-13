import React from 'react'

export default props => {
    return(
        <div>
            <p className="card-titulo">{props.titulo}</p>
            <p className="card-info">{props.info}</p>
        </div>
    )
}