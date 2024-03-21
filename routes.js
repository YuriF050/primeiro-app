import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './src/routes/drawer.routes';

export default function Router() {
  return (
    <NavigationContainer >
      <DrawerRoutes/>
    </NavigationContainer>
  );
}
