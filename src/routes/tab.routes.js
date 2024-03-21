import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from '../pages/Login/index';
import Cadastro from '../pages/Cadastro/index';
import {Feather, } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen
                name="Login"
                component={Login}
                options={{tabBarIcon: (color, size)=> <Feather name="log-in" color={color}  size={30}/>, title: ""}}
            />
            <Tab.Screen
                name="Cadastro"
                component={Cadastro}
                options={{tabBarIcon: (color, size)=> <Feather name="plus" color={color}  size={30}/>, title: ""}}
            />
            
        </Tab.Navigator>
    );

}
