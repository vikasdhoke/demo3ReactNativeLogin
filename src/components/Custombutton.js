import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const Custombutton = ({onPress ,text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text} </Text>
    </Pressable>    
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        width: '100%',    
        padding: 15,    
        // borderColor: 'gray',    
        // borderWidth: 1,    
        borderRadius: 5,      
        marginVertical: 5,    
        paddingHorizontal: 10,    
        alignItems: 'center',    
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
         
    },
})

export default Custombutton