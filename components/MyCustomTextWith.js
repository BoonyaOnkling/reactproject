import { View, Text } from 'react-native'
import React from 'react'

const Text1 = ({fName1,lName1}) => {
    return (
        <View style={{alignItems: 'center'}}>
           <text>My First Name is {fName1}! and  Last name is {lName1} </text> 
        </View>
    )
}
const Text2 = ({fName2,lName2}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <text>Your First Name is {fName2}! and Last Name is {lName2}</text>
        </View>
    )
}

const MyCustomTextWith = () => {
  return (
    <View style={{alignItems: 'center',top: 450}}>
      <Text1 fName1='Booonyanutch'  lName1='Onkling'/>
      <Text2 fName2='Tanatat' lName2='Wongpanyanurak'/>
    </View>
  )
}

export default MyCustomTextWith