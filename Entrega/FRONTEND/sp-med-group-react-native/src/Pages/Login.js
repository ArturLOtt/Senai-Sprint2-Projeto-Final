import React, { Component } from 'react'
import { StyleSheet, View, TextInput, ActivityIndicator, Image, TouchableOpacity, StatusBar, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import NetInfo from "@react-native-community/netinfo";
import jwt from 'jwt-decode'
import api from '../Services/Api'
import logos2 from '../Assets/Img/logos2.png'

export default class Login extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            loading: false,
            disabled: false,
            connected: ''            
        }
    }


    _realizarLogin = async () => {
        this.setState({ loading: true })
        const resposta = await api.post("/login", {
            email: this.state.email,
            senha: this.state.senha
            });
        
            const token = resposta.data.token;
            await AsyncStorage.setItem("userToken", token);
            this.props.navigation.navigate("MainNavigator");
          };



    // componentWillMount = async () => {
    //     await NetInfo.fetch().then(state => {
    //         this.setState({connected: state.isConnected})
    //       });
    // }

    // _RealizarLogin = async () => {
    //     this.setState({ loading: true })
    //     const resposta = await api.post('/login', {
    //         email: this.state.email,
    //         senha: this.state.senha
    //     })

    //     await AsyncStorage.setItem('userToken', resposta.data.token)
    //     await AsyncStorage.setItem('userCredential', jwt(resposta.data.token).role)

    //     if (resposta.data.token !== null) {
    //         this.props.navigation.navigate("Consultas")
    //     }
    // }

    // setarEmail = async(e) => {
    //     await this.setState({email: e})       
    //     if (this.state.email != '' && this.state.connected == true) {
    //         this.setState({disabled: false})
    //     } else {
    //         this.setState({disabled: true})
    //     }
    //     this.render()
    // }

    // setarSenha = async (e) => {
    //      await this.setState({senha: e})
    //      if (this.state.senha != '' && this.state.connected == true) {
    //         this.setState({disabled: false})
    //     } else {
    //         this.setState({disabled: true})
    //     }
    //      this.render()
    // }

    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    translucent={true}
                    backgroundColor="#cecece00"
                />

                <Image
                    style={styles.image}
                    source={logos2}
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'#fff'}
                    placeholder="Email"
                    // onChangeText={email => this.setarEmail(email)}
                    onChangeText={email => this.setState({email})}
                    />
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'#fff'}
                    placeholder="Senha"
                    secureTextEntry={true}
                    // onChangeText={senha => this.setarSenha(senha)}
                    onChangeText={senha => this.setState({senha})}
                />
                {/* { this.state.connected ? null : <Text style={styles.disconnected}>Você está desconectado</Text> } */}
                {/* { this.state.loading ? <ActivityIndicator color='#fff' size={45} style={styles.loading} /> : null } */}
                <TouchableOpacity
                    disabled={this.state.disabled}
                    style={[styles.button, this.state.disabled ? styles.buttonDisabled : styles.buttonEnabled ]}
                    // onPress={this._RealizarLogin}
                    onPress={this._realizarLogin}
                >
                    <Text style={styles.buttonText} > Entrar </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C8E3CF',
    },
    image: {
        width: 180,
        height: 180,
        margin: '5%',
        padding: '5%',
    },
    input: {
        width: '80%',
        color: 'black',
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginBottom: 30,
        paddingLeft: 10,
        paddingBottom: 1,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: 55,
        borderRadius: 10
    },
    buttonEnabled: {
        backgroundColor: '#5C9E6C',
    },
    buttonDisabled: {
        backgroundColor: '#C8E3CF'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900'
    },
    loading: {
        marginBottom: 30,
    },
    disconnected: {
        color: 'red',
        marginBottom: 10
    }

})



































// import React, { Component } from "react";

// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   ImageBackground,
//   TextInput,
//   TouchableOpacity,
//   AsyncStorage
// } from "react-native";

// import api from "../services/api";

// class SignIn extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { email: "", senha: "" };
//   }

//   _realizarLogin = async () => {
//     // console.warn(this.state.email + this.state.senha);

//     const resposta = await api.post("/login", {
//       email: this.state.email,
//       senha: this.state.senha
//     });

