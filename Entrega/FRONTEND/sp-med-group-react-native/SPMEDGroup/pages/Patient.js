import React, { Component } from "react";

class Patient extends Component {
    constructor(){
        super();
        this.state= {
            listaConsultas: [],
            title: "#Usuario#",
            idStatusConsulta : "",
            dataAgendamento: "",
            idMedico: "",
            idPaciente: "",
            descricao: ""
        }
    }




    listaConsultas = async () => {
        const token = await AsyncStorage.getItem("user-token")
        const resposta = await apiService.get("/temas", {
            headers : {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + token
            }
        });
        const dadosDaApi = resposta.data;
        this.setState({ listaConsultas : dadosDaApi });
    }

    render() {
        return (
            <View>
                <View>
                {this.state.listaConsultas.map(function (consultas) {
                                return(
                                    <View key={consultas.id}>
                                        <Text>{consultas.idStatusConsulta}</Text>
                                        <Text>{consultas.dataAgendamento}</Text>
                                        <Text>{consultas.idMedico}</Text>
                                        <Text>{consultas.idPaciente}</Text>
                                        <Text>{consultas.descricao}</Text>
                                    </View>
                                );
                            })}
                </View>
            </View>
        )
    }





}

export default Patient;