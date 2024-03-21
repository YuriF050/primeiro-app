import { createStackNavigator } from '@react-navigation/stack';
import DrawerRoutesH from './drawerH.routes';

const Stack = createStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen
                name="drawer2"
                component={DrawerRoutesH}
                
            />
           
            
        </Stack.Navigator>
    );

}
