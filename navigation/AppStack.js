import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Screen/Dashboard';

const RootStack = createStackNavigator();
const AppStack = ({ navigation }) => (

  <RootStack.Navigator>

    <RootStack.Screen name="Dashboard" component={Dashboard}
      // Hiding header for Options Screen
      options={{
        headerShown: false,
      }}
    />

  </RootStack.Navigator>
);

export default AppStack;