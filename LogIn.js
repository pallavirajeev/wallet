import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react'

export default function LogIn({navigation, props}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const checkEmpty = () => {
      if(username=="") {
        console.log('Username Required')
      }
      if(password=="") {
        console.log('Password Required')
      }
    }
  return (

    <View style={styles.container}>
      
      <Text style={{fontSize: 50, fontWeight: 'bold', position: 'absolute', top: 30}}>Wallet</Text>
      <Text style={{position: 'absolute', bottom: 130, left: 30}}>Don't have an account?</Text> 
      <Image
        style={{width:170,height:170,marginBottom: 60}}
        source={require('../assets/woplliLogo.png')}
      />
      <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Username"
         placeholderTextColor="#FFFFFF"
         onChangeText={(username) => setUsername(username)}
       />
     </View>
     <View style={styles.inputView}>
       <TextInput
         style={styles.TextInput}
         placeholder="Password"
         placeholderTextColor="#FFFFFF"
         secureTextEntry={true}
         onChangeText={(password) => setPassword(password)}
       />
     </View>

      <TouchableOpacity>
        <Text style={styles.forgotButton}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={checkEmpty}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

    <View style={styles.SignUp}>
      <Button 
          title="Sign Up" color= "black"
          onPress={() => navigation.navigate("Sign Up")}
      />
    </View>
        
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 120,
    alignItems: 'center',
  
  },
  inputView: {
    backgroundColor: "#949A9E",
    width: "200%",
    borderRadius: 10,
    height: 45,
    marginBottom: 30,
    alignItems: "left",
  },
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 2,
    color: 'white'
  },

  forgotButton: {
    height: 30,
    marginBottom: 30,
    position: 'absolute',
    left: 70,
    bottom: -50
  },

  loginButton: {
    width: "100%",
    borderRadius: 10,
    height: 45,
    marginBottom: 30,
    alignItems: "center",
    backgroundColor: "#163E61",
    position: 'absolute',
    bottom: 160
  },

  loginText: {
    color: "white",
    height: 50,
    padding: 15,
  },

  signupText: {
    position: 'absolute',
    top: 219,
    left: 130,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  SignUp: {
    position: "absolute",
    right: 20,
    bottom: 125,

  }

});
