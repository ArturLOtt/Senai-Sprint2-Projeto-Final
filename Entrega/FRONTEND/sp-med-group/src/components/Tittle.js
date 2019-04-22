import React, {Component} from 'react'

class Tittle extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <h1 className="conteudoPrincipal-cadastro-titulo">
              {this.props.titulo}
            </h1>
        );
    }
}

export default Tittle;