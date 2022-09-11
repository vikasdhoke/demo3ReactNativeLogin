
import {SafeAreaView, Text, View , StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import SignInscreen from './src/screens/SignInscreen';
import { Provider } from 'react-redux';
// import store from './src/state/store';
// import store from './src/redux/store'; 
import Homescreen from './src/screens/Homescreen';
import SignInscreen2 from './src/screens/SignInscreen2';
import store from './src/redux/store';

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
<Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {/* <Stack.Screen name="Login" component={SignInscreen} /> */}
        <Stack.Screen name="Login" component={SignInscreen2} />
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

