import React from 'react';
import { useSelector } from 'react-redux';
import StackNavigator from './navigation/StackNavigator';

export default function AppRoutes() {
  const user = useSelector((state) => state.user.user);

  return <StackNavigator role={user?.role} />;
}
