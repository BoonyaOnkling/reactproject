import { StyleSheet, Text, View, TextInput,Button } from "react-native";
import React, { useState } from "react";

const UserNameandPassWord = () => {
  const [email, setEmail] = useState("");
  const [passW, setPassW] = useState("");

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        style={styles.input}
        placeholder="Email"
      />

      <TextInput
        value={passW}
        onChangeText={(passW) => {
          setPassW(passW);
        }}
        style={styles.input}
        placeholder="Password"
      />

      <Button
        title='submit'
        
        onPress={()=>alert('email : '+email + '\npassword : ' + passW)}
        style={styles.submitButton}
      />
    </View>
  );
};

export default UserNameandPassWord;

const styles = StyleSheet.create({
  container: {
        paddingTop: 23,
    },
    input: {
        widht: 250,
        height: 45,
        margin: 15,
        hright: 40,
        borderColor: '#F812D7',
        borderWidth: 2,
    },
    submitButton: {
        backgroundColor: '#F812D7',
        padding: 10,
        margin: 15,
        hright: 40,
    },
    submitButtoText: {
        color: 'white',
    },
  textinput: {
    widht: 250,
    height: 45,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "pink",
  },
});
