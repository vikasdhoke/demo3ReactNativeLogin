import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Custombutton from '../components/Custombutton'

const Homescreen = (  {route , navigation,} ) => {
  // const {myName }= route.params.myName;

    const onSignOutPressed =()=>{
        console.warn('Logged out')
        navigation.navigate("Login"  )
    
      }

  return (
    <View style={styles.root} >
      {/* <Text>Welcome  {myName} </Text> */}
      <Text>Welcome   </Text>
      <Text>no of cake    </Text>
      {/* <Custombutton style={styles.container}>Buy cake </Custombutton> */}

      <Custombutton text="Buy cake"  />
      <Custombutton text="Logout" onPress={onSignOutPressed} />
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
  });

export default Homescreen