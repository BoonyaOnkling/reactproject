import { StyleSheet, Text, View, } from "react-native";
import React from "react";
import Logo from "./components/Logo";
import styles from "./components/Styles";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,styles.warning]}>HELLO React Native</Text>
      <Logo />
    </View>
  );
};

export default App;


