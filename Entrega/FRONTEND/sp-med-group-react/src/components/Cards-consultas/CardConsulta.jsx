import React from 'react'
import InfoConsultas from './InfoConsultas'

export default props => {
    return (
        <div className="card">
            <InfoConsultas titulo="Especialidade" info={props.especialidade}/>
            <InfoConsultas titulo="Doutor(a)" info={props.medico}/>
            <div className="data-hora">
                <InfoConsultas titulo="Data" info={props.data}/>
                <InfoConsultas titulo="Hora" info={props.hora}/>
            </div>
            <InfoConsultas titulo="Status" info={props.status}/>
        </div>
    )
}