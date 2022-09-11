import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
// import Custombutton from '../components/Custombutton'
// import { connect, useDispatch, useSelector } from 'react-redux'
import {  useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from './counterSlice'
import { decrement, selectCount } from '../redux/cake/counterSlice'
// import { buyCake } from '../redux'
import { buyCake } from '../redux/cake/Actioncreator/cakeActions'
// import { bindActionCreators } from 'redux'
// import actionCreators from '../redux/cake/index'

const Homescreen = ( {props , navigation} ) => {
// const Homescreen = ( props ,{navigation} ) => {
   const dispatch = useDispatch()
  //  const buyCake = bindActionCreators(actionCreators,dispatch )

  //  console.warn(props.numOfCakes)
   
  // const  numOfCakes = useSelector(state =>state.numOfCakes)
  // const count = useSelector(selectCount);

  const count = useSelector((state) => state.counter.value)
  // const count = useSelector((state) => state.counter) 
  // console.log( state.counter)
  // const count = useSelector((state) => state.counter.count)
    
  // const {myName }= route.params.myName;

    const onSignOutPressed =()=>{

        console.warn('Logged out')
        navigation.navigate("Login"  )
    
      }
      const handler = () =>{
        // console.warn('Logged out')
        // return v
        // console.warn(props.buyCake) 
        
    
      }

  return (
    <View style={styles.root} >
      {/* <Text>Welcome  {myName} </Text> */}
      <Text>Welcome  to Cake shop </Text>
     

          <Text>`no of cake available {count} `  </Text>      
      
    
      <TouchableOpacity  style= {styles.buttonStyle} 
       text="Buy cake" 
      //  onPress={ ()=> dispatch(actionCreators.buyCake() )} 
      //  onPress={ ()=> buyCake() } 
       onPress={ ()=> dispatch(decrement()) } 
       >
          <Text>Buy cake</Text>
        </TouchableOpacity>  
      {/* <Custombutton text="Logout" onPress={onSignOutPressed} /> */}

      <TouchableOpacity 
       style= {styles.buttonStyle}  
       onPress={onSignOutPressed}
       >
          <Text>Logout</Text>
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
    marginVertical: 5,    
    paddingHorizontal: 10,    
    alignItems: 'center',    
  },
  });

  // const mapStateToProps = state => {
  //   return {
  //     numOfCakes: state.numOfCakes
  //   }
  // }

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     buyCake: dispatch(buyCake())
      
  //   }
  // }

// export default connect(mapStateToProps, mapDispatchToProps) (Homescreen)
export default  Homescreen