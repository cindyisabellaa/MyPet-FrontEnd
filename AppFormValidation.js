import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.judul}>My Pet</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Username/Email"
        onChangeText={(text) => {this.setState({Email: text})}}
      /> 
      <Text style={{color:'red', marginLeft:20}} > {this.state.emailError} </Text>
      <TextInput 
        style={styles.input} 
        placeholder="Password"
        secureTextEntry
      /> 
      <View style={styles.btnContainer}> 
        <TouchableOpacity 
          style={styles.userBtn}
          onPress={() => alert("Login Success")}
        >
          <Text style={styles.btnText}> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.userBtn}
          onPress={() => alert("Sign up success")}
        >
          <Text style={styles.btnText}> Sign up </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99B898',
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
  input: {
    width: "90%",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10
  },
  btnContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
  },
  userBtn: {
    backgroundColor: "#FECEAB",
    padding: 15,
    width: "45%",
    justifyContent: "center"
  }, 
  btnText:{
    fontSize: 18,
    textAlign: "center"
  },
});
