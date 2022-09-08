import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Custominput = ({value,placeholder, setvalue,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setvalue}
      placeholder={placeholder}
       style={styles.input}
       secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create( {
    container: {
        backgroundColor: 'white',
        width: '100%',    
        borderColor: 'gray',    
        borderWidth: 1,    
        borderRadius: 5,    
        // marginTop: 200,    
        marginVertical: 10,    
        paddingHorizontal: 10,    
    },
    input: {
        alignItems: 'center',
        padding: 20,    
    },
    
  });

export default Custominput