import { View, Text,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';

const SignInscreen = () => {
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');

  const onSignInPressed =()=>{
    console.warn('Login')

  }

  return (
    <View style={styles.root} >
      {/* <Text>SignInscreen</Text> */}
      <Custominput 
      placeholder="Username" 
      value={username} 
      setvalue={setUserName}
       />   
      <Custominput 
      placeholder="Password" 
      value={password}  
      setvalue={setPassword}
    //   secureTextEntry = {true}
    //   secureTextEntry 
       />

       <Custombutton text="Login" onPress={onSignInPressed} />

    </View>
  )
}

const styles = StyleSheet.create( {
    root: {
        alignItems: 'center',
        padding: 20,    
    },
  });

export default SignInscreen