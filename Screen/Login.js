import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./public/Blue_Logo.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
      <Image style={styles.lock} source={require("./public/user.png")} />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="black"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
    
        <Image style={styles.lock} source={require("./public/padlock.png")} />
        
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        <Image style={styles.lock} source={require("./public/private.png")} />
      </View>
 
      <Text style={styles.rem}>Remember Password</Text>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

       <Text style={styles.rem}>login with</Text>

       <View style={styles.siteinput}>
       <Image style={styles.site} source={require("./public/Instagram.png")} />
       <Image style={styles.site} source={require("./public/Google.png")} />
        <Image style={styles.site} source={require("./public/Facebook.png")} />
     </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
 
  image: {
    marginBottom: 40,
    width: 200,
    height: 120,
  },

  lock:{
    height:20,
    width:20,
    marginTop:13,
    marginLeft:15,
  
  
  },

  site: {
    height:25,
    width:25,
    marginTop:13,
    marginLeft:15,
    flexDirection: 'row'

  },

  siteinput: {
  
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 70,
    marginLeft: 120,
    flexDirection: 'row',


  },
  
 
  inputView: {
    backgroundColor: "#ccc",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    justifiyContent: 'space-between',

  
  },
 
  TextInput: {
    height: 45,
    marginLeft: 5,
  },

forgot_button: {
    height: 20,
    marginBottom: 30,
    backgroundColor: "#ccc",
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "green",
  },
});