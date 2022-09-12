import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const SignInscreen = ({navigation}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    if (username === 'Vikas' && password === '123') {
      navigation.navigate('Home');
    } else {
      Alert.alert(`invalid credentials`);
    }
  };

  return (
    <View style={styles.root}>
      {/* <Text>SignInscreen</Text> */}
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter yourr name</Text>
        <TextInput
          style={styles.inputStyle}
          value={username}
          onChangeText={actualdata => {
            setUserName(actualdata);
          }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter yourr password</Text>
        <TextInput
          style={styles.inputStyle}
          value={password}
          onChangeText={actualdata => {
            setPassword(actualdata);
          }}
        />
      </View>

      <TouchableOpacity style={styles.buttonStyle} onPress={onSignInPressed}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    // marginTop: 200,
    marginVertical: 10,
    paddingHorizontal: 10,
  },

  labels: {
    fontSize: 18,
    // color: "#7D7D7D",
    color: '#7D7D7D',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },

  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0,3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: 'regular',
    fontSize: 18,
  },

  buttonStyle: {
    backgroundColor: 'blue',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
  },
});

export default SignInscreen;
