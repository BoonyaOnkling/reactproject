import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import User from './components/User'
import Logo from './components/Logo'
import LotsOfGreetings from './components/LotsOfGreetings'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/inputText'
import UserNameandPassWord from './components/UserNameandPassWord'
import Touchable_Example from './components/Touchable_Example'
import TouchablePractice from './components/TouchablePractice'

const App = () => {
  return (
    <View>
      {/* <Logo/> */}
      {/* <User/> */}
      {/* <LotsOfGreetings/> */}
      {/* <MyCustomTextWith/> */}
      {/* <Count/> */}
      {/* <InputText/> */}
      {/* <UserNameandPassWord/> */}
      {/* <Touchable_Example/> */}
      <TouchablePractice/>
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