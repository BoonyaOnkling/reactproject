import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Stysheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
    </View>
  )
}

export default Stysheet

const styles = StyleSheet.create({
    container: 
    {flex: 1,
        padding: 24,
        backgroundColor: "#B482D9"
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#F3D25F",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
});
//export default App;