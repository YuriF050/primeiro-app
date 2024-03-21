import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import TabRoutes from "./tab.routes";
import StackRoutes from "./stack.routes";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}} initialRouteName="TabRoutes">
            <Drawer.Screen name="TabRoutes" component={TabRoutes} 
                options={{DrawerIcon: (color, size)=> <Feather name="log-in" color={color}  size={size}/>, drawerLabel:"Login"}}/>
            <Drawer.Screen
                name="StackRoutes"
                component={StackRoutes}
                options={{DrawerIcon: (color, size)=> <Feather name="Home" color={color}  size={size}/>, drawerLabel:"Home"}}/>
            
        </Drawer.Navigator>
    );

}