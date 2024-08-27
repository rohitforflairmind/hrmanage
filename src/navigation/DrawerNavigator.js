import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawerContent from '../components/CustomDrawerContent'; // Create a custom drawer content

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      {/* Add other drawer screens here */}
    </Drawer.Navigator>
  );
}
