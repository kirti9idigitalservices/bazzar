import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import bluetooth from '../Screen/bluetooth';

const RootStack = createStackNavigator();

const AuthStack = ({ navigation }) => (

  <RootStack.Navigator>

    <RootStack.Screen name="bluetooth" component={bluetooth}
      // Hiding header for Welcome Screen
      options={{ headerShown: false }}
    />

    <RootStack.Screen name="Login" component={Login}
      // Hiding header for Options Screen
      options={{ headerShown: false }}
    />

  


  </RootStack.Navigator>
);

export default AuthStack;