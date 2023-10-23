// BottomNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from '../../screens/ListScreen';

const TabNavigator = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <TabNavigator
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#999999',
        style: {
          backgroundColor: '#000000',
        },
      }}>
      <TabNavigator.Screen name="Home" component={ListScreen} />
      <TabNavigator.Screen name="Settings" component={ListScreen} />
    </TabNavigator>
  );
};

export default BottomTabNavigator;