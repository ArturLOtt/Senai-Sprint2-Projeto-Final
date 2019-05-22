import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";

import Login from './Pages/Login'
import Consultas from './Pages/Consultas'

// console.disableYellowBox= true

const AuthStack = createStackNavigator({Login})

const MainNavigator = createBottomTabNavigator(

    {
        Consultas
    },{
        initialRouteName: "Consultas",
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: true,
            showIcon: false,
            inactiveBackgroundColor: "orange",
            activeBackgroundColor: "royalblue",
            activeTintColor: "green",
            inactiveTintColor: "rebeccapurple",
            style: { height: 50 }

        }
    }
    // { "Consultas": Consultas }
)


export default createAppContainer(
    createSwitchNavigator(
        {
            MainNavigator,
            AuthStack
        },
        {
            initialRouteName: "AuthStack",
        }
    )
)








// import { 
// 	createAppContainer, 
// 	createSwitchNavigator, 
// 	createStackNavigator
// } from 'react-navigation';
// import Login from './pages/usuario/login';
// import Home from './pages/home';
// import ListarConsulta from './pages/consulta/listarConsulta';
// import ListarConsultas from './pages/consulta/listarConsultas';

// const authStack = createStackNavigator(
// 	{
// 		Login:Login,
// 		Home:Home
// 	},
// 	{
// 		initialRouteName: "Home"
// 	}
// )

// const topNavigator = createStackNavigator(
// 	{
// 		"Consultas":{
// 			screen:ListarConsultas,
// 			path:'Usuario/Consultas',
// 			navigationOptions:{
// 				title: 'Minhas Consultas',
// 				headerStyle:{
// 					backgroundColor:'#81df99'
// 				},
// 				headerTitleStyle: {
// 					color: 'white'
// 				},
				
// 			},

// 		},
// 		"Consulta":{
// 			screen:ListarConsulta,
// 			path:'Usuario/Consulta/:consulta.idConsulta',
// 			navigationOptions: ({ navigation }) => ({
// 				title: `Consulta #${navigation.state.params.consulta.id}`,
// 				headerTintColor: 'white',
// 				headerStyle:{
// 					backgroundColor:'#81df99'
// 				},
// 				headerTitleStyle: {
// 					color: 'white'
// 				}
// 			}),
// 		}
// 	},{
// 		initialRouteName:"Consultas",
// 	}

// );

// export default createAppContainer(
//   createSwitchNavigator(
//     {
// 			"Login Usuario":authStack ,
// 			"Pagina Usuario":topNavigator
//     },{
// 		initialRouteName:"Login Usuario"
// 	}
//   )
// )