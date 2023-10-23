import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SupervisorDashboard from './src/screens/SupervisorDashboard';
import SiteManagerDashboard from './src/screens/SiteManagerDashboard';
import AddEmployee from './src/screens/AddEmployee';
import AddSite from './src/screens/AddSite';
import MakeOrder from './src/screens/MakeOrder';
import AddSupplier from './src/screens/AddSupplier';
import ViewOrderDetails from './src/screens/ViewOrderDetails';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen.js';
import EmployeeManagement from './src/screens/EmployeeManagement';
import SiteManagement from './src/screens/SiteManagement';
import SupplierManagement from './src/screens/SupplierManagement';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="SupervisorDashboard" 
      component={SupervisorDashboard} 
      options={
        {
          headerShown: false,
          headerTitle: 'Supervisor Dashboard',
        }
      }
      />

      <Stack.Screen name="SiteManagerDashboard" 
      component={SiteManagerDashboard}
      options={
        {
          headerShown: false,
          headerTitle: 'Site Manager Dashboard',
        }
      } />

      <Stack.Screen name="AddEmployee"
      component={AddEmployee}
      options={
        {
          headerShown: false,
          headerTitle: 'Add Employee',
        }
      } />


      <Stack.Screen name="AddSite"
      component={AddSite}
      options={
        {
          headerShown: false,
          headerTitle: 'Add Site',
        }
      } />
      
      <Stack.Screen name="MakeOrder"
      component={MakeOrder}
      options={
        {
          headerShown: false,
          headerTitle: 'Make Order',
        }
      } />

      <Stack.Screen name="AddSupplier"
      component={AddSupplier}
      options={
        {
          headerShown: false,
          headerTitle: 'Add Supplier',
        }
      } />

      <Stack.Screen name="ViewOrderDetails"
      component={ViewOrderDetails}
      options={
        {
          headerShown: false,
          headerTitle: 'View Order Details',
        }
      } />

      <Stack.Screen name="OrderDetailsScreen"
      component={OrderDetailsScreen}
      options={
        {
          headerShown: false,
          headerTitle: 'Order Details Screen',
        }
      } />

      <Stack.Screen name="EmployeeManagement"
      component={EmployeeManagement}
      options={
        {
          headerShown: false,
          headerTitle: 'Employee Management',
        }
      } />

      <Stack.Screen name="SiteManagement"

      component={SiteManagement}
      options={
        {
          headerShown: false,
          headerTitle: 'Site Management',
        }
      } />

      <Stack.Screen name="SupplierManagement"
      component={SupplierManagement}
      options={
        {
          headerShown: false,
          headerTitle: 'Supplier Management',
        }
      } />

    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="profileDetails" component={ProfileScreen} />
    </Stack.Navigator>
  );
}


function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="HomeStack"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#2F8BCB' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarActiveTintColor: '#3F3A3A',
          tabBarInactiveTintColor: '#3F3A3A',
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'HomeStack') {
              iconName = focused ? 'home-circle' : 'home-circle-outline';
            } else if (route.name === 'ProfileStack') {
              iconName = focused ? 'account-settings' : 'account-settings-outline';
            }
            return (
              <MaterialCommunityIcons name={iconName} size={size} color={'#3F3A3A'} />
            );
          },
          tabBarStyle: {
            backgroundColor: '#E5E2B4',
          },
        })}
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            title: 'Home',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: 'Profile',
            title: 'Profile',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