//     // console.warn(token);
//     const token = resposta.data.token;
//     await AsyncStorage.setItem("userToken", token);
//     this.props.navigation.navigate("MainNavigator");
//   };

//   render() {
//     return (
//       <ImageBackground
//         source={require("../assets/img/login.png")}
//         style={StyleSheet.absoluteFillObject}
//       >
//         <View style={styles.overlay} />
//         <View style={styles.main}>
//           <Image
//             source={require("../assets/img/loginIcon2x.png")}
//             style={styles.mainImgLogin}
//           />
//           <TextInput
//             style={styles.inputLogin}
//             placeholder="email"
//             placeholderTextColor="#FFFFFF"
//             underlineColorAndroid="#FFFFFF"
//             onChangeText={email => this.setState({ email })}
//           />

//           <TextInput
//             style={styles.inputLogin}
//             placeholder="senha"
//             placeholderTextColor="#FFFFFF"
//             password="true"
//             underlineColorAndroid="#FFFFFF"
//             onChangeText={senha => this.setState({ senha })}
//           />
//           <TouchableOpacity
//             style={styles.btnLogin}
//             onPress={this._realizarLogin}
//           >
//             <Text style={styles.btnLoginText}>LOGIN</Text>
//           </TouchableOpacity>
//         </View>
//       </ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: "rgba(183, 39, 255, 0.79)"
//   },
//   main: {
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignContent: "center",
//     alignItems: "center"
//   },
//   mainImgLogin: {
//     tintColor: "#FFFFFF",
//     height: 100,
//     width: 90,
//     margin: 10
//   },
//   btnLogin: {
//     height: 38,
//     shadowColor: "rgba(0,0,0, 0.4)", // IOS
//     shadowOffset: { height: 1, width: 1 }, // IOS
//     shadowOpacity: 1, // IOS
//     shadowRadius: 1, //IOS
//     elevation: 3, // Android
//     width: 240,
//     borderRadius: 4,
//     borderWidth: 1,
//     borderColor: "#FFFFFF",
//     backgroundColor: "#FFFFFF",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 10
//   },
//   btnLoginText: {
//     fontSize: 10,
//     fontFamily: "OpenSans-Light",
//     color: "#B727FF",
//     letterSpacing: 4
//   },
//   inputLogin: {
//     width: 240,
//     marginBottom: 10,
//     fontSize: 10
//   }
// });

// export default SignIn;











// import React, { Component } from 'react';
// import {
// 	StyleSheet,
// 	Text, View, StatusBar,
// 	ActivityIndicator,
// 	TouchableOpacity,
// } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';
// import AsyncStorage from '@react-native-community/async-storage'
// import { ApiRequest } from '../../services/apiServices';
// import { DefaultStyleSheet } from '../../assets/styles/padrao';

// class Login extends Component {

// 	static navigationOptions = {
// 		header: null
// 	};

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			email: "",
// 			senha: "",
// 			erro: "",
// 			carregando: false
// 		};
// 	}
// 	_validarDados = () => {
// 		const email = this.state.email
// 		if (email == null || email.trim().length === 0) {
// 			this.setState({ erro: "O email é obrigatorio" })
// 			return false
// 		}
// 		const senha = this.state.senha
// 		if (senha == null || senha.trim().length === 0) {
// 			this.setState({ erro: "A senha é obrigatoria" })
// 			return false
// 		}
// 		return true;
// 	}

// 	_realizarLogin = async () => {
// 		if (this._validarDados()) {
// 			this.setState({ carregando: true })
// 			await ApiRequest("Usuario/Login")
// 				.Cadastrar({
// 					email: this.state.email.trim(),
// 					senha: this.state.senha
// 				})
// 				.then(
// 					resultado => {
// 						switch (resultado.status) {
// 							case 200:
// 								resultado.json().then(
// 									resposta => {
// 										AsyncStorage.multiSet(
// 											[
// 												["TokenSpMedGroup", resposta.token],
// 												["EmailUsuarioSpMedGroup", this.state.email],
// 												["SenhaUsuarioSpMedGroup", this.state.senha]
// 											]
// 										)
// 										this.props.navigation.navigate("Consultas")
// 									}
// 								);
// 								break;
// 							case 404:
// 								resultado.json().then(
// 									resposta => {
// 										this.setState({ erro: resposta })
// 									}
// 								);
// 								break;
// 							default:
// 								break;
// 						}
// 					}
// 				)
// 				.catch(erro => {
// 					//console.warn(erro)
// 					this.setState({ erro: "Ocorreu um erro inesperado\nPor favor contate o administrador" })
// 				})
// 			this.setState({ carregando: false })
// 		}
// 	}

