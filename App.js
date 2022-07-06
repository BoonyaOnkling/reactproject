import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/inputText'
import UserNameandPassWord from './components/UserNameandPassWord'

const App = () => {
  return (
    <View>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      <UserNameandPassWord/>
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItens:'center'
  },
})