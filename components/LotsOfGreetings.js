import { View, Text } from 'react-native'
import React from 'react'


const Greeting = (props)=>{
    return(
        <view style={{alignItems: 'center'}}>
            <text>Hello {props.name} {props.date}</text>
        </view>
    )
};

// const Greeting = ({name}) => {
//     return (
//         <>
        
//         </>
//     )
// }


const LotsOfGreetings = () => {
  return (
    <View style={{alignItems: 'center', top:50}}>
        <Greeting name= 'Marry Chirsmas '    date='Date: 25 / 2022'/>
        <Greeting name= 'Happy New Year '    date='Date: 1 / 2023'/>
        <Greeting name= 'Songkarn Fastival ' date='Date: 13-15 / 2022'/>
    </View>
  )
}

export default LotsOfGreetings