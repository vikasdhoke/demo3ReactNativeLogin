import { View, Text, StyleSheet } from 'react-native'
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
  });

export default Homescreen