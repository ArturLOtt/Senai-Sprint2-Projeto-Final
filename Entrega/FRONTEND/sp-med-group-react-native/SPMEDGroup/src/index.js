import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
  } from "react-navigation";
  
  import Login from "./pages/Login";
  import Doctor from "./pages/Doctor";
  import Patient from "./pages/Patient";
  
  const AuthStack = createStackNavigator({ Login });
  
  const MainNavigator = createBottomTabNavigator(
    {
      Patient,
      Doctor
    },
    {
      initialRouteName: "Main",
      swipeEnabled: true,
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        inactiveBackgroundColor: "#dd99ff",
        activeBackgroundColor: "#B727FF",
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#FFFFFF",
        style: {
          height: 50
        }
      }
    }
  );
  
  //export default createAppContainer(MainNavigator);
  
  export default createAppContainer(
    createSwitchNavigator(
      {
        MainNavigator,
        AuthStack
      },
      {
        initialRouteName: "AuthStack"
      }
    )
  );
  