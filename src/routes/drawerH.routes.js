import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Artistas from "../pages/Artistas";
const Drawer = createDrawerNavigator();

export default function DrawerRoutesH() {
    return (
        <Drawer.Navigator screenOptions={{title: 'My Music List'}} >
            <Drawer.Screen name="Home"
                component={Home}
                options={{drawerLabel:"Home"}}
                />
            <Drawer.Screen name="Artistas"
                component={Artistas}
                options={{drawerLabel:"My Artists"}}
                />
            
        </Drawer.Navigator>
    );

}