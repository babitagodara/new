import React from 'react';
import{View,Image, Text} from 'react'
 

const Logo=()=>{
    return(
    <View>
    <Image>
        <Image source={require('./images/logo.png')}/>
    </Image>
    <Text>cuttenty</Text>
    </View>
  )
}
export default Logo 