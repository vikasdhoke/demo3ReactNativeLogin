
import {SafeAreaView, Text, View , StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInscreen from './src/screens/SignInscreen';
import Homescreen from './src/screens/Homescreen';
// import store from './src/store';


import { Provider } from 'react-redux';
import { useSelector,useDispatch } from 'react-redux';

// store.subscribe(()=>console.log(store.getState()) )

const App = () => {
  const Stack = createNativeStackNavigator();

  // const myState = useSelector((state)=> state.navigateto)
  return (
    // <SafeAreaView>
    //   {/* <Provider store={store} > */}
    //   {/* <NavigationContainer > */}

    //   {/* <Text>Hello World  </Text> */}
    //   <SignInscreen /> 
    //     {/* <Homescreen /> */}

    //     {/* </NavigationContainer> */}
    //     {/* </Provider> */}
    // </SafeAreaView>***

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={SignInscreen} />
        <Stack.Screen name="Home" component={Homescreen} />
      </Stack.Navigator>
    </NavigationContainer>


  )
}

const styles = StyleSheet.create( {
    root: {
      flex: 1,
    },
  });
export default App;