// 	render() {
// 		const carregador = 
// 		this.state.carregando?
// 		<ActivityIndicator size="large" color="#FFFFFF" animating={true}/>:
// 		null;
// 		return (
// 			<View style={styles.mainContent}>
// 				<StatusBar backgroundColor={'#5ba06d'} bar-barStyle={'dark-content'}/>
// 				<Text style={styles.loginTitle}>Login</Text>
// 				<View style={styles.loginForm}>
// 					<View style={styles.loginInputView}>
// 						<Text style={styles.loginLabelInput}>Digite seu email:</Text>
// 						<TextInput
// 							style={styles.loginInput}
// 							placeholder="seuemail@email.com"
// 							onChangeText={email => this.setState({ email })}
// 							textContentType='emailAddress'
// 							/>
// 					</View>
// 					<View style={styles.loginInputView}>
// 						<Text style={styles.loginLabelInput}>Digite sua senha:</Text>
// 						<TextInput
// 							style={styles.loginInput}
// 							placeholder="suasenha"
// 							onChangeText={senha => this.setState({ senha })}
// 							textContentType='password'
// 							password="true"
// 							secureTextEntry={true} 
// 						/>
// 					</View>
// 					<TouchableOpacity
// 						onPress={this._realizarLogin}
// 						style={styles.loginSubmit}
// 						activeOpacity={0.5}
// 						disabled={this.state.carregando}
// 					>
// 					<Text style={styles.loginSubmitText}>Login</Text>
// 					</TouchableOpacity>
// 					{carregador}
// 					<Text style={DefaultStyleSheet.errorMessage}>{this.state.erro}</Text>
// 				</View>
// 				{/* <Image
// 					source={require("../../assets/images/icon-login.png")}
// 					style={styles.loginIcon}
// 				/> */}
// 			</View>
// 		);
// 	}
// }
// export default Login;

// const styles = StyleSheet.create(
// 	{
// 		mainContent: {
// 			justifyContent: 'center',
// 			width: "100%",
// 			height: "100%",
// 			alignContent: "center",
// 			alignItems: "center",
// 			backgroundColor: '#81df99',
// 		},
// 		loginForm: {
// 			width: '100%',
// 			alignItems: 'center',
// 		},
// 		loginIcon: {
// 			resizeMode: 'contain',
// 			width: '100%',
// 			height: '100%',
// 			marginVertical: 15,
// 			top: 100
// 		},
// 		loginTitle: {
// 			letterSpacing: 5,
// 			fontSize: 28,
// 			fontWeight: '600',
// 			marginVertical: 15
// 		},
// 		loginInputView:{
// 			width:'70%',
// 			marginVertical: 5
// 		},
// 		loginLabelInput:{
// 			fontSize: 16,
// 			fontWeight: '600',
// 		},
// 		loginInput: {
// 			borderRadius: 14,
// 			borderWidth: 1,
// 			borderColor: 'white',
// 			backgroundColor: 'white',
// 			paddingVertical: 5,
// 			paddingHorizontal: 5,
// 			marginVertical: 15,
// 			...DefaultStyleSheet.shadowContent,
// 		},
// 		loginSubmit: {
// 			width: '45%',
// 			marginVertical: 10,
// 			borderWidth: 1,
// 			borderColor: '#8beda4',
// 			backgroundColor: '#8beda4',
// 			padding: 10,
// 			borderRadius: 14,
// 			alignContent: 'center',
// 			alignItems: 'center',
// 			...DefaultStyleSheet.shadowContent
// 		},
// 		loginSubmitText: {
// 			color: 'white',
// 			letterSpacing: 3,
// 			fontSize: 20,
// 		}
// 	}
// );