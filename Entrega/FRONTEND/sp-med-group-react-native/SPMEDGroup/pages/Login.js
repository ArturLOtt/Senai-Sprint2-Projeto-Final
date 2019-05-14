import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import apiConection from "../services/apiConection"

class Login extends Component {
        constructor(props) {
            super(props);
            this.state = { 
            email: "",
            senha: "", 
            token: AsyncStorage.getItem("user-token")
        }
    }

    static navigationOptions = {
        title: 'Login'
    };

    loginAction = async() => {
        try {
            const post = await apiConection.post("/login", {
                email: this.state.email,
                senha: this.state.senha
            });
                const tokenUsuario = post.data.token;
                await AsyncStorage.setItem("user-token", tokenUsuario);
                // this.props.navigation.navigate("Projetos propostos");
            } catch (erro) {
                erro = this.state.mensagemErro;
                console.warn(erro);
            }
    }

    authenticationAction() {
        if (this.state.token !== null) {
            // this.props.navigation.navigate("Projetos propostos");
        }
    }

    componentDidMount() { this.authenticationAction() }

    render(){
        return(
          
            <View>
                <View>
                <TextInput
                    placeholder="email"
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder="Introduza a tua senha"
                    secureTextEntry={true} 
                    onChangeText={senha => this.setState({ senha })}
                />
                <TouchableOpacity
                    onPress={this.loginAction} >
                        <Text>Entrar</Text>
                </TouchableOpacity>
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create(
    {

    }
)


export default Login;