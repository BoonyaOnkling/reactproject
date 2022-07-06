import { View, Text, StyleSheet, TextInput,Button } from "react-native";
import React,{useState} from "react";
import { YellowBox } from "react-native-web";

const InputText = () => {
  const [userName, setUserName] = userState("");

  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: "center" }}>
      <Text>Insert any text in below input</Text>
      <TextInput
        value={userName}
        onChangeText={(userName) => {
          setUserName(userName);
        }}
        style={styles.textinput}
        placeholder="Please input username"
      />
      <text style={{ color: "red", fontSize: 20 }}>{userName}</text>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  textinput: {
    widht: 250,
    height: 45,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor:'yellow',
  },
});
