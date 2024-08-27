import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import EmployeeScreen from '../screens/EmployeeScreen';
import HRScreen from '../screens/HRScreen';
import LeadScreen from '../screens/LeadScreen';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const user = useSelector((state) => state.user.user);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {user.role === 'Employee' && <Tab.Screen name="Employee" component={EmployeeScreen} />}
      {user.role === 'HR' && <Tab.Screen name="HR" component={HRScreen} />}
      {user.role === 'Lead' && <Tab.Screen name="Lead" component={LeadScreen} />}
    </Tab.Navigator>
  );
}
