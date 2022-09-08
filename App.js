
import {SafeAreaView, Text, View , StyleSheet} from 'react-native'
import React from 'react'
import SignInscreen from './src/screens/SignInscreen';
import Homescreen from './src/screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView>
      {/* <NavigationContainer > */}

      {/* <Text>Hello World  </Text> */}
      <SignInscreen /> 
        {/* <Homescreen /> */}

        {/* </NavigationContainer> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create( {
    root: {
      flex: 1,
    },
  });
export default App;

