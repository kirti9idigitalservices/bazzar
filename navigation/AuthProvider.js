import React, { createContext, useState } from 'react';
import { Alert, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        showLoading,

        login: async (email, password) => {
          try {
            let response = await auth().signInWithEmailAndPassword(email, password)
            if (response && response.user) {
              Alert.alert("Welcome! ✅", "Logged in successfully")
            }
          } catch (e) {
            Alert.alert(e.message)
          }
        },  

        register: async (email, password, phone, fname, lname) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password, phone, fname, lname)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                console.log('Registration Details', auth().currentUser);
                if (auth().currentUser != null) {
                  Alert.alert("Congratulations! ✅", "Account created successfully")
                }
                firestore().collection('users').doc(auth().currentUser.uid)
                  .set({
                    fname: fname,
                    lname: lname,
                    phone: phone,
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    Alert.alert('Sorry! ❌', error.message)
                  })
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                Alert.alert('Sorry! ❌', error.message)
              });
          } catch (e) {
            Alert.alert('Sorry! ❌', e.message)
          }
        },
        
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            Alert.alert('Sorry! ❌', e.message)
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};