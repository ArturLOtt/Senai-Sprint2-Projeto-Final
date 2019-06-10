import React, { Component } from 'react';
import Axios from 'axios'
import BottonLine from '../../components/Botton/BottomLine';
import TopLine from '../../components/Top/TopLine';

class PatientPage extends Component {
    constructor(props) {
    super(props);
    this.state = {
        listaPacientes: []
    }
}

    componentDidMount() {
        this.CarregarPacientes();
    }

    CarregarPacientes(event) {
        Axios.get('https://spmedgroups2.azurewebsites.net/api/do-paciente', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "bearer " + localStorage.getItem('usuario-spmedgroup')
            }
        })
        .then(data => {
            this.setState({ listaPacientes: data.data })
        })
    }

    render() {

        return (
<div>
<TopLine></TopLine>
<div>
    <p>Patient</p>

    <table className="">
        <thead>
            <tr> Nome </tr>
            <tr> Telefone </tr>
            <tr> Data de Nascimento </tr>
            <tr> Rg </tr>
            <tr> CPF </tr>
            <tr> Endereço </tr>
        </thead>
        <tbody>
            {
                this.state.listaPacientes.map(Element => {
                    return (
                        <tr key={Element.id}>
                            <td>{Element.nome}</td>
                            <td>{Element.telefone}</td>
                            <td>{Element.dataNascimento}</td>
                            <td>{Element.rg}</td>
                            <td>{Element.cpf}</td>
                            <td>{Element.endereco}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>


</div>
<BottonLine></BottonLine>
</div>
        );
    }
}

export default PatientPage;

