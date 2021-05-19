import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import bluetooth from '../navigation/bluetooth';

const RootStack = createStackNavigator();
const App = ({ navigation }) => (

  <RootStack.Navigator>

    <RootStack.Screen name="bluetooth" component={bluetooth}
      // Hiding header for Options Screen
      options={{
        headerShown: false,
      }}
    />

  </RootStack.Navigator>
);

export default App;