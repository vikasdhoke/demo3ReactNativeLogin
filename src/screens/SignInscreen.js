import { View, Text,StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import Custominput from '../components/Custominput';
import Custombutton from '../components/Custombutton';
// import {login,logout} from "./actions/index"
import { useSelector,useDispatch } from 'react-redux';

const SignInscreen = ({navigation}) => {
  const [username,setUserName] = useState('');
  const [password,setPassword] = useState('');

  // const myState = useSelector((state)=> state.navigateto)

  // const dispatch = useDispatch()

  const onSignInPressed =()=>{
    // console.warn('Login')
    // dispatch(login()) 
    if (username==="Vikas" && password==="123" ) {
      Alert.alert(`Thank you ${username}`)
      // navigation.navigate("Home" , {myName: `${username}}` )
      navigation.navigate("Home"  )
    }else{
      Alert.alert(`invalid credentials`)
    }
    

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
       {/* <Custombutton text="Login" onPress={dispatch(login)} /> */}

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