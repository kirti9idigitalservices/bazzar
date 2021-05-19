import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image
          style={{ width: 300, height: 200, marginTop:200}}
          source={require("./public/Splash_Logo.png")}
        />
      <Text style={blue.box}>Bluetooth</Text>
      <StatusBar style="auto" />
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#0a3d91',
    alignItems: 'center',
    justifyContent: 'center',},
  
});

const blue = StyleSheet.create({
    box:{
    
      color: 'white',
      paddingTop: 200,
      fontSize:17,
     },
  });
