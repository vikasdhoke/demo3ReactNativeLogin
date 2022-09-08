import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Custombutton from '../components/Custombutton'

const Homescreen = () => {
    const onSignOutPressed =()=>{
        console.warn('Logged out')
    
      }

  return (
    <View style={styles.root} >
      <Text>Homescreen</Text>

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