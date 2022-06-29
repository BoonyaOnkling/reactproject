import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Logo = () => {
  const textLogo = "Thai-Nichi";
  const isTH = true;
  return (
    <View>
      <Text style={styles.TextLogo}>TNI</Text>
      <Text>{textLogo}</Text>
      {/* if */}
      {
        isTH && <Text>ภาษาไทย</Text> 
      }
      {/* *********************************/}
      {/* ifelse  */}
      {
        isTH
        ? <Text>ภาษาไทย</Text> 
        : <Text>ภาษาอังกฤษ</Text> 
      }
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    TextLogo:{
        color:"Blue",
        fontSize:60
    }
})