
import {SafeAreaView, Text, View , StyleSheet} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Homescreen from './src/screens/Homescreen';
import SignInscreen from './src/screens/SignInscreen';
import store from './src/redux/store';



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
 
<Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={SignInscreen} />
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>


  )
}

const styles = StyleSheet.create( {
    root: {
      flex: 1,
    },
  });
export default App;

