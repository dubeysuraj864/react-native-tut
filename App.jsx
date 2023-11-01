import React, {useState} from 'react';
import {Button, StyleSheet, Text, Form, View, TextInput} from 'react-native';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(name, email, password);
  const data = () => {
    setDisplay({
      name: name,
      email: email,
      password: password,
    });
    console.log(display);
  };
  return (
    <>
      <View style={styles.main}>
        <View style={styles.mainChild}>
          <Text style={styles.heading}>Register</Text>
          <View>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={text => setName(text)}
              value={name}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              onChangeText={text => setEmail(text)}
              value={email}
            />

            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
          <View style={styles.signUpButton}>
            <Button onPress={data} title="Register" color="transparent" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#D2DE32',
    height: 1000,
  },
  mainChild: {
    backgroundColor: '#A2C579',
    borderRadius: 40,
    padding: 40,
    margin: 10,
    marginTop: 20,
    height: 600,
    display: 'flex',
    flexDirection: 'col',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signUpButton: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 40,
    width: 280,
  },
  textInput: {
    borderWidth: 2,
    paddingStart: 20,
    borderRadius: 50,
    marginVertical: 10,
    backgroundColor: '#FFFFDD',
    width: 300,
  },
  heading: {
    color: '#000',
    textShadowColor: '#000',
    fontSize: 60,
  },
});

export default App;
