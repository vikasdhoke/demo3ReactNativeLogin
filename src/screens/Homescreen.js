import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { decrement } from '../redux/cake/counterSlice'
const Homescreen = (  navigation ) => {

   const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

    const onSignOutPressed =()=>{ 

        console.warn('Logged out')
        navigation.navigate("Login"  )
    
      }

  return (
    <View style={styles.root} >
      <Text>Welcome  to Cake shop </Text>    

          <Text>`no of cake available {count} `  </Text>    

      <TouchableOpacity  style= {styles.buttonStyle} 
       text="Buy cake" 
       onPress={ ()=> dispatch(decrement()) } 
       >
          <Text>Buy cake</Text>
        </TouchableOpacity>  

      <TouchableOpacity 
       style= {styles.buttonStyle}  
       onPress={onSignOutPressed}
       >
          <Text>Logout</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create( {
    root: {
        alignItems: 'center',
        padding: 20,    
        marginTop: 200,    
    },
    container: {
      backgroundColor: 'blue',
      width: '100%',    
      padding: 15,  
      borderRadius: 5,      
      marginVertical: 5,    
      paddingHorizontal: 10,    
      alignItems: 'center',    
  },  
  buttonStyle : {
    backgroundColor: 'blue',  
    width: '100%',    
    padding: 15,     
    borderRadius: 5,      
    marginVertical: 5,    
    paddingHorizontal: 10,    
    alignItems: 'center',    
  },
  });

export default  Homescreen