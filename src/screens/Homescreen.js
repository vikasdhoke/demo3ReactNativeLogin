import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { decrement } from '../redux/cake/counterSlice'


const Homescreen = ( { navigation }) => {

  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  const onSignOutPressed = ()=>{ 
    // console.warn('Logged out')
      navigation.navigate("Login")     
    } 
 
  return ( 
    <View style={styles.root} >
      <Text  style={styles.wel} >Welcome  to Cake shop </Text>    

          <Text style={styles.wel} >no of cakes available {count}   </Text>    

      <TouchableOpacity  style= {styles.buttonStyle} 
       text="Buy cake" 
       onPress={ ()=> dispatch(decrement()) } 
       >
          <Text style= {styles.buttonText} >Buy cake</Text>
        </TouchableOpacity>  

      <TouchableOpacity 
       style= {styles.buttonStyle}  
       onPress={onSignOutPressed}
       >
          <Text style= {styles.buttonText} >Logout</Text>
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
    marginVertical: 15,    
    paddingHorizontal: 10,    
    alignItems: 'center',    
  },

  buttonText : { 
    color: 'white',      
  },

  wel : { 
    fontSize: 24,      
  },


  });

export default  Homescreen